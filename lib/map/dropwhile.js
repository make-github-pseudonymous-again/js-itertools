'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dropwhile = dropwhile;

var _ = require('..');

/**
 * Drop elements of the input iterable while the current element satisfies the
 * input predicate.
 *
 * @param {Function} predicate - The input predicate.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function* dropwhile(predicate, iterable) {

	let iterator = (0, _.iter)(iterable);

	for (let item of iterator) {

		if (predicate(item)) continue;

		// equivalent to return chain( [ [ item ] , iterator ] ) ;

		yield item;

		yield* iterator;

		return;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZHJvcHdoaWxlLmpzIl0sIm5hbWVzIjpbImRyb3B3aGlsZSIsInByZWRpY2F0ZSIsIml0ZXJhYmxlIiwiaXRlcmF0b3IiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVpQkEsUyxHQUFBQSxTOztBQVZqQjs7QUFFQTs7Ozs7Ozs7QUFRTyxVQUFVQSxTQUFWLENBQXNCQyxTQUF0QixFQUFrQ0MsUUFBbEMsRUFBNkM7O0FBRW5ELEtBQUlDLFdBQVcsWUFBTUQsUUFBTixDQUFmOztBQUVBLE1BQU0sSUFBSUUsSUFBVixJQUFrQkQsUUFBbEIsRUFBNkI7O0FBRTVCLE1BQUtGLFVBQVdHLElBQVgsQ0FBTCxFQUF5Qjs7QUFFekI7O0FBRUEsUUFBTUEsSUFBTjs7QUFFQSxTQUFPRCxRQUFQOztBQUVBO0FBRUE7QUFFRCIsImZpbGUiOiJkcm9wd2hpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBEcm9wIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSB3aGlsZSB0aGUgY3VycmVudCBlbGVtZW50IHNhdGlzZmllcyB0aGVcbiAqIGlucHV0IHByZWRpY2F0ZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgLSBUaGUgaW5wdXQgcHJlZGljYXRlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZHJvcHdoaWxlICggcHJlZGljYXRlICwgaXRlcmFibGUgKSB7XG5cblx0bGV0IGl0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmF0b3IgKSB7XG5cblx0XHRpZiAoIHByZWRpY2F0ZSggaXRlbSApICkgY29udGludWUgO1xuXG5cdFx0Ly8gZXF1aXZhbGVudCB0byByZXR1cm4gY2hhaW4oIFsgWyBpdGVtIF0gLCBpdGVyYXRvciBdICkgO1xuXG5cdFx0eWllbGQgaXRlbSA7XG5cblx0XHR5aWVsZCogaXRlcmF0b3IgO1xuXG5cdFx0cmV0dXJuIDtcblxuXHR9XG5cbn1cbiJdfQ==