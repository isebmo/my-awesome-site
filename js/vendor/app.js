// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('.post-content').readingTime();

$(".menu-link").click(function(){
    $("#menu").toggleClass("active");
    $(".container").toggleClass("active");
});

$(document).ready(function() {
    function extracted() {
        maxHeight = Math.max.apply(
            Math, boxes.map(function () {
                return $(this).height();
            }).get());
        boxes.height(maxHeight);
    }

    $(window).load(function() {
        boxes = $('.posts-list-img');
        if (boxes) {
            extracted();
        }
    });

    $(window).resize(function () {
        boxes = $('.posts-list-img');
        if (boxes) {
            boxes.height('auto');
            extracted();
        }
    });


    $( "#posts-list").find("li" ).on( "swipe", swipeHandler );

    function swipeHandler( event ){
        $( event.target ).addClass( "swipe" );
        console.log('swipe');
    }

});

var postURLs;
var showRandomArticle = function (e) {
    var baseurl = window.location.hostname === 'localhost' ? '' : '/my-awesome-site';
    $.getJSON(baseurl + '/all-posts.json', function(data) {
        postURLs = data["posts"];
        if (postURLs.length > 0) {
            var url = postURLs[Math.floor((Math.random() * postURLs.length) + 1)].url;
            window.location.href = url;
        }
    });
};