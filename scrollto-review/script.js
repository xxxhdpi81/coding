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

