$(document).ready(function() {
    
    

//-- smile animation ------------------------------------------
    
    //if($(".wrapper").hasClass('slider')) {
        var cookie_smile = $.cookie('cookie_idea');
        //if(!cookie_smile) {
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
        //}
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

    if($('#slider')) {
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
            locale: 'ru',
            stepping:10,
            format: 'DD.MM.YYYY',
            daysOfWeekDisabled:[0,6]
        });
        $('#datetimepicker3').datetimepicker({
            locale: 'ru',
            stepping:10,
            format: 'DD.MM.YYYY',
            daysOfWeekDisabled:[0,6],
            useCurrent: false
        });
        $("#datetimepicker2").on("dp.change", function (e) {
            $('#datetimepicker3').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker3").on("dp.change", function (e) {
            $('#datetimepicker2').data("DateTimePicker").maxDate(e.date);
        });
    });
    
//-- calendar -------------------------------------------------
    
    
    /*
    $('.block-news').hover(function() {
        $(this).find('.block-news__desc').stop().animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
    });*/
    
//-- calendar -------------------------------------------------
    
//-- DataTable ------------------------------------------------
    
    var table = $('#contacts').DataTable({
        "dom":  "<'row'<'col-sm-6'i><'col-sm-6'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'l><'col-sm-7'p>>",
        "language": {
            //"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Russian.json"
            "processing": "Подождите...",
            search: "_INPUT_",
            searchPlaceholder: "Поиск сотрудника",
            "lengthMenu": "показывать по _MENU_ записей",
            "info": "записи с _START_ по _END_ из _TOTAL_ записей",
            "infoEmpty": "записи с 0 по 0 из 0 записей",
            "infoFiltered": "(отфильтровано из _MAX_ записей)",
            "infoPostFix": "",
            "loadingRecords": "загрузка записей...",
            "zeroRecords": "записи отсутствуют",
            "emptyTable": "в таблице отсутствуют данные",
            "paginate": {
            "first": "первая",
            "previous": "предыдущая",
            "next": "следующая",
            "last": "последняя",
            "searchPlaceholder": "Поиск сотрудника"
            },
            "aria": {
                "sortAscending": ": активировать для сортировки столбца по возрастанию",
                "sortDescending": ": активировать для сортировки столбца по убыванию"
            }
        }
    });
    
    
//-- DataTable ------------------------------------------------

//-- Instagram ------------------------------------------------

/*
    $("#instagram").instagramGet({
        "user_id": "1146026203",
        "access_token": "1146026203.ba4c844.13f465f1fea340ac83637d6504720798",
        "count": 1
    });
*/

    if($('#instagram')) {
        var feed = new Instafeed({
            get: 'user',
            userId: '6165538624',
            accessToken: '6165538624.4072523.782e855c6bf24172af34d932ade08a9e',
            limit: 1,
            resolution: 'standard_resolution',
            template: '<a href="{{link}}" class="instagram__link"><img src="{{image}}" class="instagram__pic" /><div class="instagram__likes">{{likes}}</div><div class="instagram__comments">{{comments}}</div><div class="instagram__caption">{{caption}}</div></a>'
        });
        feed.run();
    }
    
//-- Instagram ------------------------------------------------

    

    
    
    
    
    // селект
	function initCustomSelectControls() {
		$('.ml-select__item.active').each(function() {
			var $container = $(this).closest(".ml-select");
			$container.find('.ml-select__input').val($(this).text());
		});

		$('.ml-select .mdi-chevron-down, .ml-select__input').click(function() {
			var $container = $(this).closest('.ml-select');

			if(!$container.hasClass("active"))
			{
				$('.ml-select.active, .ml-select__dropbox.active').removeClass('active');
			}

			$container.find('.ml-select__dropbox').toggleClass('active');
			$container.toggleClass('active');
		});
		
		$('.ml-select__item').click(function() {
			var $container = $(this).closest(".ml-select");
			if ($(this).hasClass('active')) {
				$container.find('.ml-select__item').removeClass('active');
			}
			else {
				$container.find('.ml-select__item').removeClass('active');
				$(this).addClass('active');
			}
			
			var secletedText = $container.find('.ml-select__item.active').text();
			$container.find('.ml-select__input').val(secletedText);

			$container.find('.ml-select__dropbox').removeClass('active');
			$container.removeClass('active');
		});
	}
	

	initCustomSelectControls();
    
    
    
    // мультиселект
	function bindSelectedItemsToInput() {
		var selectedItemsAsString = "";
		var selectedItems = $('.ml-mselect__item.active');
		var selectedItemsCount = selectedItems.length;

		selectedItems.each(function(index) {
			selectedItemsAsString += $(this).text();
			if(index != selectedItemsCount - 1)
				selectedItemsAsString += ', ';
		});
		$('.ml-mselect__input').val(selectedItemsAsString);
	}

	bindSelectedItemsToInput();

	$('.ml-mselect__input, .ml-mselect .mdi-chevron-down').click(function() {
		var $mlDropbox = $(this).siblings('.ml-mselect__dropbox');
		var $mlContainer = $(this).closest('.ml-mselect');
		if(!$mlDropbox.hasClass("active"))
		{
			$('.ml-mselect__dropbox, .ml-mselect').removeClass("active");
		}

		$mlDropbox.toggleClass('active');
		$mlContainer.toggleClass('active');
	});

	$( '.ml-mselect__item').click(function() {
		$(this).toggleClass('active');
		bindSelectedItemsToInput();
	});




	//мультиселек с поиском
	function bindSelectedItemsToInputSearch() {

		$('.ml-mselect-search__result').last().empty();
		var selectedItems = $('.ml-mselect-search__item.active');

		selectedItems.each(function(index) {
			$('.ml-mselect-search__result').last().append('<div class="ml-mselect-search__result-item">' + $(this).text()  +  '<i class="mdi mdi-close"></i></div>');
		});


		if($('.ml-mselect-search__item.active').length > 0) {
			$('.ml-mselect-search__box').removeClass('empty');
		}
		else {
			$('.ml-mselect-search__box').addClass('empty');
			
		}
		
	}

	bindSelectedItemsToInputSearch();

	$('.ml-mselect-search__box,  .mdi-chevron-down').click(function(e) {
		if($(e.target).is('.ml-mselect-search__box,  .mdi-chevron-down'))
		{
			var $mlDropbox = $(this).siblings('.ml-mselect-search__dropbox');
			var $mlContainer = $(this).closest('.ml-mselect-search');
			if(!$mlDropbox.hasClass("active"))
			{
				$('.ml-mselect-search__dropbox, .ml-mselect-search').removeClass("active");
			}

			$mlDropbox.toggleClass('active');
			$mlContainer.toggleClass('active');
		}
	});

	$( '.ml-mselect-search__item').click(function() {
		$(this).toggleClass('active');
		bindSelectedItemsToInputSearch();
	});

	$(document).on("click", ".ml-mselect-search__result-item  .mdi-close", function(e) {
		SelectBlock = $(this).parent().text();
		console.log(SelectBlock);


		$('.ml-mselect-search__item').each(function(index) {
			if ( $(this).text() == SelectBlock) {
				$(this).removeClass('active');
				bindSelectedItemsToInputSearch();
			}
		});

	});
	
	$(".input.ml-mselect-search__input").keyup(function(e){
		var items = $('.ml-mselect-search__item');
		var changedValue = $(e.currentTarget).val().toLowerCase();
		if(changedValue.length >= 3)
		{
			console.log(changedValue);

			items.each(function(index) {
				if( $(this).text().toLowerCase().indexOf(changedValue) == 0) {
					$(this).show();
				}
				else
				{
					$(this).hide();
				}
			});
		}
		else
		{
			items.show();
		}
	});
    
});