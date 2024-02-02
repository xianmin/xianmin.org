+++
title = "记录一次 Debug Windows 蓝屏 BSOD 修复"
date = 2024-02-01T14:20:00+08:00
tags = ["windows", "bsod", "debug"]
categories = ['计算机']
draft = false
toc = false
+++

上个月，我为我的笔记本电脑 ThinkPad T480 加装了一块 1T 硬盘，升级了内存条到 64G 。
之后电脑也是正常运行的，但不确定从什么时候开始，系统出现蓝屏了。
最开始出现蓝屏，重启就好了，我不知道是什么原因，也没在意。
后来发现，每次只要电脑从深度睡眠状态启动恢复，系统就会出现蓝屏，但进入到系统后，运行时又是正常的。
屏幕上的终止代码有以下三种： `MEMORY_MANAGEMENT`, `IRQL_NOT_LESS_OR_EQUAL`, `PFN_LIST_CORRUPT` 。

{{< figure src="/image/other/debug-windows-bsod.jpg" title="debug windows bsod" caption="" >}}

<!--more-->

### 检测内存条故障太耗时，暂不考虑
我搜索这类终止代码是什么原因造成的。
可能是内存条故障，也可能是内存条不兼容。
要检测内存条故障，两个内存条 64G ，使用专业检测软件需要测试几个小时，我可不想这么麻烦，就没这么做。
我一开始猜测，最大的可能是内存条的原因，因为官方资料说明 T480 最大支持 32G 。
使用的是 DDR4 2400MHZ 规格的内存条，而我加装的内存条是 2666MHZ 频率的（没买到 2400MHZ），我一直怀疑它们是否兼容。
但是网络上看网友们加装内存条的情况， DDR4 2666MHZ 是兼容 DDR4 2400MHZ 的，也有网友将 ThinkPad T480 的内存条升级到了 64 G 。

如果不是内存故障，还有什么原因呢？

### 使用 Event Viewer 查看系统日志
根据过往 Debug 的经验，先查阅 system log 。 在 Windows 下直接用 `Event Viewer` 这个自带的软件就能查看系统日志。

```
Initialization failed because the driver device could not be created. Use the string
"000000000100320000000000D71000C013010000250200C000000000000000000000000000000000" to identify
the interface for which initialization failed. It represents the MAC address of the failed
interface or the Globally Unique Interface Identifier (GUID) if NetBT was unable to map from
GUID to MAC address. If neither the MAC address nor the GUID were available, the string
represents a cluster device name.
```

还有别的错误，只能看懂表面意思，可能是驱动出现了问题。

我先把 Win10 系统，还有设备驱动全部更新到了最新版，问题依旧。

那么，怎么检测驱动是否存在问题呢？

### Debug Drivers
我找到了这篇帖子 [Driver Verifier-- tracking down a mis-behaving driver. - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/all/driver-verifier-tracking-down-a-mis-behaving/f5cb4faf-556b-4b6d-95b3-c48669e4c983) ，根据帖子中提到的方法，打开 `verifier` 程序，重启。
如果系统出现蓝屏，会生成 `DMP` 日志文件，这样我们可以定位到是哪个驱动文件加载时出错了。
我的系统确实蓝屏了。

### 没有生成 DMP 文件？
之后问题又出现了，我的操作系统上居然没找到 DMP 文件。
然后在接下来的帖子 [BSOD 查找并修复它们 - Microsoft Community --- BSOD Finding and fixing them - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/all/bsod-finding-and-fixing-them/1939df35-283f-4830-a4dd-e95ee5d8669d) ，我看到了这段文字：

> Page file must be on the same drive as your operating system

晕，我才想起来我此前加装硬盘的时候，干了件事，把 Page file 关闭了。。。

好吧，重新启动 Page file ，否则无法生成 DMP 文件。


### 进入 Windows 安全模式，关闭 verifier
在 cmd 命令行中输入命令:

`verifier /reset`

### 定位出错的驱动程序
用 WinDbg 打开 dmp 文件，查看日志。
出错的驱动程序是 `xlwfp.sys` ，来自迅雷，卸了。

### 重复 verifier 检测
再次用 verifier 检测，重启后，系统不再出现蓝屏，应该是恢复正常了。

### 经验教训
**不要关闭 Page file 。**

之前我关闭是因为我的 C 盘空间不够用，128G 都快塞满了，加装内存后，我觉得我的内存完全够用，干脆就把 Page file 关了。

现在查资料发现， **Page File 不仅仅只是作为虚拟内存，一些程序和系统进程可能会依赖于 page file 来工作，关闭后可能会导致这些程序无法正常运行，甚至出现蓝屏。**

至于迅雷为什么要在驱动这个层级搞事情，我格局太小想不明白。 [与国产流氓软件的斗争 - 知乎](https://zhuanlan.zhihu.com/p/43433631)
