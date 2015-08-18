var articleManager = (function () {
    var baseurl = window.location.hostname === 'localhost' ? '' : '/my-awesome-site';
    var posts = localStorage.getItem('posts');

    if (!posts) {
        $.getJSON(baseurl + '/all-posts.json', function (data) {
            localStorage.setItem('posts', JSON.stringify(data["posts"]));
        });
    }

    var showRandomArticle = function (e) {
        var posts = JSON.parse(localStorage.getItem('posts'));
        if (posts.length > 0) {
            var url = posts[Math.floor((Math.random() * posts.length) + 1)].url;
            window.location.href = url;
        }
    };

    return {
        'showRandomArticle': showRandomArticle,
        'posts': posts
    };
})();