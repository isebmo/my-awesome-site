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

});

