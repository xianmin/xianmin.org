+++
title = "浅谈「用 git submodule 还是 git subtree」？"
date = 2018-04-16T23:14:00+08:00
lastmod = 2018-04-16T23:18:23+08:00
tags = ["git"]
categories = ["计算机"]
draft = false
+++

因为有用 `git` 管理 **子项目** 的需要，我在网上找到了 `submodule` 和 `subtree` 这两种方法。奇怪的是，有好几篇文章提到用 `subtree` 替代 `submodule` 。

比如这两篇：

-   [用 Git Subtree 在多个 Git 项目间双向同步子项目，附简明使用手册 - Delai - 有赞技术团队](https://tech.youzan.com/git-subtree/)
-   [Git subtree: the alternative to Git submodule](https://www.atlassian.com/blog/git/alternatives-to-git-submodule-git-subtree)

这两个链接分别都出现在 Google 搜索中文和搜索英文时的首页上。因此，我最开始使用的是 subtree，以为 subtree 就是目前的主流方案，并且是 submodule 的替代方案。直到前些日子我改用了 submodule 才发现，submodule 才是真正我想用的。

<!--more-->

这两者都可以解决类似的管理子项目的问题，但两者的管理方式有比较大的区别，并且两者都各自有各自的优缺点。比如说，这篇文章 [Git submodule的坑 | 唐巧的博客](https://blog.devtang.com/2013/05/08/git-submodule-issues/) 谈到了 submodule 遇到的坑，而这篇文章 [git submoudle vs git subtree | EFE Tech](http://efe.baidu.com/blog/git-submodule-vs-git-subtree/) 则谈到了使用 subtree 的过程中遇到的坑。因此个人觉得很难讲谁替代谁、谁比谁更好。

有人对 submodule 和 subtree 的区别做的一个总结还是挺形象的： **submodule is link; subtree is copy** 。

当然了，由于我个人的经验有限，我说的也许都是错的，但是别人说的也不一定都是对的啊。工具嘛，适合自己，又能方便的解决问题，就可以了。
