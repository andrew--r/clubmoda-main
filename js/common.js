head.ready(function() {
	console.log("These aren't the droids you're looking for!");
    
    Sliders.init();
    Modals.init();
    Modals.initInfoblock();
    Placeholder.init();
    Validate.start($('.validate'));
    Validate.password();
    Infoblock.init();
    Infoblock.watch();

    $('#phoneInput').mask("+7 (999) 999-99-99");

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
    $('.slide-clickable').on('click', function() {
        document.location.href = $(this).attr('data-href');
    });
});