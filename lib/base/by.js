'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.by = by;

var _iter = require('./iter');

var _range = require('./range');

/**
 * Yields elements of the input iterable by grouping them into tuples of a
 * given size.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The size of the yielded tuples.
 * @returns {Iterator}
 */
function* by(iterable, n) {

	const iterator = (0, _iter.iter)(iterable);

	while (true) {

		const tuple = [];

		for (const i of (0, _range.range)(n)) {

			const current = iterator.next();

			if (current.done) {

				if (i === 0) return;

				for (const j of (0, _range.range)(n - i)) tuple.push(undefined);

				yield tuple;

				return;
			}

			tuple.push(current.value);
		}

		yield tuple;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2J5LmpzIl0sIm5hbWVzIjpbImJ5IiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJ0dXBsZSIsImkiLCJjdXJyZW50IiwibmV4dCIsImRvbmUiLCJqIiwicHVzaCIsInVuZGVmaW5lZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsRSxHQUFBQSxFOztBQVhqQjs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRTyxVQUFVQSxFQUFWLENBQWVDLFFBQWYsRUFBMEJDLENBQTFCLEVBQThCOztBQUVwQyxPQUFNQyxXQUFXLGdCQUFNRixRQUFOLENBQWpCOztBQUVBLFFBQVEsSUFBUixFQUFlOztBQUVkLFFBQU1HLFFBQVEsRUFBZDs7QUFFQSxPQUFNLE1BQU1DLENBQVosSUFBaUIsa0JBQU9ILENBQVAsQ0FBakIsRUFBOEI7O0FBRTdCLFNBQU1JLFVBQVVILFNBQVNJLElBQVQsRUFBaEI7O0FBRUEsT0FBS0QsUUFBUUUsSUFBYixFQUFvQjs7QUFFbkIsUUFBS0gsTUFBTSxDQUFYLEVBQWU7O0FBRWYsU0FBTSxNQUFNSSxDQUFaLElBQWlCLGtCQUFPUCxJQUFJRyxDQUFYLENBQWpCLEVBQWtDRCxNQUFNTSxJQUFOLENBQVlDLFNBQVo7O0FBRWxDLFVBQU1QLEtBQU47O0FBRUE7QUFFQTs7QUFFREEsU0FBTU0sSUFBTixDQUFZSixRQUFRTSxLQUFwQjtBQUVBOztBQUVELFFBQU1SLEtBQU47QUFFQTtBQUVEIiwiZmlsZSI6ImJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuL3JhbmdlJyA7XG5cbi8qKlxuICogWWllbGRzIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBieSBncm91cGluZyB0aGVtIGludG8gdHVwbGVzIG9mIGFcbiAqIGdpdmVuIHNpemUuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBzaXplIG9mIHRoZSB5aWVsZGVkIHR1cGxlcy5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBieSAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IHR1cGxlID0gWyBdIDtcblxuXHRcdGZvciAoIGNvbnN0IGkgb2YgcmFuZ2UoIG4gKSApIHtcblxuXHRcdFx0Y29uc3QgY3VycmVudCA9IGl0ZXJhdG9yLm5leHQoICkgO1xuXG5cdFx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHtcblxuXHRcdFx0XHRpZiAoIGkgPT09IDAgKSByZXR1cm4gO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IGogb2YgcmFuZ2UoIG4gLSBpICkgKSB0dXBsZS5wdXNoKCB1bmRlZmluZWQgKSA7XG5cblx0XHRcdFx0eWllbGQgdHVwbGUgO1xuXG5cdFx0XHRcdHJldHVybiA7XG5cblx0XHRcdH1cblxuXHRcdFx0dHVwbGUucHVzaCggY3VycmVudC52YWx1ZSApIDtcblxuXHRcdH1cblxuXHRcdHlpZWxkIHR1cGxlIDtcblxuXHR9XG5cbn1cbiJdfQ==