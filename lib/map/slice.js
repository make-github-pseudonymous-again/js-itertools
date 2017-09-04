'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.slice = slice;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(slice);

/**
 * Same as
 * <code>map( [ i , x ] => x , filter( [ i , x ] => (new Set( range( start ,
 * stop , step ) ) ).has( i ) , enumerate( iterable ) ) );</code>.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} start - Where to start the slice.
 * @param {Number} stop - Where to stop the slice.
 * @param {Number} step - The step of the slice.
 * @returns {Iterator}
 */
function slice(iterable, start, stop, step) {
	var iterator, current, n;
	return regeneratorRuntime.wrap(function slice$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					iterator = (0, _.iter)(iterable);

				case 1:
					if (!(start > 0)) {
						_context.next = 8;
						break;
					}

					if (!iterator.next().done) {
						_context.next = 4;
						break;
					}

					return _context.abrupt('return');

				case 4:

					--start;
					--stop;

					_context.next = 1;
					break;

				case 8:
					if (!(stop > 0)) {
						_context.next = 24;
						break;
					}

					current = iterator.next();

					if (!current.done) {
						_context.next = 12;
						break;
					}

					return _context.abrupt('return');

				case 12:
					_context.next = 14;
					return current.value;

				case 14:

					--stop;

					n = step;

				case 16:
					if (!(n > 1)) {
						_context.next = 22;
						break;
					}

					if (!iterator.next().done) {
						_context.next = 19;
						break;
					}

					return _context.abrupt('return');

				case 19:

					--n;

					_context.next = 16;
					break;

				case 22:
					_context.next = 8;
					break;

				case 24:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvc2xpY2UuanMiXSwibmFtZXMiOlsic2xpY2UiLCJpdGVyYWJsZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwiY3VycmVudCIsInZhbHVlIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFhaUJBLEssR0FBQUEsSzs7QUFiakI7O21EQWFpQkEsSzs7QUFYakI7Ozs7Ozs7Ozs7O0FBV08sU0FBVUEsS0FBVixDQUFrQkMsUUFBbEIsRUFBNkJDLEtBQTdCLEVBQXFDQyxJQUFyQyxFQUE0Q0MsSUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLGFBRkUsR0FFUyxZQUFNSixRQUFOLENBRlQ7O0FBQUE7QUFBQSxXQUlFQyxRQUFRLENBSlY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsVUFNQUcsU0FBU0MsSUFBVCxHQUFnQkMsSUFOaEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBUUwsT0FBRUwsS0FBRjtBQUNBLE9BQUVDLElBQUY7O0FBVEs7QUFBQTs7QUFBQTtBQUFBLFdBYUVBLE9BQU8sQ0FiVDtBQUFBO0FBQUE7QUFBQTs7QUFlREssWUFmQyxHQWVTSCxTQUFTQyxJQUFULEVBZlQ7O0FBQUEsVUFpQkFFLFFBQVFELElBakJSO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxZQW1CQ0MsUUFBUUMsS0FuQlQ7O0FBQUE7O0FBcUJMLE9BQUVOLElBQUY7O0FBRUlPLE1BdkJDLEdBdUJHTixJQXZCSDs7QUFBQTtBQUFBLFdBeUJHTSxJQUFJLENBekJQO0FBQUE7QUFBQTtBQUFBOztBQUFBLFVBMkJDTCxTQUFTQyxJQUFULEdBQWdCQyxJQTNCakI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBNkJKLE9BQUVHLENBQUY7O0FBN0JJO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InNsaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogU2FtZSBhc1xuICogPGNvZGU+bWFwKCBbIGkgLCB4IF0gPT4geCAsIGZpbHRlciggWyBpICwgeCBdID0+IChuZXcgU2V0KCByYW5nZSggc3RhcnQgLFxuICogc3RvcCAsIHN0ZXAgKSApICkuaGFzKCBpICkgLCBlbnVtZXJhdGUoIGl0ZXJhYmxlICkgKSApOzwvY29kZT4uXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgLSBXaGVyZSB0byBzdGFydCB0aGUgc2xpY2UuXG4gKiBAcGFyYW0ge051bWJlcn0gc3RvcCAtIFdoZXJlIHRvIHN0b3AgdGhlIHNsaWNlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgc3RlcCBvZiB0aGUgc2xpY2UuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogc2xpY2UgKCBpdGVyYWJsZSAsIHN0YXJ0ICwgc3RvcCAsIHN0ZXAgKSB7XG5cblx0bGV0IGl0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0d2hpbGUgKCBzdGFydCA+IDAgKSB7XG5cblx0XHRpZiAoIGl0ZXJhdG9yLm5leHQoKS5kb25lICkgcmV0dXJuIDtcblxuXHRcdC0tc3RhcnQgO1xuXHRcdC0tc3RvcCA7XG5cblx0fVxuXG5cdHdoaWxlICggc3RvcCA+IDAgKSB7XG5cblx0XHRsZXQgY3VycmVudCA9IGl0ZXJhdG9yLm5leHQoKSA7XG5cblx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHJldHVybiA7XG5cblx0XHR5aWVsZCBjdXJyZW50LnZhbHVlIDtcblxuXHRcdC0tc3RvcCA7XG5cblx0XHRsZXQgbiA9IHN0ZXAgO1xuXG5cdFx0d2hpbGUgKCBuID4gMSApIHtcblxuXHRcdFx0aWYgKCBpdGVyYXRvci5uZXh0KCkuZG9uZSApIHJldHVybiA7XG5cblx0XHRcdC0tbiA7XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=