$('header ul li').on('click', function () {
    var index = $(this).index();
    console.log(index);

    var offset = $('.visual .section').eq(index).offset();
    console.log(offset);

    var offsetTop = offset.top;
    console.log(offsetTop);

    $('html, body').animate({scrollTop: offsetTop},800);

} )

$('.back-top').on('click', function () {
    $('html, body').animate({scrollTop: 0},1000);

} )

$('.side-bar').on('click', function () {
    $('html').toggleClass('close');
} );


$(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    const offsetA = $('.section.a').offset().top;
    const offsetB = $('.section.b').offset().top;
    const offsetC = $('.section.c').offset().top;

    if(scrollTop < offsetB){
        $('.header ul li').eq(0).addClass('on');
    } else {
        $('.header ul li').eq(0).removeClass('on');
    }

    if(scrollTop > offsetB && scrollTop < offsetC){
        $('header ul li').eq(1).addClass('on');
    } else {
        $('header ul li').eq(1).removeClass('on');
    }

    if(scrollTop == offsetC){
        $('.header ul li').eq(2).addClass('on');
    } else {
        $('.header ul li').eq(2).removeClass('on');
    }

    if(scrollTop > offsetB){
        $('.back-top').addClass('appear');
    } else {
        $('.back-top').removeClass('appear');
    }

})

$('.visual-banner').slick({
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    dots: true


});




