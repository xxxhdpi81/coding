$('#tab .nav .menu').on('click', function () {
    var menuIndex = $(this).index();

    console.log(menuIndex);

    $('.content').hide();
    $('.content').eq(menuIndex).show();

});