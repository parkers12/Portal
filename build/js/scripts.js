$(document).ready(function() {
    setTimeout (
        "$('.smile').show('drop');",
        2000
    );
    
    setTimeout (
        "$('.smile__bubble').fadeIn('fast');",
        5000
    );
    
    setTimeout (
        "$('.smile__bubble').fadeOut('fast');",
        10000
    );
    
    setTimeout (
        "$('.smile').hide('drop');",
        15000
    );
    
    $('.smile').click(function(){
        if($('.idea-popup').hasClass('active')) {
             $('.idea-popup__close, .wrapper__overlay').click(function(){
                $('.idea-popup').animate({
                    top: [ "toggle", "swing" ],
                    opacity: 0
                }, 350, function() {
                    $('.wrapper__overlay').fadeOut("slow");
                }).removeClass('active').fadeOut("fast");
            });
        } else {
            $('.wrapper__overlay').fadeIn("fast", function() {
                //$('.idea-popup').fadeIn('fast');
                $('.idea-popup').addClass("active").animate({
                    opacity: 1,
                    top: [ "toggle", "swing" ]
                }, 350)
            });
        }
    });
    
    $('.idea-popup__close, .wrapper__overlay').click(function(){
        $('.idea-popup').animate({
            top: [ "toggle", "swing" ],
            opacity: 0
        }, 350, function() {
            $('.wrapper__overlay').fadeOut("slow");
        }).removeClass('active').fadeOut("fast");
    });
    
    
    $(".mCustomScrollbar").niceScroll({
        cursorcolor: "#a4c815",
        background: "#f9f9f9",
        cursoropacitymin: 0.4,
        cursoropacitymax: 1,
        cursorwidth: 2,
        cursorborder: 0,
        autohidemode: false,
        railpadding:{top:0,right:2,left:0,bottom:0}
    });
    
    var max_characters=700;
    $('.idea-popup__body-textarea').focus();
    $('.idea-popup__body-textarea').bind('input', function(){
        characters = max_characters - $(this).val().length;
        $('.idea-popup__counter').html("Осталось <strong>" + characters + "</strong> символов");
    });
    
    
    
    
    var config = {
        enter: 'bottom',
        move: '8px',
        over: '0.3s',
        wait: '0s',
        easing: 'hustle',
        scale: { direction: 'up', power: '5%' },
        rotate: { x: 0, y: 0, z: 0 },
        opacity:  0,
        mobile: true,
        reset: true,
        vFactor: 0.20,
        delay: 'onload'
    }
    window.sr = new scrollReveal( config );
    

});