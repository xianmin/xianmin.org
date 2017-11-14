+++
title = "JavaScript —— this 绑定"
date = 2017-11-14T14:39:00+08:00
lastmod = 2017-11-14T15:06:14+08:00
tags = ["JavaScript"]
categories = ["tech"]
draft = false
+++

Google 搜索出来的两个不错的链接：

-   [JavaScript 之 this 详解 | 晚晴幽草轩](https://jeffjade.com/2015/08/03/2015-08-03-javascript-this/)
-   [JS 中 this 关键字详解 - JSer - SegmentFault](https://segmentfault.com/a/1190000003046071)

我是先阅读的 [You-Dont-Know-JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) 。再回过头看上面的那两篇文章，我觉得他们讲解的太复杂了，而 《You-Dont-Know-JS》 就归纳的非常好。

<!--more-->

以下是总结笔记：

JS 中的 `this` 总是指向一个对象 (Object)，这个对象是基于函数运行时 **动态绑定** 的。要判断 `this` 的绑定对象，首先找到这个函数的直接调用位置，然后应用下面四条规则来判断：

1.  （new 绑定）由 `new` 调用？绑定到新创建的对象。
2.  （强制绑定）由 `call` 或者 `apply` （或者 `bind` ）调用？绑定到指定的对象。
3.  （隐式绑定）由上下文对象调用？绑定到那个上下文对象。
4.  （默认绑定）在严格模式下绑定到 `undefined` ，否则绑定到全局对象。

例外，ES6 中的箭头函数会继承外层函数调用的 `this` 绑定。（和 ES6 之前代码中的 `self = this` 机制一样）


## 默认绑定 {#默认绑定}

```javascript
function foo() {
  console.log( this.a );
}

var a = 2;

foo(); // 输出 2
// 绑定到全局对象 a， 如果是严格模式，绑定到 undefined
```


## 隐式绑定 {#隐式绑定}

```javascript
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); // 输出 2
// 由对象 obj 调用，绑定到 obj
```


## 注意：隐式绑定的丢失问题 {#注意-隐式绑定的丢失问题}

```js
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; // 注意这个引用！

var a = "oops, global"; // 全局对象 a

bar(); // 输出： "oops, global" 绑定丢失！

setTimeout( obj.foo, 100 ); // 输出： "oops, global" 绑定丢失！
```


## 强制绑定： apply, call, bind {#强制绑定-apply-call-bind}

```js
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2
};

var bar = function() {
  foo.call( obj ); // 将 foo 的 this 强制绑定到对象 obj
};

bar(); // 输出：2
setTimeout( bar, 100 ); // 输出： 2

// 强制绑定的对象无法被覆盖
bar.call( window ); // 2
```


## new 绑定 {#new-绑定}

```js
function foo(a) {
  this.a = a;
}

var bar = new foo( 2 ); // 使用 new 绑定到对象 bar
console.log( bar.a ); // 输出 2
```
