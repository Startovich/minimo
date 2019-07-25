var APP = {
	// Views
	V: {},
	// Extensions
	E: {}
};

APP.V.HeaderMenu = {
	init: function () {
		var _this = this,
			lastPoint = 0,
			checkPoint = parseFloat($('.header__row').css('top')),
			windowWidth = $(window).width(),
			top = 0;

		//отслеживаем изменение размера окна браузера
		$(window).resize(function(){
			windowWidth = $(window).width();

			//возврат меню
			if(windowWidth > 842) {
				$('.menu').removeClass('menu_mobile');
				$('.menu').css({'opacity': '1'});
				$('.js-burger-btn').removeClass('burger-btn_close');
			}

			if(windowWidth <= 600) {
				$('.menu').css({'top': '50px'});
			}

			if(windowWidth > 600) {
				$('.menu').css({'top': '80px'});
			}
		});

		//scroll фиксация меню
		$(window).on('scroll', function(){
			var currentPoint = $(this).scrollTop();

			if ( currentPoint > lastPoint && currentPoint > checkPoint ) {
				$('.header__row').addClass('header__fixed');
			} else if ( currentPoint < lastPoint && currentPoint < checkPoint ) {
				$('.header__row').removeClass('header__fixed');
			}

			lastPoint = currentPoint;
		});

		//click по бургеру
		$('.js-burger-btn').unbind('click').on('click', function() {

			if($(this).hasClass('burger-btn_close')) {
				$(this).removeClass('burger-btn_close');
				$('.menu').stop().animate({
					top: 0,
					opacity: 0
				}, {
					complete: function(){
						$('.menu').removeClass('menu_mobile');
					}
				});
			} else {
				$(this).addClass('burger-btn_close');
				$('.menu').addClass('menu_mobile');

				//высота смещения в зависимости от ширины окна браузера
				if(windowWidth > 600) {
					top = '80px';
				} else {
					top = '50px';
				}

				$('.menu').stop().animate({
					top: top,
					opacity: 1
				});
			}
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