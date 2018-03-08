+++
title = "笔记：有关开源项目"
date = 2018-03-27T15:47:00+08:00
lastmod = 2018-03-27T15:49:50+08:00
tags = ["开源", "笔记"]
categories = ["计算机"]
draft = false
+++

以下内容是关于怎样参与到开源项目中的一些笔记，基本上摘自网络。


## 参考链接 {#参考链接}

-   [开源之美：开源软件开发流程 - Phodal | Phodal - A Growth Engineer](https://www.phodal.com/blog/how-to-build-a-opensource-project/)
-   [零起点的开源社区贡献指南 - 掘金](https://juejin.im/post/59f98a196fb9a045132a03ed)
-   [Commit message 和 Change log 编写指南 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
-   [git-flow 的工作流程](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)

<!--more-->


## 加入开源项目可以做的事儿 {#加入开源项目可以做的事儿}

-   入门：翻译文档、报告 BUG
-   提 Issue
    -   报告 Bug 与提问
    -   提出并讨论新特性
    -   设定 Todo 目标
-   提 Pull Request
    -   修复 bug
    -   实现新特性
    -   优化性能
    -   例行更新（如文档、依赖版本等）


## 常用英文表达方式 {#常用英文表达方式}

**吐槽代码：**

-   表达 API 笨重不好用，可以说 `heavy to work with`
-   表达模块结构不好，可以说 `not intuitive`
-   表达处理方式太粗暴，可以说 `overkill`
-   表达逻辑可能有漏洞，可以说 `leaky`
-   表达要引入的东西太多，可以说 `aggressive`

**表达观点：**

-   `I think` 有点儿武断
-   可以用 `In my (humble) opinion`
-   补充一个 `Not sure, maybe missing something`
-   用 `To my knowledge` 或者 `For me`


## commit 格式规范 {#commit-格式规范}

```nil
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

**第一部分为 HEADER ：**

-   `<type>` 说明 commit 的类别：
    -   feat：新功能（feature）
    -   fix：修补bug
    -   docs：文档（documentation）
    -   style： 格式（不影响代码运行的变动）
    -   refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    -   test：增加测试
    -   chore：构建过程或辅助工具的变动
-   `<scope>` 说明 commit 影响的范围
-   `<subject>` 是 commit 目的的简短描述，可加入 Issue 的编号如 `#11`

**第二部分为 Body ：**
Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。

**最后部分为 Footer：**

1.  不兼容变动。以 `BREAKING CHANGE` 开头，后面是对变动的描述、以及变动理由和迁移方法。
2.  关闭 Issue。如， `Closes #123, #245, #992` ，一次性关闭多个 issue。

**特殊情况 Revert ：**

如果当前 commit 用于撤销以前的 commit，则必须以 `revert:` 开头，后面跟着被撤销 Commit 的 Header。


## 生成 CHANGE LOG {#生成-change-log}

[conventional-changelog/conventional-changelog: Generate a changelog from git metadata.](https://github.com/conventional-changelog/conventional-changelog)

按照规范编写 commit 最大的好处就是自动化生成 Change Log 。


## git-flow 工作流程 {#git-flow-工作流程}

[petervanderdoes/gitflow-avh: AVH Edition of the git extensions to provide high-level repository operations for Vincent Driessen's branching model](https://github.com/petervanderdoes/gitflow-avh)
