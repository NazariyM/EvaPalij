$(function () {

	var $body = $('body');

	function detectScrollWidth() {
		var outer = $('<div class="outer">')
				.css({ visibility: 'hidden', width: 100, overflow: 'scroll' })
				.appendTo('body'),
			inner = $('<div>')
				.css({width: '100%'})
				.appendTo(outer)
				.outerWidth();

		outer.remove();
		return 100 - inner;
	}

	function offBodyScroll() {
		$body
			.addClass('is-overflow')
			.css('padding-right', detectScrollWidth() + 'px');
	}

	function onBodyScroll() {
		$body
			.removeClass('is-overflow')
			.removeAttr('style');
	}

// popup
	let open = 'is-open';

	class Popup {
		constructor(el) {
			this.el = $(el);
			this.close = $('.js-popup-close');

			this._openPopup();
			this._closePopup();
		}

		_openPopup() {
			this.el.click((e) => {
				e.preventDefault();
				offBodyScroll();
				$(`.js-popup[data-index="${ this.el.data('popup') }"]`).addClass(open);
			});
		}

		_closePopup() {
			this.close.click(function(e) {
				e.preventDefault();
				let parent = $(this).closest('.js-popup');

				if ( parent.hasClass(open) ) {
					parent.removeClass(open);
					onBodyScroll();
				}
			});
		}
	}

	$('.js-open-popup').each(function() {
		new Popup(this);
	});

});
