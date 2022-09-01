+++
title = "熟悉一套快捷键，提升文本编辑效率"
date = 2022-08-29T22:10:10+08:00
tags = ['VSCode']
categories = ['计算机']
draft = false
+++

今年由于工作需要，我将自己的常用操作系统从 Linux 换成了 Win10 。切换到 Win10 后，原本的 Emacs 配置无法正常工作了，我也懒的继续折腾配置，本来用 Emacs 也就是记笔记、写日记之类的文本编辑工作，写代码基本都是用 VSCode 。现在 VSCode 已经非常好用了，干脆把所有编辑文本的工作都交给 VSCode 吧。

<!--more-->

使用 Emacs 让我受益最大的，就是它的快捷键操作方式。比如 `Ctrl-a` 将光标移到行首， `Ctrl-e` 移到行尾等等，就不一一列举了。我也曾用过 Vim ，但是它的操作方式我怎么都不适应（用 Vimium 浏览网页还是挺舒服的），因为它编辑的时候要进入「Insert-mode」，然后还要解决切换输入法的问题，在中文输入的情况下无法进入「Insert-mode」。而使用 Emacs 大部分时候没有切换输入法的烦恼，它的快捷键都需要加上 `Ctrl` 或 `Alt` 前缀。

在 VSCode 上，安装这个扩展： [whitphx/vscode-emacs-mcx: Awesome Emacs Keymap - VSCode emacs keybinding with multi cursor support](https://github.com/whitphx/vscode-emacs-mcx) ，就能用上 Emacs 的按键操作方式了。

由于历史原因，部分 Emacs 快捷键与我们的日常使用习惯不一致，比如复制粘贴，大部分软件都是 `C-c`、 `C-v` ，而 Emacs 默认是 `M-w` 、 `C-y` 。对于这部分快捷键，我倾向于改为一致的操作，即都用 `C-c`、 `C-v` ，不要特殊化，省的弄混了。还有一些常用却不太好按、不太好记的快捷键，我都重新绑定了按键。

快捷键，应该既要好按，又要好记，这样才快捷。我整理了一下自己的常用快捷键，就当作是复习巩固吧。


