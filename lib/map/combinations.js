'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.combinations = combinations;

var _ = require('..');

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
function* combinations(iterable, r) {

	let pool = (0, _.list)(iterable);
	let len = pool.length;

	if (r > len) return;

	let indices = (0, _.list)((0, _.range)(0, r, 1));

	yield (0, _.list)((0, _.pick)(pool, indices));

	while (true) {

		let i = r - 1;

		while (true) {

			if (i < 0) return;

			if (indices[i] !== i + len - r) {

				let pivot = ++indices[i];

				for (++i; i < r; ++i) indices[i] = ++pivot;

				break;
			}

			--i;
		}

		yield (0, _.list)((0, _.pick)(pool, indices));
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY29tYmluYXRpb25zLmpzIl0sIm5hbWVzIjpbImNvbWJpbmF0aW9ucyIsIml0ZXJhYmxlIiwiciIsInBvb2wiLCJsZW4iLCJsZW5ndGgiLCJpbmRpY2VzIiwiaSIsInBpdm90Il0sIm1hcHBpbmdzIjoiOzs7OztRQWtCaUJBLFksR0FBQUEsWTs7QUFsQmpCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFVBQVVBLFlBQVYsQ0FBeUJDLFFBQXpCLEVBQW9DQyxDQUFwQyxFQUF3Qzs7QUFFOUMsS0FBSUMsT0FBTyxZQUFNRixRQUFOLENBQVg7QUFDQSxLQUFJRyxNQUFNRCxLQUFLRSxNQUFmOztBQUVBLEtBQUtILElBQUlFLEdBQVQsRUFBZTs7QUFFZixLQUFJRSxVQUFVLFlBQU0sYUFBTyxDQUFQLEVBQVdKLENBQVgsRUFBZSxDQUFmLENBQU4sQ0FBZDs7QUFFQSxPQUFNLFlBQU0sWUFBTUMsSUFBTixFQUFhRyxPQUFiLENBQU4sQ0FBTjs7QUFFQSxRQUFRLElBQVIsRUFBZTs7QUFFZCxNQUFJQyxJQUFJTCxJQUFJLENBQVo7O0FBRUEsU0FBUSxJQUFSLEVBQWU7O0FBRWQsT0FBS0ssSUFBSSxDQUFULEVBQWE7O0FBRWIsT0FBS0QsUUFBUUMsQ0FBUixNQUFlQSxJQUFJSCxHQUFKLEdBQVVGLENBQTlCLEVBQWtDOztBQUVqQyxRQUFJTSxRQUFRLEVBQUVGLFFBQVFDLENBQVIsQ0FBZDs7QUFFQSxTQUFNLEVBQUVBLENBQVIsRUFBWUEsSUFBSUwsQ0FBaEIsRUFBb0IsRUFBRUssQ0FBdEIsRUFBMEJELFFBQVFDLENBQVIsSUFBYSxFQUFFQyxLQUFmOztBQUUxQjtBQUVBOztBQUVELEtBQUVELENBQUY7QUFFQTs7QUFFRCxRQUFNLFlBQU0sWUFBTUosSUFBTixFQUFhRyxPQUFiLENBQU4sQ0FBTjtBQUVBO0FBRUQiLCJmaWxlIjoiY29tYmluYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIHJhbmdlICwgcGljayB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWWllbGRzIGFsbCBjb21iaW5hdGlvbnMgb2YgZWFjaCBwb3NzaWJsZSBjaG9pY2Ugb2YgPGNvZGU+cjwvY29kZT4gZWxlbWVudHNcbiAqIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQUIgQUMgQUQgQkMgQkQgQ0RcbiAqIGNvbWJpbmF0aW9ucygnQUJDRCcsIDIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIDAxMiAwMTMgMDIzIDEyM1xuICogY29tYmluYXRpb25zKHJhbmdlKDQpLCAzKVxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgLSBUaGUgc2l6ZSBvZiB0aGUgY29tYmluYXRpb25zIHRvIGdlbmVyYXRlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIGNvbWJpbmF0aW9ucyAoIGl0ZXJhYmxlICwgciApIHtcblxuXHRsZXQgcG9vbCA9IGxpc3QoIGl0ZXJhYmxlICkgO1xuXHRsZXQgbGVuID0gcG9vbC5sZW5ndGggO1xuXG5cdGlmICggciA+IGxlbiApIHJldHVybiA7XG5cblx0bGV0IGluZGljZXMgPSBsaXN0KCByYW5nZSggMCAsIHIgLCAxICkgKSA7XG5cblx0eWllbGQgbGlzdCggcGljayggcG9vbCAsIGluZGljZXMgKSApIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgaSA9IHIgLSAxIDtcblxuXHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0aWYgKCBpIDwgMCApIHJldHVybiA7XG5cblx0XHRcdGlmICggaW5kaWNlc1tpXSAhPT0gaSArIGxlbiAtIHIgKSB7XG5cblx0XHRcdFx0bGV0IHBpdm90ID0gKytpbmRpY2VzW2ldIDtcblxuXHRcdFx0XHRmb3IgKCArK2kgOyBpIDwgciA7ICsraSApIGluZGljZXNbaV0gPSArK3Bpdm90IDtcblxuXHRcdFx0XHRicmVhayA7XG5cblx0XHRcdH1cblxuXHRcdFx0LS1pIDtcblxuXHRcdH1cblxuXHRcdHlpZWxkIGxpc3QoIHBpY2soIHBvb2wgLCBpbmRpY2VzICkgKSA7XG5cblx0fVxuXG59XG4iXX0=