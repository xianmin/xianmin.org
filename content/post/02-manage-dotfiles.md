---
title: "Linux 下，使用 Git 管理 dotfiles（配置文件）"
date: 2017-03-01T18:03:09+08:00
lastmod: 2017-03-01T18:03:09+08:00
draft: false
tags: ["linux", "git", "dotfile", "tool"]
categories: ["essay"]

# comment: false
# toc: false
# reward: false
mathjax: false
# author: ''
# contentCopyright: ''
---



作为一个计算机深度使用者，并且长期使用 Linux 作为主要操作系统，折腾各种功能强大的软件是常有的事儿。而这些软件有它们各自的配置文件，通常以 `.` 开头，管它们叫 `dotfiles` 。一旦 dotfiles 的数量增多，并且所在的位置不同，怎样合理有效的管理它们是一个问题。

<!--more-->



一个简单的方法是：将所有配置文件统一丢进一个文件夹，用 git 进行管理，用 `ln -s` 链接到原来的位置（比如家目录下）。

我在这里推荐一个命令行脚本——[dotsync](https://github.com/dotphiles/dotsync) ，它可以将上面的方法更加简化，并且在不同机器上进行同步。



# dotsync 的使用步骤

第一步，将 dotsync 克隆下来，在家目录下创建一个 `Dotfiles` 文件夹（名称任意），把 dotsync 中的配置模板 `dotsyncrc` 文件复制进去。

第二步，把所有需要管理的 dotfiles 复制到 `Dotfiles/` 目录中（例如 .vimrc, .zshrc 等等）。

第三步，修改 `dotsyncrc` 这个配置文件。如下：

```bash
# Location of your dotfiles in $HOME
DOTFILES=Dotfiles
    
# 添加你需要链接的文件
[files]
dotsyncrc                       # 相当于 ln -s dotsyncrc ~/.dotsyncrc
emacs/xm-spacemacs:.emacs.d     # 相当于 ln -s emacs/xm-spacemacs ~/.emacs.d
emacs/spacemacs                 # 相当于 ln -s emacs/spacemacs ~/.spacemacs
# ... 等等
[endfiles]
    
[hosts]
xm-pc git=ANY                   # 计算机名称
[endhosts]
```


第四步，运行 dotsync 命令。

```bash
# 假设你把 dotsync 克隆到了家目录下

~/dotsync/bin/dotsync           # 运行，会提示你选择参数
~/dotsync/bin/dotsync -l        # 查看将要链接的文件列表
~/dotsync/bin/dotsync -f ~/Dotfiles/dotsyncrc -L # -f 指定配置文件，-L 生成软链接
```

这个时候，你在 `dotsyncrc` 中指定的文件，都在指定位置创建了软链接。如果文件已经存在，它们都将备份到 `~/.backup/` 目录。当你编辑软链接文件的时候，实际上编辑的是 Dotfiles 目录中的源文件。

第五步，可以使用 git 管理备份 Dotfiles 文件夹了。


# 将 dotsync 添加到 Shell 的 PATH 路径

一个问题：怎样在命令行中直接使用 dotsync？

我在 `Dotfiles/` 目录下创建了一个 `bin/` 目录，专门用来存放一些用户自己编写的脚本。然后把这个 bin 目录添加到 shell 的 PATH 路径，即在 .zshrc 文件中添加一行：

```bash
export PATH="$HOME/Dotfiles/bin:$PATH"
```

然后，

```bash
source ~/.zshrc                 # 重载 zshrc 文件
$PATH                           # 查看 PATH
```

这样，我们就可以直接在命令行中直接使用 dotsync 这个命令了。



# 参考链接

-   [dotphiles/dotphiles: A community driven framework of dotfiles.](https://github.com/dotphiles/dotphiles)
-   [Dotfiles 备份与同步配置文件](http://notes.11ten.net/use-dotfiles.html)
-   [懒程序员和他的 dotfiles - CoderZh Blog](http://blog.coderzh.com/2016/03/19/dotfiles/)
-   [jcouyang/dotfiles: Jichao Ouyang's awesome dotfiles](https://github.com/jcouyang/dotfiles)
-   [GitHub does dotfiles - dotfiles.github.io](https://dotfiles.github.io/)
