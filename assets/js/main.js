$(function () {
    $(".show-menu").click(function () {
        $(".header .menu-website").addClass("show");
    });
    $(".close-menu").click(function(){
        $(".header .menu-website").removeClass("show");
    })
});

// Trigger The Slider
$('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
