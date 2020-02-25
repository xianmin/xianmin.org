+++
title = "Linux 下，用命令行给 PDF 添加书签"
date = 2020-02-25T16:06:00+08:00
lastmod = 2020-02-25T16:11:24+08:00
tags = ["Linux", "PDF", "工具", "命令行"]
categories = ["计算机"]
draft = false
+++

最近下载了一个 300 多页 PDF 文件，居然没有书签，查阅太不方便了。如果用 PDF 软件一个一个添加，效率就太低了。上网找了用命令行工具来添加书签的办法，步骤如下：

<!--more-->

一、安装 pdftk ：

```bash
apt install pdftk
```

二、导出 PDF 文件数据：

```bash
pdftk my.pdf dump_data output data.txt
```

三、编辑数据文件 `data.txt` ，与书签有关的内容为：

```text
BookmarkBegin
BookmarkTitle: -- Your Title 1 --
BookmarkLevel: 1 #一级目录
BookmarkPageNumber: 10 #页码
BookmarkBegin
BookmarkTitle: -- Your Title 2 --
BookmarkLevel: 2 #二级目录
BookmarkPageNumber: 20
BookmarkBegin
BookmarkTitle: -- Your Title 3 --
BookmarkLevel: 1
BookmarkPageNumber: 30
...
...
and so on...
```

这个步骤比较关键。如果能够复制一份固定格式的目录内容，那么就很好处理了。

四、将编辑好的数据文件导入并输出：

```bash
pdftk my.pdf update_info data.txt output bookmarked.pdf
```

参考：[Create bookmarks into a PDF file via command line - Stack Overflow](https://stackoverflow.com/questions/30304718/create-bookmarks-into-a-pdf-file-via-command-line)


## 补充 {#补充}

以上记录完成之后，发现一个用 python 的处理办法：
[py-project/AddPDFBookmarks at master · dnxbjyj/py-project](https://github.com/dnxbjyj/py-project/tree/master/AddPDFBookmarks)

下次可以考虑用 python 试一试。对于文件的批量处理，以及字符的操作，用 python 会更高效一些。
