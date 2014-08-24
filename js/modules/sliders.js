"use strict";
var Sliders = (function(){
	var $slider1 = $("#slider1");
	var $slider2 = $("#top-models");
	var $slider3 = $("#slider3");
	var $slider4 = $("#slider4");
	var $slider5 = $("#slider5");
	var $slider6 = $(".footer__partners");
	var $slider7 = $(".footer__partners--tablet");

	return {
		init: function() {
			$slider1.owlCarousel({
		        singleItem: true,

		        navigation: true,
		        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

		        pagination: true,

		        slideSpeed: 1000,

		        mouseDrag : false,
		        touchDrag : false,

		        responsive: true
		    });
			$slider2.owlCarousel({
		        items: 5,

		        navigation: true,
		        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

		        pagination: false,

		        slideSpeed: 300,

		        mouseDrag : false,
		        touchDrag : false,

		        responsive: false
		    });
		    $slider3.owlCarousel({
		        items: 1,

		        navigation: true,
		        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

		        pagination: true,

		        slideSpeed: 300,

		        mouseDrag : false,
		        touchDrag : false,

		        responsive: false
		    });
		    $slider4.owlCarousel({
		        singleItem: true,

		        navigation: true,
		        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

		        pagination: true,

		        slideSpeed: 1000,

		        mouseDrag : false,
		        touchDrag : false
		    });
		    $slider5.owlCarousel({
		        items: 1,

		        navigation: true,
		        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

		        pagination: true,

		        slideSpeed: 300,

		        mouseDrag : false,
		        touchDrag : false,

		        responsive: false
		    });
		    $slider6.owlCarousel({
		        items: 9,

		        navigation: true,
		        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

		        pagination: true,

		        slideSpeed: 300,

		        mouseDrag : false,
		        touchDrag : false,

		        responsive: false
		    });
		    $slider7.owlCarousel({
		        items: 7,

		        navigation: true,
		        navigationText: ["<div class='btn-prev'></div>","<div class='btn-next'></div>"],

		        pagination: true,

		        slideSpeed: 300,

		        mouseDrag : false,
		        touchDrag : false,

		        responsive: false
		    });
		}
	};
})();
