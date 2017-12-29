'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.slice = slice;

var _ = require('..');

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
function* slice(iterable, start, stop, step) {

	let iterator = (0, _.iter)(iterable);

	while (start > 0) {

		if (iterator.next().done) return;

		--start;
		--stop;
	}

	while (stop > 0) {

		let current = iterator.next();

		if (current.done) return;

		yield current.value;

		--stop;

		let n = step;

		while (n > 1) {

			if (iterator.next().done) return;

			--n;
		}
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvc2xpY2UuanMiXSwibmFtZXMiOlsic2xpY2UiLCJpdGVyYWJsZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwiY3VycmVudCIsInZhbHVlIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFhaUJBLEssR0FBQUEsSzs7QUFiakI7O0FBRUE7Ozs7Ozs7Ozs7O0FBV08sVUFBVUEsS0FBVixDQUFrQkMsUUFBbEIsRUFBNkJDLEtBQTdCLEVBQXFDQyxJQUFyQyxFQUE0Q0MsSUFBNUMsRUFBbUQ7O0FBRXpELEtBQUlDLFdBQVcsWUFBTUosUUFBTixDQUFmOztBQUVBLFFBQVFDLFFBQVEsQ0FBaEIsRUFBb0I7O0FBRW5CLE1BQUtHLFNBQVNDLElBQVQsR0FBZ0JDLElBQXJCLEVBQTRCOztBQUU1QixJQUFFTCxLQUFGO0FBQ0EsSUFBRUMsSUFBRjtBQUVBOztBQUVELFFBQVFBLE9BQU8sQ0FBZixFQUFtQjs7QUFFbEIsTUFBSUssVUFBVUgsU0FBU0MsSUFBVCxFQUFkOztBQUVBLE1BQUtFLFFBQVFELElBQWIsRUFBb0I7O0FBRXBCLFFBQU1DLFFBQVFDLEtBQWQ7O0FBRUEsSUFBRU4sSUFBRjs7QUFFQSxNQUFJTyxJQUFJTixJQUFSOztBQUVBLFNBQVFNLElBQUksQ0FBWixFQUFnQjs7QUFFZixPQUFLTCxTQUFTQyxJQUFULEdBQWdCQyxJQUFyQixFQUE0Qjs7QUFFNUIsS0FBRUcsQ0FBRjtBQUVBO0FBRUQ7QUFFRCIsImZpbGUiOiJzbGljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIFNhbWUgYXNcbiAqIDxjb2RlPm1hcCggWyBpICwgeCBdID0+IHggLCBmaWx0ZXIoIFsgaSAsIHggXSA9PiAobmV3IFNldCggcmFuZ2UoIHN0YXJ0ICxcbiAqIHN0b3AgLCBzdGVwICkgKSApLmhhcyggaSApICwgZW51bWVyYXRlKCBpdGVyYWJsZSApICkgKTs8L2NvZGU+LlxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IC0gV2hlcmUgdG8gc3RhcnQgdGhlIHNsaWNlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0b3AgLSBXaGVyZSB0byBzdG9wIHRoZSBzbGljZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIC0gVGhlIHN0ZXAgb2YgdGhlIHNsaWNlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHNsaWNlICggaXRlcmFibGUgLCBzdGFydCAsIHN0b3AgLCBzdGVwICkge1xuXG5cdGxldCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdHdoaWxlICggc3RhcnQgPiAwICkge1xuXG5cdFx0aWYgKCBpdGVyYXRvci5uZXh0KCkuZG9uZSApIHJldHVybiA7XG5cblx0XHQtLXN0YXJ0IDtcblx0XHQtLXN0b3AgO1xuXG5cdH1cblxuXHR3aGlsZSAoIHN0b3AgPiAwICkge1xuXG5cdFx0bGV0IGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCkgO1xuXG5cdFx0aWYgKCBjdXJyZW50LmRvbmUgKSByZXR1cm4gO1xuXG5cdFx0eWllbGQgY3VycmVudC52YWx1ZSA7XG5cblx0XHQtLXN0b3AgO1xuXG5cdFx0bGV0IG4gPSBzdGVwIDtcblxuXHRcdHdoaWxlICggbiA+IDEgKSB7XG5cblx0XHRcdGlmICggaXRlcmF0b3IubmV4dCgpLmRvbmUgKSByZXR1cm4gO1xuXG5cdFx0XHQtLW4gO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19