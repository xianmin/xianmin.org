+++
title = "糟糕的项目管理新手"
date = 2018-04-03T15:40:00+08:00
lastmod = 2018-04-03T15:42:17+08:00
tags = ["git"]
categories = ["随笔"]
draft = false
+++

最近， `hugo-theme-jane` 收到了几位朋友的 PR ，我作为这个项目的管理者，在处理 PR 上遇到了问题：有个别 PR 比较简单，我就直接在 github 后台操作合并，然后 `git pull` 到本地。我想的是本地 master 直接从远程仓库抓取到最新版，但奇怪的是居然有一个合并请求，并且多了一个合并的 commit 。

<!--more-->

如图：

{{<figure src="/image/other/bad-project-manager-00.png">}}

{{<figure src="/image/other/bad-project-manager-01.png">}}

本地的 master 和远程的 master 不一样了，当时也不知道为什么会这样，我只是想把两个仓库进行同步啊。算了，先更新再说吧，于是就把（没搞清楚为什么）多了一次合并 commit 的本地 master 提交到了 origin/master 。尽管说最终的代码没什么问题，但这个 commit 历史总觉得有些别扭，完全不是自己预想的那样。

直到看到了这篇文章： [git: fetch and merge, don’t pull | Mark's Blog](https://longair.net/blog/2009/04/16/git-fetch-and-merge/) 。我才意识到自己犯的错误在哪里……我对 git 的分支、以及合并的概念只是理解了一些皮毛，要好好补课了。
