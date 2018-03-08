+++
title = "开源实践：写在 Jane 发布之后"
date = 2018-03-11T21:30:00+08:00
lastmod = 2018-03-11T21:38:41+08:00
tags = ["Jane", "Hugo", "开源", "练习"]
categories = ["杂文"]
draft = false
+++

本周我发布了一个 [Hugo](https://gohugo.io/) 主题 [Jane](https://github.com/xianmin/hugo-theme-jane) ，Jane 克隆自 [hugo-theme-even](https://github.com/olOwOlo/hugo-theme-even) ，大体功能基本继承自 Even 。起先，我只是使用 Hugo 来发布博文，并且选择使用 Even 作为我的博客主题。后来觉得 Even 这个主题的样式我个人不是很喜欢，就自己动手改了。改动的地方多了，外观上基本上已经不是原来的 Even 了，就想着也许自己可以基于它单独创建一个主题，顺便练练手，于是就有了 Jane 这个项目。当我在四天前向 Hugo 官方提交这个主题之后，意外地获得了官方的肯定以及推荐[^fn:1]。

<!--more-->

这是我第一次认真去做的开源项目。尽管说，5年多以前我就开始使用 git ，有了 github 账号，但从未提过一个 issue ，也未提交过一次 PR ，就像是一个在论坛长期潜水的人。英文写作能力不行、对迈开第一步有些许畏惧、没找到合适的切入点等等，这些都可以当作理由，而我跨出这一步，居然用了5年的时间。毫无疑问，这得感谢 Even 的作者，感谢开源世界。

在 Jane 被官方收录到主题仓库的第二天，就得到了几个 Star，并且收到了一位使用者的反馈[^fn:2]，对于我这个项目维护者而言，无疑是一种无形的鼓励。如前文所说，Jane 最初只是按我个人的需求进行的改造。所改的内容，主要是增强读者的阅读体验，然后在此基础上，增强其它的一些功能，比如说标签页中的标签云、分类页更好的展示、多国语言支持等。由于我个人水平有限，也非专业的网站设计人员，它依然有很多可以改进的地方。如果看到这篇文章的你正巧也是 Jane 的使用者，欢迎给我提出宝贵的建议，或者像我一样自己动手修改。

这次实践对于我个人是一个好的开始。我开始使用 gitflow 来规范开发流程，开始规范自己的 commit 内容，开始认真对待文档，开始认真做一个项目。磨了几年的刀，终于开始砍柴了。

[^fn:1]: [New Theme: Jane · Issue #340 · gohugoio/hugoThemes](https://github.com/gohugoio/hugoThemes/issues/340)
[^fn:2]: [Issue #1 · xianmin/hugo-theme-jane](https://github.com/xianmin/hugo-theme-jane/issues/1)
