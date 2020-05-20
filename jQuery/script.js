$(".menu-btn").on("click", function() {
    $(".sidebar").toggle();
})

$(".menu-btn").on("mouseover", function () {
    $(".menu-btn a").css('color','red')
});

$(".menu-btn").on("mouseout", function () {
    $(".menu-btn a").css('color','#242424')

});

$(".event-popup").on("click", function () {
    $(".popup").show();
})

$(".popup").on("click", function () {
    $(".popup").hide();
})

$(".v").html("About Us").css("color","red");

/*
$(document).ready(function () {
    $('h1').css('color','red');
    $('h1').css('background','yellow');
})
*/

/*
$(function () {
    $('h1').css('color','red');
});
*/


/*
$(function () {
    $('h1').css({
        'color':'blue',
        'background':'black',
        'textdecoration':'underline'
    })
});
*/

$('h1').html('여기를 클릭하면 회색박스가 없어진다우').css({
   'color':'#fff',
   'background':'red'
});

$('h3').html('이소연의 제이쿼리 연습장').css({
    color: 'blue',
    fontsize: '72px'
});

$('.box').css({
   background: '#ddd',
   width: '300px',
   height: '200px'
});


/*
$('.box').on('mouseover', function () {
    $(this).css('background-color','black');
})

$('.box').on('mouseout', function () {
    $(this).css('background-color','#dddddd');
})
*/


$('h1').on('click', function () {
    $('.box').toggle();
});

$('.box02').on('click', function () {
    $('.box03').animate({'opacity': 0},1500,
        function () {
            $('.box03').animate({'opacity':1},1500);
        });

});

$('.section-list ul li').on('mouseover', function () {
    $(this).css({'background-color':'#ddd'});
})

$('.section-list ul li').on('mouseout', function () {
    $(this).css({'background-color':"#fff"});
} );

$('.btn-menu').on('mouseover', function () {
    $('.hide').show()
});
$('.btn-menu').on('mouseout', function () {
    $('.hide').hide()
});

$('.box04').on('click', function() {
    $(this).animate({'margin-left': '200px'})
});

$('.box05').animate({'width':'700px'},
    function () {
        $(this).animate({'width':'100px'})
} )

$('.box06').on('click', function () {
    $(this).animate({'margin-left':'800px'},1000);
} );


$('.box07').on('mouseover', function () {
    $(this).stop(true).animate({'background-color':'red'});
} )
.on('mouseout', function () {
    $(this).stop(true).animate({'background-color':'green'});
} );


/*
$('.box07').animate({'width':'800px'},function () {
    $(this).animate({'width':'100px'});
});
*/

$('.wrapper').on('mouseover', function () {
    $(this).find('.dark-bg').stop(true).animate({'opacity': 1});
})
.on('mouseout', function () {
    $(this).find('.dark-bg').stop(true).animate({'opacity': 0})
});


$('.wrapper-02').on('mouseover', function () {
    $(this).find('.dark-bg-02').stop(true).animate({'left':0})
})
.on('mouseout', function () {
    $(this).find('.dark-bg-02').stop(true).animate({'left':'-500px'});
});


var a = 20;
var b = 30;
if(a<b){
    document.write('정답입니다!');
} else{
    document.write('거짓입니다!');
}


function popup() {
    alert('안녕?')
}
popup();


/*
function plus(x,y) {
    var sum = x + y;
    return sum;
}

var c = 100;
var d = 200;
var total = plus(c,d);
document.write(total);
*/

function event(name) {
    return name + '님 안녕하세요?';
}
event('이소연');


function add(x,y) {
    var sum = x + y;
    return sum
}
var ten = 10;
var twenty = 20;
var total = add(ten, twenty);
document.write(total);

var baby = {
    age: '3살',
    birth: '9월 22일',
    name: function () {
        return this.birth;
    }
}
var bday = baby.birth;
document.write(bday);


/*
$('.tumble').on('click', function () {
    $('.box20').slideToggle();
})
*/

$('.tumble').on('click', function () {
    $('.box20').toggleClass('blue');
});

