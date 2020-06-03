$('header ul li').on('click', function () {
    var index = $(this).index();
    console.log(index);

    var offset = $('.visual .section').eq(index).offset();
    console.log(offset);

    var offsetTop = offset.top;
    console.log(offsetTop);

    $('html, body').animate({scrollTop: offsetTop},800);

} )


$('.visual-banner').slick({

    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    dots: true,
    autoplay: true,

});



$('.back-top').on('click', function () {
    $('html, body').animate({scrollTop: 0},1000);

} )

$('.side-bar').on('click', function () {
    $('html').toggleClass('close');
} );






$(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    console.log(scroll);

    const sectionAoffsetTop = $('.section.a').offset().top;
    const sectionBoffsetTop = $('.section.b').offset().top;
    const sectionCoffsetTop = $('.section.c').offset().top;

    //console.log(sectionBoffsetTop);



    if(scroll < sectionBoffsetTop){
        $('.header ul li').eq(0).addClass('on');
    } else {
        $('.header ul li').eq(0).removeClass('on');
    }

    if(scroll > sectionBoffsetTop && scroll < sectionCoffsetTop ){
        $('.header ul li').eq(1).addClass('on')
    } else {
        $('.header ul li').eq(1).removeClass('on')
    }

    if(scroll == sectionCoffsetTop){
        $('.header ul li').eq(2).addClass('on')
    } else {
        $('.header ul li').eq(2).removeClass('on')
    }

    if(scroll > sectionBoffsetTop ){
        $('.back-top').addClass('appear')
    } else {
        $('.back-top').removeClass('appear');

    };

})

