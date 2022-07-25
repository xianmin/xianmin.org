+++
title = "小技巧 debug 网页 css overflow ，避免出现底部滚动条"
date = 2022-07-25
tags = ['debug', 'css']
categories = ['计算机']
draft = false
+++

一般而言，绝大多数网页都是纵向滚动的，很少有横向滚动的网页。如果一个正常纵向滚动的网页，在浏览器的底部出现了滚动条，是因为这个网页的宽度超出了屏幕宽度。这种情况很多时候并非网站设计者的初衷，而是由于写错了 css 样式。

[趣味数学题 - 橘子数学社区 - 趣题挑战](https://qa.mathcrowd.cn/challenges) 原本有这个问题，之后被我解决了。一开始的解决方法比较笨，就是用 Chrome 的开发者工具，一个一个检查元素，看看是哪个元素溢出了。

<!--more-->

最近我偶然发现了两个网站有类似的溢出问题：

- 比如有名的知乎： [数学趣题专栏 - 知乎](https://www.zhihu.com/column/mathcrowd)
- [Raise and spend money with full transparency. - Open Collective](https://opencollective.com/)

{{< figure src="/image/other/zhihu-overflow.png" title="知乎专栏网页溢出" caption="" >}}

这就引起了我的好奇，有没有更便捷的技巧 debug 网页的横向溢出呢？答案是有的。使用开发者工具，给网站添加以下样式：

```css
* {
  outline: 1px solid red;
}
```

**这不会影响网页原本的布局，同时还会给所有元素加上边框，这样我们就很容易发现是哪个地方有溢出了。利用这个小技巧，我们也可以更直观的观察一个网站的布局是怎样的。**


## 使用 bookmarklet
我将这一小段 css 代码改成了 bookmarklet ：{{< rawhtml >}}<a href="javascript:(function()%7Bjavascript%3A(function()%7Bvar%20css%3D'*%20%7Boutline%3A%201px%20solid%20red%3B%7D'%3Bvar%20heads%3Ddocument.getElementsByTagName('head')%3Bif(heads.length%3E0)%7Bvar%20node%3Ddocument.createElement('style')%3Bnode.type%3D'text%2Fcss'%3Bnode.appendChild(document.createTextNode(css))%3Bheads%5B0%5D.appendChild(node)%3B%7D%7D)()%3B%7D)()%3B">显示元素边框</a> 。{{< /rawhtml >}}

这样只要点击书签就能直接生效了。

## 常见的会造成 x-overflow 的原因：

1. 使用了 `width: 100vw;` ;
2. grid 或 flex 使用了间隙或边框；
3. 多余的 margin ；
4. 图片宽度超出父容器的宽度；

## 参考链接
- [How to prevent overflow scrolling in CSS - LogRocket Blog](https://blog.logrocket.com/how-to-prevent-overflow-scrolling-css/)
