$(function () {

    //loading
    setTimeout(function(){
        $('.loading').fadeOut();
    }, 5000)

    // Fixed Header
    $(window).scroll(function(){
        if($(this).scrollTop() > 30 ) {
            $('.header').addClass('fixed-header')
        }else {
            $('.header').removeClass('fixed-header')
        }

    //هذه خاصة بالسركول توب
        if($(this).scrollTop() > 250 ) {
            $('.btn-to-top').fadeIn()
        }else {
            $('.btn-to-top').fadeOut()
        }
    });

    $('.btn-to-top').click(function(){
        $("html,body").animate({
            scrollTop: 0
        },1500)
    })

    $(".show-menu").click(function () {
        $(".header .menu-website").addClass("show");
    });
    $(".close-menu").click(function(){
        $(".header .menu-website").removeClass("show");
    })


// Trigger The Slider
$('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
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
});

// Trigger The Slider What Client Say
$('.testimonial .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
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

});