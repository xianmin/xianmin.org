+++
title = "Windows 下，交换 Ctrl 键和 CapsLock 键"
date = 2022-05-29
tags = ["windows", "快捷键"]
categories = ["计算机"]
draft = false
+++

好久没更新博客了，水一篇，找点状态。

`Ctrl` 键作为大部分软件的常用快捷按键，它在键盘上的位置是非常不合理的。而 `CapsLock` 这个大写锁定键，不经常使用，却在键盘上占据了一个极佳的位置。在过去几年使用计算机的过程中，把 `Ctrl` 和 `CapsLock` 这两个按键的位置交换，极大的提升了我使用快捷键的舒适度和效率。

<!--more-->

以下为使用 PowerShell 命令（需要以管理员身份运行）来交换这两个键的方式：

```
$hexified = "00,00,00,00,00,00,00,00,03,00,00,00,1d,00,3a,00,3a,00,1d,00,00,00,00,00".Split(',') | % { "0x$_"};

$kbLayout = 'HKLM:\System\CurrentControlSet\Control\Keyboard Layout';

New-ItemProperty -Path $kbLayout -Name "Scancode Map" -PropertyType Binary -Value ([byte[]]$hexified);
```

## 参考链接
- [Remap Caps Lock to Control on Windows 10](https://gist.github.com/joshschmelzle/5e88dabc71014d7427ff01bca3fed33d) - 这个链接提供的信息是把 CapsLock 映射为 Ctrl ，而非交换。
- [windows下交换ctrl和capslock - 简书](https://www.jianshu.com/p/d14dd07c025c) - 这个链接是手动修改注册表，不太方便。
