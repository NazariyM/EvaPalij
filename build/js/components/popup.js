'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {

	var $body = $('body');

	function detectScrollWidth() {
		var outer = $('<div class="outer">').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
		    inner = $('<div>').css({ width: '100%' }).appendTo(outer).outerWidth();

		outer.remove();
		return 100 - inner;
	}

	function offBodyScroll() {
		$body.addClass('is-overflow').css('padding-right', detectScrollWidth() + 'px');
	}

	function onBodyScroll() {
		$body.removeClass('is-overflow').removeAttr('style');
	}

	// popup
	var open = 'is-open';

	var Popup = function () {
		function Popup(el) {
			_classCallCheck(this, Popup);

			this.el = $(el);
			this.close = $('.js-popup-close');

			this._openPopup();
			this._closePopup();
		}

		_createClass(Popup, [{
			key: '_openPopup',
			value: function _openPopup() {
				var _this = this;

				this.el.click(function (e) {
					e.preventDefault();
					offBodyScroll();
					$('.js-popup[data-index="' + _this.el.data('popup') + '"]').addClass(open);
				});
			}
		}, {
			key: '_closePopup',
			value: function _closePopup() {
				this.close.click(function (e) {
					e.preventDefault();
					var parent = $(this).closest('.js-popup');

					if (parent.hasClass(open)) {
						parent.removeClass(open);
						onBodyScroll();
					}
				});
			}
		}]);

		return Popup;
	}();

	$('.js-open-popup').each(function () {
		new Popup(this);
	});
});