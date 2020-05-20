$('.header nav .menu').on('click', function () {

    var menuIndex = $(this).index();
    console.log(menuIndex);

    var secOffset = $('.section').eq(menuIndex).offset();
    console.log(secOffset);

    var offsetTop = secOffset.top;
    console.log(offsetTop);

    $('html, body').animate({
        scrollTop: offsetTop
    }, 600);

} );

$('.back-top').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
} );

/*
$('.btn-menu').on('click', function () {
    $('html').toggleClass('open-side-menu');
} )
*/

$('.btn-menu').on('click', function () {
    $('.side-menu').toggleClass('toggle');
} )