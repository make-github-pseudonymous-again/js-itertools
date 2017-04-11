'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.slice = slice;

var _ = require('..');

var _marked = [slice].map(regeneratorRuntime.mark);

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
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvc2xpY2UuanMiXSwibmFtZXMiOlsic2xpY2UiLCJpdGVyYWJsZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwiY3VycmVudCIsInZhbHVlIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFhaUJBLEssR0FBQUEsSzs7QUFiakI7O2VBYWlCQSxLOztBQVhqQjs7Ozs7Ozs7Ozs7QUFXTyxTQUFVQSxLQUFWLENBQWtCQyxRQUFsQixFQUE2QkMsS0FBN0IsRUFBcUNDLElBQXJDLEVBQTRDQyxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRkMsYUFGRSxHQUVTLFlBQU1KLFFBQU4sQ0FGVDs7QUFBQTtBQUFBLFdBSUVDLFFBQVEsQ0FKVjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxVQU1BRyxTQUFTQyxJQUFULEdBQWdCQyxJQU5oQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFRTCxPQUFFTCxLQUFGO0FBQ0EsT0FBRUMsSUFBRjs7QUFUSztBQUFBOztBQUFBO0FBQUEsV0FhRUEsT0FBTyxDQWJUO0FBQUE7QUFBQTtBQUFBOztBQWVESyxZQWZDLEdBZVNILFNBQVNDLElBQVQsRUFmVDs7QUFBQSxVQWlCQUUsUUFBUUQsSUFqQlI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBbUJDQyxRQUFRQyxLQW5CVDs7QUFBQTs7QUFxQkwsT0FBRU4sSUFBRjs7QUFFSU8sTUF2QkMsR0F1QkdOLElBdkJIOztBQUFBO0FBQUEsV0F5QkdNLElBQUksQ0F6QlA7QUFBQTtBQUFBO0FBQUE7O0FBQUEsVUEyQkNMLFNBQVNDLElBQVQsR0FBZ0JDLElBM0JqQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUE2QkosT0FBRUcsQ0FBRjs7QUE3Qkk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic2xpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBTYW1lIGFzXG4gKiA8Y29kZT5tYXAoIFsgaSAsIHggXSA9PiB4ICwgZmlsdGVyKCBbIGkgLCB4IF0gPT4gKG5ldyBTZXQoIHJhbmdlKCBzdGFydCAsXG4gKiBzdG9wICwgc3RlcCApICkgKS5oYXMoIGkgKSAsIGVudW1lcmF0ZSggaXRlcmFibGUgKSApICk7PC9jb2RlPi5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCAtIFdoZXJlIHRvIHN0YXJ0IHRoZSBzbGljZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzdG9wIC0gV2hlcmUgdG8gc3RvcCB0aGUgc2xpY2UuXG4gKiBAcGFyYW0ge051bWJlcn0gc3RlcCAtIFRoZSBzdGVwIG9mIHRoZSBzbGljZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBzbGljZSAoIGl0ZXJhYmxlICwgc3RhcnQgLCBzdG9wICwgc3RlcCApIHtcblxuXHRsZXQgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHR3aGlsZSAoIHN0YXJ0ID4gMCApIHtcblxuXHRcdGlmICggaXRlcmF0b3IubmV4dCgpLmRvbmUgKSByZXR1cm4gO1xuXG5cdFx0LS1zdGFydCA7XG5cdFx0LS1zdG9wIDtcblxuXHR9XG5cblx0d2hpbGUgKCBzdG9wID4gMCApIHtcblxuXHRcdGxldCBjdXJyZW50ID0gaXRlcmF0b3IubmV4dCgpIDtcblxuXHRcdGlmICggY3VycmVudC5kb25lICkgcmV0dXJuIDtcblxuXHRcdHlpZWxkIGN1cnJlbnQudmFsdWUgO1xuXG5cdFx0LS1zdG9wIDtcblxuXHRcdGxldCBuID0gc3RlcCA7XG5cblx0XHR3aGlsZSAoIG4gPiAxICkge1xuXG5cdFx0XHRpZiAoIGl0ZXJhdG9yLm5leHQoKS5kb25lICkgcmV0dXJuIDtcblxuXHRcdFx0LS1uIDtcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==