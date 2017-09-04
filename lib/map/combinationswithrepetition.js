'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.combinationswithrepetition = combinationswithrepetition;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(combinationswithrepetition);

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
	}, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY29tYmluYXRpb25zd2l0aHJlcGV0aXRpb24uanMiXSwibmFtZXMiOlsiY29tYmluYXRpb25zd2l0aHJlcGV0aXRpb24iLCJpdGVyYWJsZSIsInIiLCJwb29sIiwibGVuIiwibGVuZ3RoIiwiaW5kaWNlcyIsImkiLCJwaXZvdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFtQmlCQSwwQixHQUFBQSwwQjs7QUFuQmpCOzttREFtQmlCQSwwQjs7QUFqQmpCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxTQUFVQSwwQkFBVixDQUF1Q0MsUUFBdkMsRUFBa0RDLENBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxTQUZFLEdBRUssWUFBTUYsUUFBTixDQUZMO0FBR0ZHLFFBSEUsR0FHSUQsS0FBS0UsTUFIVDs7QUFBQSxXQUtERCxRQUFRLENBQVIsSUFBYUYsSUFBSSxDQUxoQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQU9GSSxZQVBFLEdBT1EsWUFBTSxlQUFTLENBQVQsRUFBYUosQ0FBYixDQUFOLENBUFI7QUFBQTtBQUFBLFlBU0EsWUFBTSxZQUFNQyxJQUFOLEVBQWFHLE9BQWIsQ0FBTixDQVRBOztBQUFBO0FBQUEsVUFXRSxJQVhGO0FBQUE7QUFBQTtBQUFBOztBQWFEQyxNQWJDLEdBYUdMLElBQUksQ0FiUDs7QUFBQTtBQUFBLFVBZUcsSUFmSDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxXQWlCQ0ssSUFBSSxDQWpCTDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLFdBbUJDRCxRQUFRQyxDQUFSLE1BQWVILE1BQU0sQ0FuQnRCO0FBQUE7QUFBQTtBQUFBOztBQXFCQ0ksVUFyQkQsR0FxQlMsRUFBRUYsUUFBUUMsQ0FBUixDQXJCWDs7O0FBdUJILFVBQU0sRUFBRUEsQ0FBUixFQUFZQSxJQUFJTCxDQUFoQixFQUFvQixFQUFFSyxDQUF0QjtBQUEwQkQsY0FBUUMsQ0FBUixJQUFhQyxLQUFiO0FBQTFCLE1BdkJHOztBQUFBOztBQTZCSixPQUFFRCxDQUFGOztBQTdCSTtBQUFBOztBQUFBO0FBQUE7QUFBQSxZQWlDQyxZQUFNLFlBQU1KLElBQU4sRUFBYUcsT0FBYixDQUFOLENBakNEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjb21iaW5hdGlvbnN3aXRocmVwZXRpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCBucmVwZWF0ICwgcGljayB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWWllbGRzIGFsbCBjb21iaW5hdGlvbnMsIHdpdGggcmVwZXRpdGlvbnMsIG9mIGVhY2ggcG9zc2libGUgY2hvaWNlIG9mXG4gKiA8Y29kZT5yPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEEgQiBDXG4gKiBjb21iaW5hdGlvbnN3aXRocmVwZXRpdGlvbignQUJDJywgMSlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gMDAgMDEgMDIgMTEgMTIgMjJcbiAqIGNvbWJpbmF0aW9uc3dpdGhyZXBldGl0aW9uKHJhbmdlKDMpLCAyKVxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgLSBUaGUgc2l6ZSBvZiB0aGUgY29tYmluYXRpb25zIHRvIGdlbmVyYXRlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogY29tYmluYXRpb25zd2l0aHJlcGV0aXRpb24gKCBpdGVyYWJsZSAsIHIgKSB7XG5cblx0bGV0IHBvb2wgPSBsaXN0KCBpdGVyYWJsZSApIDtcblx0bGV0IGxlbiA9IHBvb2wubGVuZ3RoIDtcblxuXHRpZiAoIGxlbiA9PT0gMCAmJiByID4gMCApIHJldHVybiA7XG5cblx0bGV0IGluZGljZXMgPSBsaXN0KCBucmVwZWF0KCAwICwgciApICkgO1xuXG5cdHlpZWxkIGxpc3QoIHBpY2soIHBvb2wgLCBpbmRpY2VzICkgKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0bGV0IGkgPSByIC0gMSA7XG5cblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdGlmICggaSA8IDAgKSByZXR1cm4gO1xuXG5cdFx0XHRpZiAoIGluZGljZXNbaV0gIT09IGxlbiAtIDEgKSB7XG5cblx0XHRcdFx0bGV0IHBpdm90ID0gKytpbmRpY2VzW2ldIDtcblxuXHRcdFx0XHRmb3IgKCArK2kgOyBpIDwgciA7ICsraSApIGluZGljZXNbaV0gPSBwaXZvdCA7XG5cblx0XHRcdFx0YnJlYWsgO1xuXG5cdFx0XHR9XG5cblx0XHRcdC0taSA7XG5cblx0XHR9XG5cblx0XHR5aWVsZCBsaXN0KCBwaWNrKCBwb29sICwgaW5kaWNlcyApICkgO1xuXG5cdH1cblxufVxuIl19