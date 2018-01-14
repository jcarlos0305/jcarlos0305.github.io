$(document).ready(function () {
    $(".navbar-li__links").click(function () {
        $('html, body').animate({
            scrollTop: $(".section2__div").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $(".navbar__brand").click(function () {
        $('html, body').animate({
            scrollTop: $(".section1__img").offset().top
        }, 1000);
    });
});