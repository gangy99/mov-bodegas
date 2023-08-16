$(document).ready(function() {

    var numero = 1;

    $('#btnMenu').on('click', function (e) {
        
        e.preventDefault();
        if (numero == 1) {
            $('.burger ul').animate({left:0}, 300, function () {
                numero = 0;
            });
        } else {
            $('.burger ul').animate({left:'-100%'}, 300, function () {
                numero = 1;
                
            })
        }

    })

    $('.burger ul a').on('click', function () {
        
        $('.burger ul').animate({left:'-100%'}, 300, function () {
            numero = 1;
            
        })

    })


});