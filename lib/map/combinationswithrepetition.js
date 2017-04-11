'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.combinationswithrepetition = combinationswithrepetition;

var _ = require('..');

var _marked = [combinationswithrepetition].map(regeneratorRuntime.mark);

/**
 * Yields all combinations, with repetitions, of each possible choice of
 * <code>r</code> elements of the input iterable.
 *
 * @example
 * // A B C
 * combinationswithrepetition('ABC', 1)
 *
 * @example
 * // 00 01 02 11 12 22
 * combinationswithrepetition(range(3), 2)
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} r - The size of the combinations to generate.
 * @returns {Iterator}
 */

function combinationswithrepetition(iterable, r) {
	var pool, len, indices, i, pivot;
	return regeneratorRuntime.wrap(function combinationswithrepetition$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					pool = (0, _.list)(iterable);
					len = pool.length;

					if (!(len === 0 && r > 0)) {
						_context.next = 4;
						break;
					}

					return _context.abrupt('return');

				case 4:
					indices = (0, _.list)((0, _.nrepeat)(0, r));
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
					if (!(indices[i] !== len - 1)) {
						_context.next = 16;
						break;
					}

					pivot = ++indices[i];


					for (++i; i < r; ++i) {
						indices[i] = pivot;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY29tYmluYXRpb25zd2l0aHJlcGV0aXRpb24uanMiXSwibmFtZXMiOlsiY29tYmluYXRpb25zd2l0aHJlcGV0aXRpb24iLCJpdGVyYWJsZSIsInIiLCJwb29sIiwibGVuIiwibGVuZ3RoIiwiaW5kaWNlcyIsImkiLCJwaXZvdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFtQmlCQSwwQixHQUFBQSwwQjs7QUFuQmpCOztlQW1CaUJBLDBCOztBQWpCakI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFNBQVVBLDBCQUFWLENBQXVDQyxRQUF2QyxFQUFrREMsQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLFNBRkUsR0FFSyxZQUFNRixRQUFOLENBRkw7QUFHRkcsUUFIRSxHQUdJRCxLQUFLRSxNQUhUOztBQUFBLFdBS0RELFFBQVEsQ0FBUixJQUFhRixJQUFJLENBTGhCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBT0ZJLFlBUEUsR0FPUSxZQUFNLGVBQVMsQ0FBVCxFQUFhSixDQUFiLENBQU4sQ0FQUjtBQUFBO0FBQUEsWUFTQSxZQUFNLFlBQU1DLElBQU4sRUFBYUcsT0FBYixDQUFOLENBVEE7O0FBQUE7QUFBQSxVQVdFLElBWEY7QUFBQTtBQUFBO0FBQUE7O0FBYURDLE1BYkMsR0FhR0wsSUFBSSxDQWJQOztBQUFBO0FBQUEsVUFlRyxJQWZIO0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBaUJDSyxJQUFJLENBakJMO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsV0FtQkNELFFBQVFDLENBQVIsTUFBZUgsTUFBTSxDQW5CdEI7QUFBQTtBQUFBO0FBQUE7O0FBcUJDSSxVQXJCRCxHQXFCUyxFQUFFRixRQUFRQyxDQUFSLENBckJYOzs7QUF1QkgsVUFBTSxFQUFFQSxDQUFSLEVBQVlBLElBQUlMLENBQWhCLEVBQW9CLEVBQUVLLENBQXRCO0FBQTBCRCxjQUFRQyxDQUFSLElBQWFDLEtBQWI7QUFBMUIsTUF2Qkc7O0FBQUE7O0FBNkJKLE9BQUVELENBQUY7O0FBN0JJO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBaUNDLFlBQU0sWUFBTUosSUFBTixFQUFhRyxPQUFiLENBQU4sQ0FqQ0Q7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNvbWJpbmF0aW9uc3dpdGhyZXBldGl0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIG5yZXBlYXQgLCBwaWNrIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBZaWVsZHMgYWxsIGNvbWJpbmF0aW9ucywgd2l0aCByZXBldGl0aW9ucywgb2YgZWFjaCBwb3NzaWJsZSBjaG9pY2Ugb2ZcbiAqIDxjb2RlPnI8L2NvZGU+IGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQSBCIENcbiAqIGNvbWJpbmF0aW9uc3dpdGhyZXBldGl0aW9uKCdBQkMnLCAxKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyAwMCAwMSAwMiAxMSAxMiAyMlxuICogY29tYmluYXRpb25zd2l0aHJlcGV0aXRpb24ocmFuZ2UoMyksIDIpXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gciAtIFRoZSBzaXplIG9mIHRoZSBjb21iaW5hdGlvbnMgdG8gZ2VuZXJhdGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBjb21iaW5hdGlvbnN3aXRocmVwZXRpdGlvbiAoIGl0ZXJhYmxlICwgciApIHtcblxuXHRsZXQgcG9vbCA9IGxpc3QoIGl0ZXJhYmxlICkgO1xuXHRsZXQgbGVuID0gcG9vbC5sZW5ndGggO1xuXG5cdGlmICggbGVuID09PSAwICYmIHIgPiAwICkgcmV0dXJuIDtcblxuXHRsZXQgaW5kaWNlcyA9IGxpc3QoIG5yZXBlYXQoIDAgLCByICkgKSA7XG5cblx0eWllbGQgbGlzdCggcGljayggcG9vbCAsIGluZGljZXMgKSApIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgaSA9IHIgLSAxIDtcblxuXHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0aWYgKCBpIDwgMCApIHJldHVybiA7XG5cblx0XHRcdGlmICggaW5kaWNlc1tpXSAhPT0gbGVuIC0gMSApIHtcblxuXHRcdFx0XHRsZXQgcGl2b3QgPSArK2luZGljZXNbaV0gO1xuXG5cdFx0XHRcdGZvciAoICsraSA7IGkgPCByIDsgKytpICkgaW5kaWNlc1tpXSA9IHBpdm90IDtcblxuXHRcdFx0XHRicmVhayA7XG5cblx0XHRcdH1cblxuXHRcdFx0LS1pIDtcblxuXHRcdH1cblxuXHRcdHlpZWxkIGxpc3QoIHBpY2soIHBvb2wgLCBpbmRpY2VzICkgKSA7XG5cblx0fVxuXG59XG4iXX0=