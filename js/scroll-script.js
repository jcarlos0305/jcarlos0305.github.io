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
            scrollTop: $("#about-section").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#link2").click(function () {
        $('html, body').animate({
            scrollTop: $("#education-section").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#link3").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills-section").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#link4").click(function () {
        $('html, body').animate({
            scrollTop: $(".contact__section").offset().top
        }, 1000);
    });
});