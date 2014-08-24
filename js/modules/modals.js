"use strict";
var Modals = (function() {
	var $modals = $('.openModal');
	var $modalsInfoblock = $('.openInfoblock');

	return {
		init: function(){
			$modals.fancybox({
				padding: 0,
				width: 400,
				autoSize : false,
				autoHeight: true,
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
		},
		initInfoblock: function() {
			$modalsInfoblock.fancybox({
				padding: 0,
				width: 660,
				autoSize : false,
				autoHeight: true,
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
		}
	};

})();