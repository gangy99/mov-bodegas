$(document).ready(function(){
    
    var pasos = $('.pasos')

   $(window).on('scroll',function(){

    var rentarOffsetTop = $('#como-rentar').offset().top;

    if ($(window).scrollTop() >= rentarOffsetTop){
        
        pasos.fadeIn(1000)
    }

    else if ($(window).scrollTop() < rentarOffsetTop) {
        
        pasos.hide()
    }

   })

})