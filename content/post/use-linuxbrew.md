+++
title = "Linux 下，使用 Linuxbrew 安装更多的软件"
date = 2019-02-27T08:00:00+08:00
lastmod = 2019-02-27T08:05:54+08:00
tags = ["Linux", "linuxbrew", "工具"]
categories = ["计算机"]
draft = false
+++

[Homebrew](https://brew.sh/) 是 MacOS 下的一个包管理工具，可以用它安装各种软件，相当于 Linux 下的 `apt-get` ，大部分使用 Mac 的开发者对它应该很熟悉了。 [Linuxbrew](http://linuxbrew.sh) 是 Linux 下的 Homebrew ，使用它，就可以用 `brew install` 安装更多的软件。

也许有人要问，各个 Linux 发行版都已经 **自带了「包管理工具」** ，为什么还要多此一举，用 Linuxbrew 呢？

<!--more-->


## 为什么用 Linuxbrew ？ {#为什么用-linuxbrew}

1.  将软件安装在用户目录下，无需使用 sudo 。
2.  获取更多软件资源，安装最新版本的软件。
3.  保持 linux 系统环境的整洁。

**我举一个我最近使用的一个例子：**

我要安装 [Yarn](https://yarnpkg.com/zh-Hans/) ，系统仓库的版本太低，如果 [按照官网的步骤安装](https://yarnpkg.com/zh-Hans/docs/install#debian-stable) ，则太过繁琐。而使用了 Linuxbrew ，只需要一条命令 `brew install yarn` ，就安装好了。

**看一下我安装的其他工具：**

```nil
% brew list
bzip2  fd  fzf	hub  icu4c  ncurses  node  patchelf  pcre2  ripgrep  yarn  zlib
```


## Linuxbrew 的安装 {#linuxbrew-的安装}

参见 [Linuxbrew官网](http://linuxbrew.sh/) 或 [Github 项目地址](https://github.com/Linuxbrew/brew) ：

1、 执行命令：

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
```

2、 添加 PATH 路径（比如我的，添加到 `.zprofile` 文件）：

```bash
export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"
export MANPATH="/home/linuxbrew/.linuxbrew/share/man:$MANPATH"
export INFOPATH="/home/linuxbrew/.linuxbrew/share/info:$INFOPATH"
```


## 最新更新！ {#最新更新}

**Linuxbrew has been merged into Homebrew!**

有关最新的更新请查看 [Github 项目地址](https://github.com/Linuxbrew/brew) 。
