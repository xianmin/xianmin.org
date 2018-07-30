+++
title = "更好的基于 github issues 的评论系统——utterances"
date = 2018-07-10T14:34:00+08:00
lastmod = 2018-07-13T13:32:49+08:00
tags = ["github", "tip", "blog", "Hugo"]
categories = ["计算机"]
draft = false
+++

## 背景介绍 {#背景介绍}

基于 **github issues** 的评论系统，比较流行的有 [gitment](https://github.com/imsun/gitment) 和 [gitalk](https://github.com/gitalk/gitalk) 。这两个项目我很早就注意到了，它们明显的缺陷是，当用户如果尝试登录评论，所要求的权限是很多的，因此我也一直有所顾忌，不愿授权。不授权就无法评论了吗？还真不是。我在网上搜到了这篇文章——[Gitment 的安全性争议 | 狼煞博客](https://blog.wolfogre.com/posts/security-problem-of-gitment/)，文中提到：

> 无论是在本博客还是在别的网站，如果评论系统用的是 Gitment，只要你不是百分百信任网站所有者，就尽量不要登录再留言。

这个建议很好理解，稍微有点网络安全知识的人，通常都不会轻易把自己账户的各种操作权限交给一个素不相识的人。不过，此文作者还给出了一个“不登录直接留言”的操作方法，就是直接打开 issues 页面来评论。我这么讲，对于没用过基于 **github issues** 评论系统的读者而言，估计是一头雾水，这个按上面文章的方法操作一次，你就知道是怎么一回事儿了。


## 为什么使用 utterances ？ {#为什么使用-utterances}

以上简单讲了一下背景，下面介绍本篇文章的主角——[utterances](https://github.com/utterance/utterances)。

它和 `gitment` 、 `gitalk` 有什么区别呢？

最大的区别就是 `utterances` 所需要的权限要少得多，仅限于读写特定仓库的 issues 和 comments 。至于原理，我也没有深究，有兴趣的读者可以看一看项目作者写的说明：[utterances 1.0 by jdanyow · Pull Request #25](https://github.com/utterance/utterances/pull/25) 。并且，仅需要给 `utterances` 授权一次，其他凡是使用 `utterances` 的站点都不必再 **额外授权** ，直接就可以评论。

第二个区别，部署更简单。按照文档的步骤：

1.  新建一个用于存放评论的仓库；
2.  给这个仓库部署 `utterances` 应用；
3.  将一段 **script** 代码放入你的博客。这样就可以了。

第三个区别， `utterances` 有一个“机器人”可以自动初始化博文的 issues 评论。而 `gitment` 需要使用脚本，或者需要手动点击初始化按钮。（这个问题我是通过他人的文章了解到的，自己并没有测试考证。）

综上， `utterances` 是一个相对而言 **更便捷** 的基于 **github issues** 的评论系统。

想试用的朋友不妨在底部评论一下吧！ :-)

另外，我已将 `utterances` 并入到博客主题 [hugo-theme-jane](https://github.com/xianmin/hugo-theme-jane) 中了。
