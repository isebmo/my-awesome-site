// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('.content-post').readingTime();

$(".menu-link").click(function(){
    $("#menu").toggleClass("active");
    $(".container").toggleClass("active");
});