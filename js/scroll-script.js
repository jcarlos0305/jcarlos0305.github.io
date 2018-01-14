$(document).ready(function () {
    $(".navbar__brand").click(function () {
        $('html, body').animate({
            scrollTop: $(".section1__img").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#link1").click(function () {
        $('html, body').animate({
            scrollTop: $(".section2__img").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#link2").click(function () {
        $('html, body').animate({
            scrollTop: $(".section3__img").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#link3").click(function () {
        $('html, body').animate({
            scrollTop: $(".section4__img").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#link4").click(function () {
        $('html, body').animate({
            scrollTop: $(".section5__img").offset().top
        }, 1000);
    });
});