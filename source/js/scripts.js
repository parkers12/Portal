$(document).ready(function() {
    
    var cookie_smile = $.cookie('cookie_idea');
    
    
    if(!cookie_smile){
        var timersIds = [];
        showSmile();
        var timerIntIdIdea = setInterval(showSmile, 40000);

        function showSmile(skipBeginingStepsFading) {        
            if(!skipBeginingStepsFading)
            {
                timersIds.push(setTimeout ("$('.smile').show('drop');", 2000));
                timersIds.push(setTimeout ("$('.smile__bubble_first').fadeIn('fast');", 5000));
            }
            timersIds.push(setTimeout ("$('.smile__bubble_first').fadeOut('fast');", 10000));
            timersIds.push(setTimeout ("$('.smile__bubble_first').fadeIn('fast');", 25000));
            timersIds.push(setTimeout ("$('.smile__bubble_first').fadeOut('fast');", 30000));
            timersIds.push(setTimeout ("$('.smile').hide('drop');", 35000));
        }

        $('.smile').click(function(){
            if($('.idea-popup').hasClass('active')) {
                closePopupIdea();
            } else {
                $('.wrapper__overlay').fadeIn('fast', function() {
                    //$('.idea-popup').fadeIn('fast');
                    $('.idea-popup').addClass("active").animate({
                        opacity: 1,
                        left: [ "toggle", "swing" ]
                    }, 350);
                    $('.smile__bubble_first').fadeOut('fast', function() {
                        $('.smile__bubble_second').fadeIn('fast');
                    });
                    clearInterval(timerIntIdIdea);
                    for(var i = 0; i < timersIds.length; i++)
                        {
                            clearTimeout(timersIds[i]);
                        }
                    timersIds = [];
                });
            }
        });

        $('.idea-popup__close, .wrapper__overlay').click(closePopupIdea);

        function closePopupIdea(){
            $('.idea-popup').animate({
                left: [ "toggle", "swing" ],
                opacity: 0
            }, 350, function() {
                $('.wrapper__overlay').fadeOut('slow');
            }).removeClass('active').fadeOut('fast');
            $('.smile__bubble_second').fadeOut('fast', function() {
                $('.smile__bubble_first').fadeIn('fast');
            });
            showSmile(true);
            var timerIntIdIdea = setInterval(showSmile, 40000);
        }

        $('.button__all-news').click(function(){
            $('.idea-popup').animate({
                right: [ "toggle", "swing" ],
                opacity: 0
            }, 350, function() {
                $('.wrapper__overlay').fadeOut("slow");
            }).removeClass('active').fadeOut("fast");
            $('.smile__bubble_second').fadeOut('fast', function() {
                $('.smile__bubble_first').fadeOut('fast');
                $('.smile__bubble_third').fadeIn('fast');
            });
            
            setTimeout("$('.smile__bubble_third').fadeOut('fast');", 3000);
            //doBounce($('.smile'), 5, '40px', 200);
            //$('.smile').animate({height:'60px'},{queue:false, duration:600, easing: 'easeOutBounce'})
            setTimeout ("$('.smile').hide('drop');", 8000);
            clearInterval(timerIntIdIdea);
            
            $.cookie('cookie_idea', true, {
                expires: 1
            });
        });
    }
    
    
    
    $(".mCustomScrollbar").niceScroll({
        cursorcolor: "#a4c815",
        background: "#f9f9f9",
        cursoropacitymin: 0.4,
        cursoropacitymax: 1,
        cursorwidth: 2,
        cursorborder: 0,
        autohidemode: false,
        railoffset: {left:-6},
        railpadding:{top:0,right:0,left:0,bottom:0}
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