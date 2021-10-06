$(function () {
    $(".show-menu").click(function () {
        $(".header .menu-website").addClass("show");
    });
    $(".close-menu").click(function(){
        $(".header .menu-website").removeClass("show");
    })
});
