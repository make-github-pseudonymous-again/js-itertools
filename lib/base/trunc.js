'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.trunc = trunc;

var _jsCollectionsDeque = require('@aureooms/js-collections-deque');

var _jsCollectionsDeque2 = _interopRequireDefault(_jsCollectionsDeque);

var _iter = require('./iter');

var _take = require('./take');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Yields all elements of the iterable except the last <code>n</code> ones. If
 * <code>n</code> is negative, behaves like <code>{@link take}( iterable, -n
 * )</code>.
 *
 * @example
 * // returns [ 0 , 1 , 2 ]
 * list( trunc( range( 5 ) , 2 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to exclude from the output.
 * @returns {Iterator}
 */
function* trunc(iterable, n) {

	if (n < 0) {
		yield* (0, _take.take)(iterable, -n);
		return;
	}

	if (n === 0) {
		yield* iterable;
		return;
	}

	const iterator = (0, _iter.iter)(iterable);

	const buffer = (0, _jsCollectionsDeque2.default)(null, n);

	while (n-- > 0) {
		const e = iterator.next();
		if (e.done) return;
		buffer.append(e.value);
	}

	for (const value of iterator) {
		yield buffer.popleft();
		buffer.append(value);
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RydW5jLmpzIl0sIm5hbWVzIjpbInRydW5jIiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJidWZmZXIiLCJlIiwibmV4dCIsImRvbmUiLCJhcHBlbmQiLCJ2YWx1ZSIsInBvcGxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBa0JpQkEsSyxHQUFBQSxLOztBQWxCakI7Ozs7QUFFQTs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FBYU8sVUFBVUEsS0FBVixDQUFrQkMsUUFBbEIsRUFBNkJDLENBQTdCLEVBQWlDOztBQUV2QyxLQUFLQSxJQUFJLENBQVQsRUFBYTtBQUNaLFNBQU8sZ0JBQU1ELFFBQU4sRUFBaUIsQ0FBQ0MsQ0FBbEIsQ0FBUDtBQUNBO0FBQ0E7O0FBRUQsS0FBS0EsTUFBTSxDQUFYLEVBQWU7QUFDZCxTQUFPRCxRQUFQO0FBQ0E7QUFDQTs7QUFFRCxPQUFNRSxXQUFXLGdCQUFNRixRQUFOLENBQWpCOztBQUVBLE9BQU1HLFNBQVMsa0NBQU8sSUFBUCxFQUFjRixDQUFkLENBQWY7O0FBRUEsUUFBUUEsTUFBTSxDQUFkLEVBQWtCO0FBQ2pCLFFBQU1HLElBQUlGLFNBQVNHLElBQVQsRUFBVjtBQUNBLE1BQUtELEVBQUVFLElBQVAsRUFBYztBQUNkSCxTQUFPSSxNQUFQLENBQWVILEVBQUVJLEtBQWpCO0FBQ0E7O0FBRUQsTUFBTSxNQUFNQSxLQUFaLElBQXFCTixRQUFyQixFQUFnQztBQUMvQixRQUFNQyxPQUFPTSxPQUFQLEVBQU47QUFDQU4sU0FBT0ksTUFBUCxDQUFlQyxLQUFmO0FBQ0E7QUFFRCIsImZpbGUiOiJ0cnVuYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZXF1ZSBmcm9tICdAYXVyZW9vbXMvanMtY29sbGVjdGlvbnMtZGVxdWUnIDtcblxuaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJy4vdGFrZScgO1xuXG4vKipcbiAqIFlpZWxkcyBhbGwgZWxlbWVudHMgb2YgdGhlIGl0ZXJhYmxlIGV4Y2VwdCB0aGUgbGFzdCA8Y29kZT5uPC9jb2RlPiBvbmVzLiBJZlxuICogPGNvZGU+bjwvY29kZT4gaXMgbmVnYXRpdmUsIGJlaGF2ZXMgbGlrZSA8Y29kZT57QGxpbmsgdGFrZX0oIGl0ZXJhYmxlLCAtblxuICogKTwvY29kZT4uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyAwICwgMSAsIDIgXVxuICogbGlzdCggdHJ1bmMoIHJhbmdlKCA1ICkgLCAyICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gZXhjbHVkZSBmcm9tIHRoZSBvdXRwdXQuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogdHJ1bmMgKCBpdGVyYWJsZSAsIG4gKSB7XG5cblx0aWYgKCBuIDwgMCApIHtcblx0XHR5aWVsZCogdGFrZSggaXRlcmFibGUgLCAtbiApIDtcblx0XHRyZXR1cm4gO1xuXHR9XG5cblx0aWYgKCBuID09PSAwICkge1xuXHRcdHlpZWxkKiBpdGVyYWJsZSA7XG5cdFx0cmV0dXJuIDtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0Y29uc3QgYnVmZmVyID0gZGVxdWUoIG51bGwgLCBuICkgO1xuXG5cdHdoaWxlICggbiAtLT4gMCApIHtcblx0XHRjb25zdCBlID0gaXRlcmF0b3IubmV4dCggKSA7XG5cdFx0aWYgKCBlLmRvbmUgKSByZXR1cm4gO1xuXHRcdGJ1ZmZlci5hcHBlbmQoIGUudmFsdWUgKSA7XG5cdH1cblxuXHRmb3IgKCBjb25zdCB2YWx1ZSBvZiBpdGVyYXRvciApIHtcblx0XHR5aWVsZCBidWZmZXIucG9wbGVmdCgpIDtcblx0XHRidWZmZXIuYXBwZW5kKCB2YWx1ZSApIDtcblx0fVxuXG59XG4iXX0=