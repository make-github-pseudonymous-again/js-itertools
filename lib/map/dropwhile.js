'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dropwhile = dropwhile;

var _ = require('..');

var _marked = [dropwhile].map(regeneratorRuntime.mark);

/**
 * Drop elements of the input iterable while the current element satisfies the
 * input predicate.
 *
 * @param {Function} predicate - The input predicate.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function dropwhile(predicate, iterable) {
	var iterator, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

	return regeneratorRuntime.wrap(function dropwhile$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					iterator = (0, _.iter)(iterable);
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 4;
					_iterator = iterator[Symbol.iterator]();

				case 6:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 17;
						break;
					}

					item = _step.value;

					if (!predicate(item)) {
						_context.next = 10;
						break;
					}

					return _context.abrupt('continue', 14);

				case 10:
					_context.next = 12;
					return item;

				case 12:
					return _context.delegateYield(iterator, 't0', 13);

				case 13:
					return _context.abrupt('return');

				case 14:
					_iteratorNormalCompletion = true;
					_context.next = 6;
					break;

				case 17:
					_context.next = 23;
					break;

				case 19:
					_context.prev = 19;
					_context.t1 = _context['catch'](4);
					_didIteratorError = true;
					_iteratorError = _context.t1;

				case 23:
					_context.prev = 23;
					_context.prev = 24;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 26:
					_context.prev = 26;

					if (!_didIteratorError) {
						_context.next = 29;
						break;
					}

					throw _iteratorError;

				case 29:
					return _context.finish(26);

				case 30:
					return _context.finish(23);

				case 31:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[4, 19, 23, 31], [24,, 26, 30]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZHJvcHdoaWxlLmpzIl0sIm5hbWVzIjpbImRyb3B3aGlsZSIsInByZWRpY2F0ZSIsIml0ZXJhYmxlIiwiaXRlcmF0b3IiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVpQkEsUyxHQUFBQSxTOztBQVZqQjs7ZUFVaUJBLFM7O0FBUmpCOzs7Ozs7OztBQVFPLFNBQVVBLFNBQVYsQ0FBc0JDLFNBQXRCLEVBQWtDQyxRQUFsQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLGFBRkUsR0FFUyxZQUFNRCxRQUFOLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUlZQyxRQUpaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUlDLFNBSko7O0FBQUEsVUFNQUgsVUFBV0csSUFBWCxDQU5BO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxZQVVDQSxJQVZEOztBQUFBO0FBQUEsbUNBWUVELFFBWkY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImRyb3B3aGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIERyb3AgZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIHdoaWxlIHRoZSBjdXJyZW50IGVsZW1lbnQgc2F0aXNmaWVzIHRoZVxuICogaW5wdXQgcHJlZGljYXRlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSAtIFRoZSBpbnB1dCBwcmVkaWNhdGUuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBkcm9wd2hpbGUgKCBwcmVkaWNhdGUgLCBpdGVyYWJsZSApIHtcblxuXHRsZXQgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRmb3IgKCBsZXQgaXRlbSBvZiBpdGVyYXRvciApIHtcblxuXHRcdGlmICggcHJlZGljYXRlKCBpdGVtICkgKSBjb250aW51ZSA7XG5cblx0XHQvLyBlcXVpdmFsZW50IHRvIHJldHVybiBjaGFpbiggWyBbIGl0ZW0gXSAsIGl0ZXJhdG9yIF0gKSA7XG5cblx0XHR5aWVsZCBpdGVtIDtcblxuXHRcdHlpZWxkKiBpdGVyYXRvciA7XG5cblx0XHRyZXR1cm4gO1xuXG5cdH1cblxufVxuIl19