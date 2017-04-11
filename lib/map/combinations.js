'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.combinations = combinations;

var _ = require('..');

var _marked = [combinations].map(regeneratorRuntime.mark);

/**
 * Yields all combinations of each possible choice of <code>r</code> elements
 * of the input iterable.
 *
 * @example
 * // AB AC AD BC BD CD
 * combinations('ABCD', 2)
 *
 * @example
 * // 012 013 023 123
 * combinations(range(4), 3)
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} r - The size of the combinations to generate.
 * @returns {Iterator}
 */
function combinations(iterable, r) {
	var pool, len, indices, i, pivot;
	return regeneratorRuntime.wrap(function combinations$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					pool = (0, _.list)(iterable);
					len = pool.length;

					if (!(r > len)) {
						_context.next = 4;
						break;
					}

					return _context.abrupt('return');

				case 4:
					indices = (0, _.list)((0, _.range)(0, r, 1));
					_context.next = 7;
					return (0, _.list)((0, _.pick)(pool, indices));

				case 7:
					if (!true) {
						_context.next = 23;
						break;
					}

					i = r - 1;

				case 9:
					if (!true) {
						_context.next = 19;
						break;
					}

					if (!(i < 0)) {
						_context.next = 12;
						break;
					}

					return _context.abrupt('return');

				case 12:
					if (!(indices[i] !== i + len - r)) {
						_context.next = 16;
						break;
					}

					pivot = ++indices[i];


					for (++i; i < r; ++i) {
						indices[i] = ++pivot;
					}return _context.abrupt('break', 19);

				case 16:

					--i;

					_context.next = 9;
					break;

				case 19:
					_context.next = 21;
					return (0, _.list)((0, _.pick)(pool, indices));

				case 21:
					_context.next = 7;
					break;

				case 23:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY29tYmluYXRpb25zLmpzIl0sIm5hbWVzIjpbImNvbWJpbmF0aW9ucyIsIml0ZXJhYmxlIiwiciIsInBvb2wiLCJsZW4iLCJsZW5ndGgiLCJpbmRpY2VzIiwiaSIsInBpdm90Il0sIm1hcHBpbmdzIjoiOzs7OztRQWtCaUJBLFksR0FBQUEsWTs7QUFsQmpCOztlQWtCaUJBLFk7O0FBaEJqQjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxTQUFVQSxZQUFWLENBQXlCQyxRQUF6QixFQUFvQ0MsQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLFNBRkUsR0FFSyxZQUFNRixRQUFOLENBRkw7QUFHRkcsUUFIRSxHQUdJRCxLQUFLRSxNQUhUOztBQUFBLFdBS0RILElBQUlFLEdBTEg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFPRkUsWUFQRSxHQU9RLFlBQU0sYUFBTyxDQUFQLEVBQVdKLENBQVgsRUFBZSxDQUFmLENBQU4sQ0FQUjtBQUFBO0FBQUEsWUFTQSxZQUFNLFlBQU1DLElBQU4sRUFBYUcsT0FBYixDQUFOLENBVEE7O0FBQUE7QUFBQSxVQVdFLElBWEY7QUFBQTtBQUFBO0FBQUE7O0FBYURDLE1BYkMsR0FhR0wsSUFBSSxDQWJQOztBQUFBO0FBQUEsVUFlRyxJQWZIO0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBaUJDSyxJQUFJLENBakJMO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsV0FtQkNELFFBQVFDLENBQVIsTUFBZUEsSUFBSUgsR0FBSixHQUFVRixDQW5CMUI7QUFBQTtBQUFBO0FBQUE7O0FBcUJDTSxVQXJCRCxHQXFCUyxFQUFFRixRQUFRQyxDQUFSLENBckJYOzs7QUF1QkgsVUFBTSxFQUFFQSxDQUFSLEVBQVlBLElBQUlMLENBQWhCLEVBQW9CLEVBQUVLLENBQXRCO0FBQTBCRCxjQUFRQyxDQUFSLElBQWEsRUFBRUMsS0FBZjtBQUExQixNQXZCRzs7QUFBQTs7QUE2QkosT0FBRUQsQ0FBRjs7QUE3Qkk7QUFBQTs7QUFBQTtBQUFBO0FBQUEsWUFpQ0MsWUFBTSxZQUFNSixJQUFOLEVBQWFHLE9BQWIsQ0FBTixDQWpDRDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY29tYmluYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIHJhbmdlICwgcGljayB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWWllbGRzIGFsbCBjb21iaW5hdGlvbnMgb2YgZWFjaCBwb3NzaWJsZSBjaG9pY2Ugb2YgPGNvZGU+cjwvY29kZT4gZWxlbWVudHNcbiAqIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQUIgQUMgQUQgQkMgQkQgQ0RcbiAqIGNvbWJpbmF0aW9ucygnQUJDRCcsIDIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIDAxMiAwMTMgMDIzIDEyM1xuICogY29tYmluYXRpb25zKHJhbmdlKDQpLCAzKVxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgLSBUaGUgc2l6ZSBvZiB0aGUgY29tYmluYXRpb25zIHRvIGdlbmVyYXRlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIGNvbWJpbmF0aW9ucyAoIGl0ZXJhYmxlICwgciApIHtcblxuXHRsZXQgcG9vbCA9IGxpc3QoIGl0ZXJhYmxlICkgO1xuXHRsZXQgbGVuID0gcG9vbC5sZW5ndGggO1xuXG5cdGlmICggciA+IGxlbiApIHJldHVybiA7XG5cblx0bGV0IGluZGljZXMgPSBsaXN0KCByYW5nZSggMCAsIHIgLCAxICkgKSA7XG5cblx0eWllbGQgbGlzdCggcGljayggcG9vbCAsIGluZGljZXMgKSApIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgaSA9IHIgLSAxIDtcblxuXHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0aWYgKCBpIDwgMCApIHJldHVybiA7XG5cblx0XHRcdGlmICggaW5kaWNlc1tpXSAhPT0gaSArIGxlbiAtIHIgKSB7XG5cblx0XHRcdFx0bGV0IHBpdm90ID0gKytpbmRpY2VzW2ldIDtcblxuXHRcdFx0XHRmb3IgKCArK2kgOyBpIDwgciA7ICsraSApIGluZGljZXNbaV0gPSArK3Bpdm90IDtcblxuXHRcdFx0XHRicmVhayA7XG5cblx0XHRcdH1cblxuXHRcdFx0LS1pIDtcblxuXHRcdH1cblxuXHRcdHlpZWxkIGxpc3QoIHBpY2soIHBvb2wgLCBpbmRpY2VzICkgKSA7XG5cblx0fVxuXG59XG4iXX0=