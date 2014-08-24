"use strict";

var Placeholder = (function(){
	var $elements = $('.placeholder');
	
	return {
		init: function(){
			$elements.each(function() {
				$(this).val($(this).attr('data-placeholder'));
			});
			this.watch();
		},
		watch: function() {
			$elements.on('focus', function(){
				if ( $(this).val() == $(this).attr('data-placeholder')) {
					$(this).val('');
				}
			});
			$elements.on('blur', function(){
				if( $(this).val() == '' ) {
					$(this).val($(this).attr('data-placeholder'));
				}
			});
		}
	};

})();