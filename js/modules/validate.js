"use strict";
var Validate = (function(){

	return {
		start: function($element) {
			var elementValue;

			$element.on('keyup', function(e){
				var $el = $(this);
				elementValue = $(this).val();

				if (e.keyCode == 8 || e.keyCode == 46) {
					if (elementValue == '') {
						$el.removeClass('input--fail');
						$el.removeClass('input--success');
					}
					else {
						if (validateEmail(elementValue)) {
							$el.removeClass('input--fail');
							$el.addClass('input--success');
						}
						else {
							$el.removeClass('input--success');
							$el.addClass('input--fail');
						}
					}
				}
				else {
					if (validateEmail(elementValue)) {
						$el.removeClass('input--fail');
						$el.addClass('input--success');
					}
					else {
						$el.removeClass('input--success');
						$el.addClass('input--fail');
					}
				}
			});
		},
		password: function() {
			var $pwd1 = $('.password1');
			var $pwd2 = $('.password2');

			$pwd2.on('keyup', function(){
				if ($pwd2.val() == $pwd1.val()) {
					$pwd1.addClass('input--success');
					$pwd2.addClass('input--success');
				}
				else {
					$pwd1.removeClass('input--success');
					$pwd2.removeClass('input--success');
				}
			});
		}
	};


function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
})();