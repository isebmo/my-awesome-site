var articleManager = (function () {
    var posts = localStorage.getItem('posts'),
        artHomeNb = $('#posts-list li').length;
    var loadedArticles = sessionStorage.getItem('loadedArticles');
    var lastArticleId = sessionStorage.getItem('lastArticleId');

    if (artHomeNb) {
        initLoadingArticles();
        scrollToArticle(lastArticleId);
    }

    function scrollToArticle(id) {
        var htmlId = '#' + id;
        if (lastArticleId && $(htmlId)) {
            console.log('scrollToArticle:' + htmlId);
            setTimeout(function () {
                window.location.href = htmlId;
            }, 1000);
            sessionStorage.removeItem('lastArticleId');
        }
    }

    function attachArticleClickHandler(li) {
        li.click(function () {
            var liIdClicked = $(this)[0].id;
            if (liIdClicked) {
                sessionStorage.setItem('lastArticleId', liIdClicked);
                alert(liIdClicked);
            }
        });
    }

    function initLoadingArticles() {
        $.getJSON('/all-posts.json', function (data) {
            localStorage.setItem('posts', JSON.stringify(data["posts"]));
            posts = localStorage.getItem('posts');

            if (loadedArticles) {
                loadArticle(artHomeNb - 1, loadedArticles - 1, JSON.parse(posts));
            }
        });
    }

    function showRandomArticle(e) {
        var posts = JSON.parse(localStorage.getItem('posts'));
        if (posts.length > 0) {
            var url = posts[Math.floor((Math.random() * posts.length) + 1)].url;
            window.location.href = url;
        }
    }

    function loadArticle(from, to, localPosts) {
        console.log('chargement' + from + ' to ' + to)
        for (var i = from; (i < to) && (i < localPosts.length); i++) {
            var post = localPosts[i];
            var postHtml = '<li id="' + i + '"><a href="' + post.url + '"><div class="posts-list-container"><img src="images/' + post.fimg + '"><div class="post-thumbnail-title"> <h3> <a href="' + post.url + '">' + post.title + '</a></h3><span class="post-meta">' + post.meta + '</span></div></div></a></li>';
            var html = $.parseHTML(postHtml);
            $("#posts-list").append(html);
            from += 1;
        }
        attachArticleClickHandler($('#posts-list li'));
        return from;
    }

    function loadMoreArticle() {
        localStorage.removeItem('posts');
        console.log(JSON.parse(posts));
        var localPosts = JSON.parse(posts);

        var loadedArticles = $('#posts-list li').length;

        if (artHomeNb < localPosts.length) {
            loadedArticles = loadArticle(loadedArticles, loadedArticles + artHomeNb, localPosts);
            sessionStorage.setItem('loadedArticles', loadedArticles);
        }
    }

    return {
        'showRandomArticle': showRandomArticle,
        'posts': posts,
        'loadMoreArticle': loadMoreArticle
    };
})();