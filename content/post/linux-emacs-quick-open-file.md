+++
title = "linux 的文件管理器、命令行下，用 emacs 快速打开文件的方法"
date = 2018-05-22T21:28:00+08:00
lastmod = 2018-07-20T17:28:31+08:00
tags = ["emacs", "linux", "tip"]
categories = ["计算机"]
draft = false
+++

首先要确认 emacs 已经启动，并且开启了 server&nbsp;[^fn:1] 。如果使用 spacemacs ，server 默认是开启的。这样就可以使用 `emacsclient` 命令快速打开文件了。

<!--more-->


## 命令行下使用 emacsclient {#命令行下使用-emacsclient}

直接添加一条 alias ：

```bash
alias ec="emacsclient -nq"
```

参数 `nq` 的含义是：

```code
-n, --no-wait		Don't wait for the server to return
-q, --quiet		Don't display messages on success
```

以后在命令行中用 emacs 打开文件，只需要敲击 `ec 文件名` 即可。


## 在文件管理器下，右键菜单打开文件 {#在文件管理器下-右键菜单打开文件}

我的方法是：

在 `~/.local/share/applications/` 目录下，添加一个 `emacs.desktop` 文件。编辑这个 `desktop` 文件：

```code
[Desktop Entry]
Version=1.0
Name=Edit with Emacs
GenericName=Text Editor
MimeType=text/english;text/plain;text/x-makefile;text/x-c++hdr;text/x-c++src;text/x-chdr;text/x-csrc;text/x-java;text/x-moc;text/x-pascal;text/x-tcl;text/x-tex;application/x-shellscript;text/x-c;text/x-c++;
Exec=/usr/bin/emacsclient -nq %F
Icon=emacs25
Type=Application
Terminal=false
Categories=Utility;Development;TextEditor;
Keywords=Text;Editor;
```

这样我们就添加了一个名为 `Edit with Emacs` 的程序，同时在文件管理器中，就可以用这个程序打开文件了。并且可以为特定的后缀，比如 `.org` 文件，设置 **默认打开程序** 为 `Edit with Emacs` 。

{{< figure src="/image/other/gif/linux-emacsclient-quick-open-file.gif" >}}

[^fn:1]: [Emacs Server - GNU Emacs Manual](https://www.gnu.org/software/emacs/manual/html_node/emacs/Emacs-Server.html)
