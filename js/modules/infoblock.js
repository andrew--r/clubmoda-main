"use strict";

var Infoblock = (function(){
	var $infoblock = $('.modal-infoblock__menu-item');
	return {
		init: function() {
			 $infoblock.on('click', function(e){
			 	e.preventDefault();
			 	$('.modal-infoblock__submenu.is-active').removeClass('is-active');
			 	$('.modal-infoblock__menu-item.is-active').removeClass('is-active');
			 	$('.modal-infoblock__' + $(this).attr('data-href')).addClass('is-active');
			 	$(this).addClass('is-active');
			 });
		},
		watch: function() {
			$('.openInfoblock').on('click', function(){
				$('.modal-infoblock__submenu.is-active').removeClass('is-active');
			 	$('.modal-infoblock__menu-item.is-active').removeClass('is-active');
			 	$('.modal-infoblock__' + $(this).attr('data-href')).addClass('is-active');
			 	$('.modal-infoblock__menu-item[data-href="' + $(this).attr('data-href') + '"]').addClass('is-active');
			});
		}
	};

}).call(this);