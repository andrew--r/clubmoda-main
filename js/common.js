head.ready(function() {
	console.log("These aren't the droids you're looking for!");
    var slider1 = $("#slider1");
    var slider2 = $("#top-models");
    var slider3 = $("#slider3");
    var slider4 = $("#slider4");
    var slider5 = $("#slider5");
    var slider6 = $(".footer__partners");

	slider1.owlCarousel({
        singleItem: true,

        navigation: true,
        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

        pagination: true,

        slideSpeed: 1000,

        mouseDrag : false,
        touchDrag : false
    });
    slider2.owlCarousel({
        items: 5,

        navigation: true,
        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

        pagination: true,

        slideSpeed: 300,

        mouseDrag : false,
        touchDrag : false,

        responsive: false
    });
    slider3.owlCarousel({
        items: 1,

        navigation: true,
        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

        pagination: true,

        slideSpeed: 300,

        mouseDrag : false,
        touchDrag : false,

        responsive: false
    });
    slider4.owlCarousel({
        singleItem: true,

        navigation: true,
        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

        pagination: true,

        slideSpeed: 1000,

        mouseDrag : false,
        touchDrag : false
    });
    slider5.owlCarousel({
        items: 1,

        navigation: true,
        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

        pagination: true,

        slideSpeed: 300,

        mouseDrag : false,
        touchDrag : false,

        responsive: false
    });
    slider6.owlCarousel({
        items: 9,

        navigation: true,
        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

        pagination: true,

        slideSpeed: 300,

        mouseDrag : false,
        touchDrag : false,

        responsive: false
    });

    // Slider1

    var owlData = $("#slider1").data('owlCarousel');

    $('.slider1__nav .slider-trigger').on('mouseenter', function(){
        $('.slider1__nav .slider-trigger.active').removeClass('active');
        $(this).addClass('active');
        slider1.trigger('owl.jumpTo', parseInt($(this).attr('data-slide')));
    });
    $('#slider1 .btn-prev').on('mousedown', function(){
        slide = $('.slider1__nav .slider-trigger.active').attr('data-slide');
        if ( slide > 0 ) {
            $('.slider1__nav .slider-trigger.active').removeClass('active');
            $('.slider1__nav .slider-trigger[data-slide=' + (slide-1).toString() + ']').addClass('active');
        }
        if( slide == 0 ) {
            $('.slider1__nav .slider-trigger.active').removeClass('active');
            $('.slider1__nav .slider-trigger[data-slide=' + (owlData.$owlItems.length-1).toString() + ']').addClass('active');
        }
    });
    $('#slider1 .btn-next').on('mousedown', function(){
        slide = $('.slider1__nav .slider-trigger.active').attr('data-slide');
        if ( slide < owlData.$owlItems.length-1 ) {
            $('.slider1__nav .slider-trigger.active').removeClass('active');
            $('.slider1__nav .slider-trigger[data-slide=' + (parseInt(slide)+1).toString() + ']').addClass('active');
        }
        if ( slide == owlData.$owlItems.length-1 ) {
            $('.slider1__nav .slider-trigger.active').removeClass('active');
            $('.slider1__nav .slider-trigger[data-slide=0]').addClass('active');
        }
    });

    // Slider 4
    var owlData = $("#slider4").data('owlCarousel');

    $('.slider4__nav .slider-trigger').on('mouseenter', function(){
        $('.slider4__nav .slider-trigger.active').removeClass('active');
        $(this).addClass('active');
        slider4.trigger('owl.goTo', parseInt($(this).attr('data-slide')));
    });
    $('#slider4 .btn-prev').on('click', function(){
        slide = $('.slider4__nav .slider-trigger.active').attr('data-slide');
        if ( slide > 0 ) {
            $('.slider4__nav .slider-trigger.active').removeClass('active');
            $('.slider4__nav .slider-trigger[data-slide=' + (slide-1).toString() + ']').addClass('active');
        }
        if( slide == 0 ) {
            $('.slider4__nav .slider-trigger.active').removeClass('active');
            $('.slider4__nav .slider-trigger[data-slide=' + (owlData.$owlItems.length-1).toString() + ']').addClass('active');
        }
    });
    $('#slider4 .btn-next').on('click', function(){
        slide = $('.slider4__nav .slider-trigger.active').attr('data-slide');
        if ( slide < owlData.$userItems.length-1 ) {
            $('.slider4__nav .slider-trigger.active').removeClass('active');
            $('.slider4__nav .slider-trigger[data-slide=' + (parseInt(slide)+1).toString() + ']').addClass('active');
        }
        if ( slide == owlData.$owlItems.length-1 ) {
            $('.slider4__nav .slider-trigger.active').removeClass('active');
            $('.slider4__nav .slider-trigger[data-slide=0]').addClass('active');
        }
    });

    // Placeholder
    var input = $('.subscribe__input');
    input.focus(function(){
        if ( $(this).val() == $(this).attr('value')) {
            $(this).val('');
        }
    });
    input.blur(function(){
        if( $(this).val() == '' ) {
            $(this).val($(this).attr('value'));
        }
    })

    // Validate email
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validate() {
        var email = input.val();
        if ( validateEmail(email) ) {
            input.removeClass('subscribe__input--fail');
            input.addClass('subscribe__input--success');

        }
        else {
            input.removeClass('subscribe__input--success');
            input.addClass('subscribe__input--fail')
        }
    }
    function validateSubmit() {
        var email = input.val();
        if ( validateEmail(email) ) {
            return true;
        }
        else {
            return false;
        }
    }
    $('.subscribe__input').bind('keyup', validate);
    $('#subscribe').bind('submit', validateSubmit);

    // goTop btn
    $(window).scroll(function() {
        if($(window).scrollTop() != 0) {
            $('#goTop').fadeIn();
        }
        else {
            $('#goTop').fadeOut();
        }
    });
     
    $('#goTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });

    // slide click
    $('.slide-clickable').bind('click', function() {
        document.location.href = $(this).attr('data-href');
    })
});