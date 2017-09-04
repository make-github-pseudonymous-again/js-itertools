'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.combinations = combinations;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(combinations);

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
	}, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY29tYmluYXRpb25zLmpzIl0sIm5hbWVzIjpbImNvbWJpbmF0aW9ucyIsIml0ZXJhYmxlIiwiciIsInBvb2wiLCJsZW4iLCJsZW5ndGgiLCJpbmRpY2VzIiwiaSIsInBpdm90Il0sIm1hcHBpbmdzIjoiOzs7OztRQWtCaUJBLFksR0FBQUEsWTs7QUFsQmpCOzttREFrQmlCQSxZOztBQWhCakI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sU0FBVUEsWUFBVixDQUF5QkMsUUFBekIsRUFBb0NDLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxTQUZFLEdBRUssWUFBTUYsUUFBTixDQUZMO0FBR0ZHLFFBSEUsR0FHSUQsS0FBS0UsTUFIVDs7QUFBQSxXQUtESCxJQUFJRSxHQUxIO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBT0ZFLFlBUEUsR0FPUSxZQUFNLGFBQU8sQ0FBUCxFQUFXSixDQUFYLEVBQWUsQ0FBZixDQUFOLENBUFI7QUFBQTtBQUFBLFlBU0EsWUFBTSxZQUFNQyxJQUFOLEVBQWFHLE9BQWIsQ0FBTixDQVRBOztBQUFBO0FBQUEsVUFXRSxJQVhGO0FBQUE7QUFBQTtBQUFBOztBQWFEQyxNQWJDLEdBYUdMLElBQUksQ0FiUDs7QUFBQTtBQUFBLFVBZUcsSUFmSDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxXQWlCQ0ssSUFBSSxDQWpCTDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLFdBbUJDRCxRQUFRQyxDQUFSLE1BQWVBLElBQUlILEdBQUosR0FBVUYsQ0FuQjFCO0FBQUE7QUFBQTtBQUFBOztBQXFCQ00sVUFyQkQsR0FxQlMsRUFBRUYsUUFBUUMsQ0FBUixDQXJCWDs7O0FBdUJILFVBQU0sRUFBRUEsQ0FBUixFQUFZQSxJQUFJTCxDQUFoQixFQUFvQixFQUFFSyxDQUF0QjtBQUEwQkQsY0FBUUMsQ0FBUixJQUFhLEVBQUVDLEtBQWY7QUFBMUIsTUF2Qkc7O0FBQUE7O0FBNkJKLE9BQUVELENBQUY7O0FBN0JJO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBaUNDLFlBQU0sWUFBTUosSUFBTixFQUFhRyxPQUFiLENBQU4sQ0FqQ0Q7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNvbWJpbmF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCByYW5nZSAsIHBpY2sgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIFlpZWxkcyBhbGwgY29tYmluYXRpb25zIG9mIGVhY2ggcG9zc2libGUgY2hvaWNlIG9mIDxjb2RlPnI8L2NvZGU+IGVsZW1lbnRzXG4gKiBvZiB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFCIEFDIEFEIEJDIEJEIENEXG4gKiBjb21iaW5hdGlvbnMoJ0FCQ0QnLCAyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyAwMTIgMDEzIDAyMyAxMjNcbiAqIGNvbWJpbmF0aW9ucyhyYW5nZSg0KSwgMylcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSByIC0gVGhlIHNpemUgb2YgdGhlIGNvbWJpbmF0aW9ucyB0byBnZW5lcmF0ZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBjb21iaW5hdGlvbnMgKCBpdGVyYWJsZSAsIHIgKSB7XG5cblx0bGV0IHBvb2wgPSBsaXN0KCBpdGVyYWJsZSApIDtcblx0bGV0IGxlbiA9IHBvb2wubGVuZ3RoIDtcblxuXHRpZiAoIHIgPiBsZW4gKSByZXR1cm4gO1xuXG5cdGxldCBpbmRpY2VzID0gbGlzdCggcmFuZ2UoIDAgLCByICwgMSApICkgO1xuXG5cdHlpZWxkIGxpc3QoIHBpY2soIHBvb2wgLCBpbmRpY2VzICkgKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0bGV0IGkgPSByIC0gMSA7XG5cblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdGlmICggaSA8IDAgKSByZXR1cm4gO1xuXG5cdFx0XHRpZiAoIGluZGljZXNbaV0gIT09IGkgKyBsZW4gLSByICkge1xuXG5cdFx0XHRcdGxldCBwaXZvdCA9ICsraW5kaWNlc1tpXSA7XG5cblx0XHRcdFx0Zm9yICggKytpIDsgaSA8IHIgOyArK2kgKSBpbmRpY2VzW2ldID0gKytwaXZvdCA7XG5cblx0XHRcdFx0YnJlYWsgO1xuXG5cdFx0XHR9XG5cblx0XHRcdC0taSA7XG5cblx0XHR9XG5cblx0XHR5aWVsZCBsaXN0KCBwaWNrKCBwb29sICwgaW5kaWNlcyApICkgO1xuXG5cdH1cblxufVxuIl19