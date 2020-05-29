$('.tab .menu').on('mouseover', function () {

    var menuIndex = $(this).index();
    console.log(menuIndex);

    $('.content').hide();
    $('.content').eq(menuIndex).show();
    $('.content').css({'background-color':'#ddd'});
}).on('mouseout', function () {
    $('.content').css({'background-color': '#f6f6f6'});
});




/*
$('.tab .menu').on('mouseover', function () {
    $('.content').css({'background-color':'#ddd'});
})
.on('mouseout', function () {
    $('.content').css({'background-color': '#f6f6f6'})
}  );

*/