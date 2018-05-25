$(document).ready(function() {
    
    

//-- smile animation ------------------------------------------
    
    //if($(".wrapper").hasClass('slider')) {
        var cookie_smile = $.cookie('cookie_idea');
        if(!cookie_smile) {
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
    //}

//-- smile animation ----------------------------------------
    
//-- scroll -------------------------------------------------
    
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

//-- scroll -------------------------------------------------

//-- counter character --------------------------------------
    
    var max_characters=700;
    $('.idea-popup__body-textarea').focus();
    $('.idea-popup__body-textarea').bind('input', function(){
        characters = max_characters - $(this).val().length;
        $('.idea-popup__counter').html("Осталось <strong>" + characters + "</strong> символов");
    });
    
//-- counter character --------------------------------------
    
//-- scroll -------------------------------------------------
    
    if($(".reveal")) {
        window.sr = ScrollReveal( {
            origin: 'bottom',
            distance: '8px',
            duration: 300,
            delay: 0,
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
            scale: 0.95,
            rotate: { x: 0, y: 0, z: 0 },
            opacity:  0,
            mobile: true,
            reset: true,
            viewFactor: 0.20,
            useDelay: 'onload'
        } );
        sr.reveal(".reveal");
    }
     
//-- scroll -------------------------------------------------

//-- slider -------------------------------------------------
    
    var $slider = $('.slider-wrap');
    var html = $slider.html();

    // Options

    var defaults = {
        fade: true,
        random: false,
        reverse: false,
        auto: true,
        loop: true,
        nav: true,
        navWrap: null,
        bullets: true,
        thumbs: true,
        thumbSize: 25,
        timer: true,
        onSlideshowEnd: function(){ $('.stop, .start').toggle() }
    };

    var effects = {
        'default': { x:6, y:4, random: true },
        simple: { x:6, y:4, effect: 'simple', random: true },
        left: { x:1, y:8, effect: 'left' },
        up: { x:20, y:1, effect: 'up', rewind: 60, backReverse: true },
        leftright: { x:1, y:8, effect: 'leftright' },
        updown: { x:20, y:1, effect: 'updown', cssSpeed: 500, backReverse: true },
        switchlr: { x:20, y:1, effect: 'switchlr', backReverse: true },
        switchud: { x:1, y:8, effect: 'switchud' },
        fliplr: { x:20, y:1, effect: 'fliplr', backReverse: true },
        flipud: { x:20, y:3, effect: 'flipud', reverse: true, rewind: 75 },
        reduce: { x:6, y:4, effect: 'reduce' },
        360: { x:1, y:1, effect: '360', fade: true, cssSpeed: 600 }
    };

    $('#effects-select').change(function() {
        var effect = $(this).val();
        $slider.fadeTo( 0,0 ).html( html );
        $('.stop').hide();
        $('.start').show();
        setTimeout(function() {
          $('.slider').tilesSlider( $.extend( {}, defaults, effects[ effect ] ) );
          $slider.fadeTo( 0,1 );
          $('body').removeClass('tiles-preload');
        }, 100 );
        $('.code').empty().html(function() {
          var e = effects[ effect ], c = [];
          for ( var i in e ) {
            if ( i !== 'effect' ) {
              c.push('<code>'+ i +': '+ e[i] +'</code>');
            }
          }
          return c.join('');
        });
    });

    $('.start').click(function() {
        $(this).hide();
        $('.stop').show();
        $('.slider').tilesSlider('start')
    });

    $('.stop').click(function() {
        $(this).hide();
        $('.start').show()
        $('.slider').tilesSlider('stop')
    });

    if($('#slider')) {
        $('.slider').tilesSlider( $.extend( {}, defaults, effects['default'] ) );
    }
    
//-- slider -------------------------------------------------
    
//-- calendar -------------------------------------------------
    
    $(function () {
      $('#datetimepicker1').datetimepicker({
	    locale: 'ru',
		stepping:10,
		format: 'DD.MM.YYYY',
		defaultDate: moment('01.11.2017').format('DD.MM.YYYY'),
		daysOfWeekDisabled:[0,6]
	  });
      $('#datetimepicker2').datetimepicker({
	    locale: 'ru'
	  });
    });
    
//-- calendar -------------------------------------------------

});