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
