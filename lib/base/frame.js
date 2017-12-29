'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.frame = frame;

var _iter = require('./iter');

var _range = require('./range');

/**
 * Yields tuples that contain the current element of the input iterable and the
 * next <code>n-1</code> elements of the input iterable.
 *
 * @example
 * frame( range( 100 ) , 2 ) ;
 * // is equivalent to
 * zip( range( 100 ) , range( 1 , 100 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The frame size.
 * @returns {Iterator}
 *
 */
function* frame(iterable, n) {

	// Could have an implementation using a deque
	// that doesn't slice (and thus allocate a new
	// vector everytime). Though the yield object
	// could not be modified by the caller in that case.

	const iterator = (0, _iter.iter)(iterable);

	let tuple = [];

	for (const i of (0, _range.range)(n)) {

		const current = iterator.next();

		if (current.done) return;

		tuple.push(current.value);
	}

	yield tuple;

	for (const value of iterator) {

		tuple = tuple.slice(1);
		tuple.push(value);
		yield tuple;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2ZyYW1lLmpzIl0sIm5hbWVzIjpbImZyYW1lIiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJ0dXBsZSIsImkiLCJjdXJyZW50IiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmlCQSxLLEdBQUFBLEs7O0FBakJqQjs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFjTyxVQUFVQSxLQUFWLENBQWtCQyxRQUFsQixFQUE2QkMsQ0FBN0IsRUFBaUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU1DLFdBQVcsZ0JBQU1GLFFBQU4sQ0FBakI7O0FBRUEsS0FBSUcsUUFBUSxFQUFaOztBQUVBLE1BQU0sTUFBTUMsQ0FBWixJQUFpQixrQkFBT0gsQ0FBUCxDQUFqQixFQUE4Qjs7QUFFN0IsUUFBTUksVUFBVUgsU0FBU0ksSUFBVCxFQUFoQjs7QUFFQSxNQUFLRCxRQUFRRSxJQUFiLEVBQW9COztBQUVwQkosUUFBTUssSUFBTixDQUFZSCxRQUFRSSxLQUFwQjtBQUVBOztBQUVELE9BQU1OLEtBQU47O0FBRUEsTUFBTSxNQUFNTSxLQUFaLElBQXFCUCxRQUFyQixFQUFnQzs7QUFFL0JDLFVBQVFBLE1BQU1PLEtBQU4sQ0FBYSxDQUFiLENBQVI7QUFDQVAsUUFBTUssSUFBTixDQUFZQyxLQUFaO0FBQ0EsUUFBTU4sS0FBTjtBQUVBO0FBRUQiLCJmaWxlIjoiZnJhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi9pdGVyJyA7XG5pbXBvcnQgeyByYW5nZSB9IGZyb20gJy4vcmFuZ2UnIDtcblxuLyoqXG4gKiBZaWVsZHMgdHVwbGVzIHRoYXQgY29udGFpbiB0aGUgY3VycmVudCBlbGVtZW50IG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBhbmQgdGhlXG4gKiBuZXh0IDxjb2RlPm4tMTwvY29kZT4gZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBmcmFtZSggcmFuZ2UoIDEwMCApICwgMiApIDtcbiAqIC8vIGlzIGVxdWl2YWxlbnQgdG9cbiAqIHppcCggcmFuZ2UoIDEwMCApICwgcmFuZ2UoIDEgLCAxMDAgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIGZyYW1lIHNpemUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIGZyYW1lICggaXRlcmFibGUgLCBuICkge1xuXG5cdC8vIENvdWxkIGhhdmUgYW4gaW1wbGVtZW50YXRpb24gdXNpbmcgYSBkZXF1ZVxuXHQvLyB0aGF0IGRvZXNuJ3Qgc2xpY2UgKGFuZCB0aHVzIGFsbG9jYXRlIGEgbmV3XG5cdC8vIHZlY3RvciBldmVyeXRpbWUpLiBUaG91Z2ggdGhlIHlpZWxkIG9iamVjdFxuXHQvLyBjb3VsZCBub3QgYmUgbW9kaWZpZWQgYnkgdGhlIGNhbGxlciBpbiB0aGF0IGNhc2UuXG5cblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRsZXQgdHVwbGUgPSBbIF0gO1xuXG5cdGZvciAoIGNvbnN0IGkgb2YgcmFuZ2UoIG4gKSApIHtcblxuXHRcdGNvbnN0IGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCApIDtcblxuXHRcdGlmICggY3VycmVudC5kb25lICkgcmV0dXJuIDtcblxuXHRcdHR1cGxlLnB1c2goIGN1cnJlbnQudmFsdWUgKSA7XG5cblx0fVxuXG5cdHlpZWxkIHR1cGxlIDtcblxuXHRmb3IgKCBjb25zdCB2YWx1ZSBvZiBpdGVyYXRvciApIHtcblxuXHRcdHR1cGxlID0gdHVwbGUuc2xpY2UoIDEgKSA7XG5cdFx0dHVwbGUucHVzaCggdmFsdWUgKSA7XG5cdFx0eWllbGQgdHVwbGUgO1xuXG5cdH1cblxufVxuIl19