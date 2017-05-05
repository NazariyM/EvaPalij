$(function () {

	function initFullpage() {
		let $homeFullpage = $('.js-home-fullpage'),
			screenDelay = 1000,
			navDelay = 0,
			$timeoutId,
			$animationIsFinished = false,
			$header = $('.js-header'),
			$logoBlack = $('.js-logo-black'),
			$logoWhite = $('.js-logo-white'),
			$hamburger = $('.js-hamburger'),
			$nav = $('.js-nav'),
			$nextSectionBtn = $('.js-next-section');

		if ($homeFullpage.length) {
			$homeFullpage.fullpage({
				sectionSelector: 'fp-section',
				menu: '.js-fp-nav',
				paddingTop: '125px',
				scrollOverflow: true,
				scrollingSpeed: 1000,
				fitToSectionDelay: 1000,
				verticalCentered: true,
				onLeave: function (index, nextIndex, direction) {

					if (index === 1 && direction === 'down') {
						clearTimeout($timeoutId);

						$timeoutId = setTimeout(function () {
							$animationIsFinished = true;
							$.fn.fullpage.moveTo(nextIndex);
						}, screenDelay);

						$hamburger.removeClass('is-active');
						$nav.removeClass('is-open');
						$logoWhite.slideUp(600);

						setTimeout(function () {
							$header.addClass('header_inside');
							$logoBlack.slideDown(800);
							$nav.addClass('nav_inside');
						}, 800);

						return $animationIsFinished;

					} else if (index === 2 && direction === 'up') {
						$header.removeClass('header_inside');

						navDelay = setInterval(function () {
							$nav.slideUp();
						}, 0);

						setTimeout(function () {
							clearInterval(navDelay);
							$nav.slideDown()
								.removeClass('nav_inside');
						}, 300);

						$logoBlack.slideUp(200);

						setTimeout(function () {
							$logoWhite.slideDown();
						}, 1200);

						setTimeout(function () {
							$hamburger.addClass('is-active');
							$nav.addClass('is-open');
						}, 1200);
					}
				}
			});

			$nextSectionBtn.on('click', function () {
				$.fn.fullpage.moveSectionDown();
			});

			if ($(window).width() <= 767) {
				$.fn.fullpage.destroy('all');
			}
			if ($(window).height() <= 600) {
				$.fn.fullpage.setAutoScrolling(false);
			}
		}
	}

	initFullpage();

	function navToggling() {
		let $hamburger = $('.js-hamburger'),
			$nav = $('.js-nav');

		$hamburger.on('click', function () {
			$(this).toggleClass('is-active');
			$nav.toggleClass('is-open');
		});

		$(window).on('resize', function () {
			$hamburger.removeClass('is-active');
			$nav.removeClass('is-open');
		});

		$(function () {

			if ($(window).width() >= 767) {
				setTimeout(function () {
					$hamburger.trigger('click');
				}, 600);
			}
		});
	}

	navToggling();

	function initBlackHeader() {
		let $header = $('.js-header'),
			$nav = $('.js-nav'),
			$body = $('body'),
			windowWidth = 767;

		$(window).on('resize, load', function () {
			if ($(window).width() >= windowWidth && !$header.hasClass('header_inside') && !$body.hasClass('is-home')) {
				$header.addClass('header_inside');
				$nav.addClass('nav_inside');
			}
			else if ($(window).width() <= windowWidth && $header.hasClass('header_inside')) {
				$header.removeClass('header_inside');
				$nav.removeClass('nav_inside');
			}
		});
	}

	initBlackHeader();

	//catalog tabs
	function initCatalog() {
		let $catBtn = $('.js-catalog-nav').find('li');
		let $catContent = $('.js-catalog-content').children('div');

		$catContent.hide();

		$catBtn.each(function () {
			if ($(this).hasClass('is-active')) {
				$(this).trigger('click');
				$catContent.eq($(this).index()).fadeIn(600);
			}
		});

		$catBtn.on('click', function (e) {
			e.preventDefault();
			var $index = $(this).index();
			var $_this = $(this);

			$_this.hasClass('is-active') ? $_this.removeClass('is-active') : $_this.addClass('is-active').siblings().removeClass('is-active');

			$catContent.eq($index).slideToggle(600);
			$catContent.hide().eq($index).slideToggle(600);
		});

	}

	initCatalog();

	// cart quantity
	let max = {number: Infinity};
// add/remove item from basket
	function countItemQuantity() {
		let counter = $('.js-quantity');

		counter.click(function (e) {
			let input = $(this).find('input'),
				val = input.val(),
				decrease = $(e.target).parents('.js-remove-item').length,
				increase = $(e.target).parents('.js-add-item').length;

			if (decrease) {
				if (val > 1) {
					input.val(Number(input.val()) - 1).trigger('change');
				}
			} else if (increase) {
				if (val < max.number) {
					input.val(Number(input.val()) + 1).trigger('change');
				}
			}
		});
	}

	countItemQuantity();

});