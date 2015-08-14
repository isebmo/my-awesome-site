$(function () {

    var postURLs,
        isFetchingPosts = false,
        shouldFetchPosts = true,
        postsToLoad = $("#posts-list").children().length,
        loadNewPostsThreshold = 3000;

    // If there's no spinner, it's not a page where posts should be fetched
    if ($(".infinite-spinner").length < 1)
        shouldFetchPosts = false;

    // Are we close to the end of the page? If we are, load more posts
    $(window).scroll(function (e) {
        if (!postURLs) {
            // Load the JSON file containing all URLs
            var baseurl = window.location.hostname === 'localhost' ? '' : '/my-awesome-site';
            $.getJSON(baseurl + '/all-posts.json', function(data) {
                postURLs = data["posts"];

                // If there aren't any more posts available to load than already visible, disable fetching
                if (postURLs.length <= postsToLoad)
                    disableFetching();
            });
        }

        if (!shouldFetchPosts || isFetchingPosts) return;

        var windowHeight = $(window).height(),
            windowScrollPosition = $(window).scrollTop(),
            bottomScrollPosition = windowHeight + windowScrollPosition,
            documentHeight = $(document).height();

        // If we've scrolled past the loadNewPostsThreshold, fetch posts
        if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
            fetchPosts();
        }
    });

    // Fetch a chunk of posts
    function fetchPosts() {
        // Exit if postURLs haven't been loaded
        if (!postURLs) return;

        isFetchingPosts = true;

        // Load as many posts as there were present on the page when it loaded
        // After successfully loading a post, load the next one
        var loadedPosts = 0,
            postCount = $("#posts-list").children().length,
            callback = function () {
                loadedPosts++;
                var postIndex = postCount + loadedPosts;

                if (postIndex > postURLs.length - 1) {
                    disableFetching();
                    return;
                }

                if (loadedPosts < postsToLoad) {
                    fetchPostWithIndex(postIndex, callback);
                } else {
                    isFetchingPosts = false;
                }
            };

        fetchPostWithIndex(postCount + loadedPosts, callback);
    }

    function fetchPostWithIndex(index, callback) {
        // var postURL = postURLs[index];
        var post = postURLs[index];
        var postHtml = '<li><a href="' + post.url + '"><div class="posts-list-container"><img src="images/' + post.fimg + '"><div class="post-thumbnail-title"> <h3> <a href="'+post.url+'">' + post.title + '</a></h3><span class="post-meta">' + post.meta + '</span></div></div></a></li>';
        $("#posts-list").append(postHtml);
        callback();
        /* $.get(postURL, function(data) {
         $(data).find(".post-content").appendTo(".post-list");
         callback();
         });*/
    }

    function disableFetching() {
        shouldFetchPosts = false;
        isFetchingPosts = false;
        $(".infinite-spinner").fadeOut();
    }

});
