var APP = {
	// Views
	V: {},
	// Extensions
	E: {}
};

APP.V.HeaderMenu = {
	init: function () {
		var _this = this;

		//click по бургеру
		$('.js-burger-btn').unbind('click').on('click', function() {
			//проверяем состояние бургера
			/*if($(this).hasClass('burger-btn_close')) {
				$(this).removeClass('burger-btn_close');
			} else {
				$(this).addClass('burger-btn_close');
			}*/

			$(this).toggleClass('burger-btn_close');

			console.log($(this));
		});


	}
}

APP.init = function () {
	//header
	APP.V.HeaderMenu.init();
};

(function($) {
	$(document).ready(function() {
		APP.init();
	});
})(jQuery);