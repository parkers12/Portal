$(document).ready(function() {
    setTimeout (
        "$('.smile').show('drop');",
        5000
    );
    
    $('.smile').click(function(event){
        $('.wrapper__overlay').addClass('active');
        $('.idea-popup').addClass('active');
    });
    
    $('.idea-popup__close').click(function(event){
        $('.wrapper__overlay').removeClass('active');
        $('.idea-popup').removeClass('active');
    });
    
    $('.wrapper__overlay').click(function(event){
        $('.wrapper__overlay').removeClass('active');
        $('.idea-popup').removeClass('active');
    });
    
    
    var characters=700;
    $("#idea-popup__counter").append("Осталось <strong>" + characters + "</strong> символов");
    $("#idea-popup__textarea").keyup(function(){
        if($(this).text().length < characters){
            $(this).text($(this).text().substr(0, characters));
        }
    });
    
    
    /*
    
    var $texts = $('#idea-popup__textarea[maxlength]');
    $texts.each(function () { // bracket was missing here...
        var $this = $(this), // incorrect variable declaration here...
        max = $this.attr('maxlength'),
        textId = $this.attr('id'), // incorrect method call here...
        $parent = $this.parent(),
        countId = textId + '-count',

        $div = $('#idea-popup__counter').addClass('count-down').insertAfter($this),
        $input = $('<input></input>').attr({
            type: "text",
            readOnly: "readOnly",
            value: max,
            id: countId
        }).css({
            width: "30px", // missing comma here...
            borderColor: "transparent",
            backgroundColor: "transparent"
        }).addClass('readOnly').appendTo($div);

        $this.on({
            keyup: function () {
                var val = $this.val(),
                countVal = $('#' + countId).val(); // must have semicolon here...
                if (val.length > max) {
                    $this.val(val.substr(0, max));
                    alert('Max length exceeded: ' + max);
                    return false;
                } else {
                    $('#' + countId).val(max - val.length);
                }
            },
            blur: function () {
                var val = $this.val();
                if (val.length > max) {
                    $this.val(val.substr(0, max));
                    alert('Max length exceeded: ' + max);
                    return false;
                } else {
                    $('#' + countId).val(max - val.length);
                }
            }
        });
    });
    */
/*
    var textarea = document.querySelector('#idea-popup__textarea');
    var initialHeight = 270;
    var resize = function resize() {
        textarea.style.height = initialHeight + 'px';
        //var height = textarea.scrollHeight;
        //textarea.style.height = height + initialHeight + 'px';
    };
    resize();
    textarea.addEventListener('input', resize);
    */

});