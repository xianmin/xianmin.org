+++
title = "为 hugo 站点插入豆瓣条目的 shortcode"
date = 2018-05-25T15:20:00+08:00
lastmod = 2018-07-20T17:27:54+08:00
tags = ["hugo", "豆瓣"]
categories = ["计算机"]
draft = false
+++

**最终效果：**
{{< douban 9787532132263 >}}

{{< douban 1307690 >}}

代码来源： [Bitcron 文章内插入豆瓣条目 - 林小沐](https://immmmm.com/bitcron-show-douban-item)
<!--more-->


## 添加 douban shortcode {#添加-douban-shortcode}

创建文件 `/layouts/shortcodes/douban.html` ，代码如下：

```html
<div class="douban_show">
  <div id="db{{ .Get 0 }}" date-dbid="{{ .Get 0 }}" class="douban_item post-preview"></div>
</div>
```


## 添加 js {#添加-js}

```js
$(document).ready(function () {
    $('.douban_item').each(function () {
        var id = $(this).attr('date-dbid').toString();
        if (id.length < 9) {
            var url = "https://api.douban.com/v2/movie/subject/" + id + "?apikey=0dad551ec0f84ed02907ff5c42e8ec70";
            $.ajax({
                url: url,
                type: 'GET',
                dataType: "jsonp",
                success: function (data) {
                    var db_casts = "",
                        db_genres = "";
                    for (var i in data.casts) {
                        db_casts += data.casts[i].name + " ";
                    }
                    for (var i in data.genres) {
                        db_genres += data.genres[i] + " ";
                    }
                    var db_star = Math.ceil(data.rating.average)
                    $('#db' + id).html(
                        "<div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' href='" +
                        data.alt + "'>《" + data.title + "》</a></h4><div class='rating'><div class='rating-star allstar" +
                        db_star + "'></div><div class='rating-average'>" + data.rating.average +
                        "</div></div><time class='post-preview--date'>导演：" + data.directors[0].name + " / 主演：" +
                        db_casts + " / 类型：" + db_genres + " / " + data.year +
                        "</time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" +
                        data.summary +
                        "</section></div></div><div class='post-preview--image' style='background-image:url(" + data.images
                        .large + ");'></div>");
                }
            });
        } else if (id.length > 9) {
            var url = "https://api.douban.com/v2/book/isbn/" + id +
                "?fields=alt,title,subtitle,rating,author,publisher,pubdate,summary,images&apikey=0dad551ec0f84ed02907ff5c42e8ec70";
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'JSONP',
                success: function (data) {
                    var db_star = Math.ceil(data.rating.average)
                    $('#db' + id).html(
                        "<div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' href='" +
                        data.alt + "'>《" + data.title + "》" + data.subtitle +
                        "</a></h4><div class='rating'><div class='rating-star allstar" + db_star +
                        "'></div><div class='rating-average'>" + data.rating.average +
                        "</div></div><time class='post-preview--date'>" + data.author[0] + " / " + data.publisher +
                        " / " + data.pubdate +
                        "</time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" +
                        data.summary +
                        "</section></div></div><div class='post-preview--image' style='background-image:url(" + data.images
                        .large + ");'></div>");
                }
            });
        } else {
            console.log("出错" + id)
        }
    });
});
```


## 添加 css {#添加-css}

```css
/* douban item post-preview --------*/

.post-preview {
  max-width: 780px;
  margin: 1em auto;
  position: relative;
  display: flex;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .25), 0 0 1px rgba(0, 0, 0, .25);
}

.post-preview--meta {
  width: 75%;
  padding: 25px;
}

.post-preview--middle {
  line-height: 28px;
}

.post-preview--title {
  font-size: 18px;
  margin: 0;
}

.post-preview--title a {
  text-decoration: none;
}

.post-preview--date {
  font-size: 14px;
  color: #999;
}

.post-preview--excerpt {
  font-size: 14px;
  line-height: 1.825;
}

.post-preview--excerpt p {
  margin-bottom: 0;
}

.post-preview--image {
  width: 25%;
  float: right;
  background-size: cover;
  background-position: center center;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

@media (max-width:550px) {
  .post-preview {
    width: 95%;
  }
  .post-preview--image {
    width: 40%;
  }
  .post-preview--meta {
    width: 60%;
  }
  .post-preview--excerpt {
    display: none;
  }
}

.rating {
  display: block;
  line-height: 15px;
}

.rating-star {
  display: inline-block;
  width: 75px;
  height: 15px;
  background-repeat: no-repeat;
  background-image: url(/image/douban_star.png);
  overflow: hidden;
}

.allstar10 {
  background-position: 0px 0px;
}

.allstar9 {
  background-position: 0px -15px;
}

.allstar8 {
  background-position: 0px -30px;
}

.allstar7 {
  background-position: 0px -45px;
}

.allstar6 {
  background-position: 0px -60px;
}

.allstar5 {
  background-position: 0px -75px;
}

.allstar4 {
  background-position: 0px -90px;
}

.allstar3 {
  background-position: 0px -105px;
}

.allstar2 {
  background-position: 0px -120px;
}

.allstar1 {
  background-position: 0px -135px;
}

.allstar0 {
  background-position: 0px -150px;
}

.rating-average {
  color: #777;
  display: inline-block;
  font-size: 13px;
  margin-left: 10px;
}
```

**注意：**  豆瓣评分五角星图片需要另外载入。

保存图片为 `/static/image/douban_star.png`

{{< figure src="/image/douban_star.png" >}}


## 使用方法 {#使用方法}

```code
{{</* douban id */>}}
```

-   电影条目如 <https://movie.douban.com/subject/26862829/> 取后面 26862829 为 id。
-   图书条目，取它的 ISBN 为 id。


## 补充说明 {#补充说明}

关于添加 js, css 代码，一般 hugo 主题都有 `customJS` 或 `customCSS` 选项（比如我的主题），我们可以添加到其中。

我不确定有几个人需要这个 `douban shortcode` ，因此，暂时没有整合到 `hugo-theme-jane` 中，如果有人需要，欢迎在此文章下留言。

最后，感谢原创作者林小沐！
