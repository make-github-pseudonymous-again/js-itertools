'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

var _iter = require('./iter');

var _trunc = require('./trunc');

/**
 * Yields the first <code>n</code> elements of the input iterable. If
 * <code>n</code> is negative, behaves like <code>{@link trunc}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 0 , 1 , 2 ]
 * list( take( range( 5 ) , 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to include in the output.
 * @returns {Iterator} - The first <code>n</code> elements of the input iterable.
 */
function* take(iterable, n) {

  if (n < 0) {
    yield* (0, _trunc.trunc)(iterable, -n);
    return;
  }

  const iterator = (0, _iter.iter)(iterable);

  while (n-- > 0) {

    const current = iterator.next();

    if (current.done) return;

    yield current.value;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3Rha2UuanMiXSwibmFtZXMiOlsidGFrZSIsIml0ZXJhYmxlIiwibiIsIml0ZXJhdG9yIiwiY3VycmVudCIsIm5leHQiLCJkb25lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JpQkEsSSxHQUFBQSxJOztBQWhCakI7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhTyxVQUFVQSxJQUFWLENBQWlCQyxRQUFqQixFQUE0QkMsQ0FBNUIsRUFBZ0M7O0FBRXRDLE1BQUtBLElBQUksQ0FBVCxFQUFhO0FBQ1osV0FBTyxrQkFBT0QsUUFBUCxFQUFrQixDQUFDQyxDQUFuQixDQUFQO0FBQ0E7QUFDQTs7QUFFRCxRQUFNQyxXQUFXLGdCQUFNRixRQUFOLENBQWpCOztBQUVBLFNBQVFDLE1BQU0sQ0FBZCxFQUFrQjs7QUFFakIsVUFBTUUsVUFBVUQsU0FBU0UsSUFBVCxFQUFoQjs7QUFFQSxRQUFLRCxRQUFRRSxJQUFiLEVBQW9COztBQUVwQixVQUFNRixRQUFRRyxLQUFkO0FBRUE7QUFFRCIsImZpbGUiOiJ0YWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgdHJ1bmMgfSBmcm9tICcuL3RydW5jJyA7XG5cbi8qKlxuICogWWllbGRzIHRoZSBmaXJzdCA8Y29kZT5uPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuIElmXG4gKiA8Y29kZT5uPC9jb2RlPiBpcyBuZWdhdGl2ZSwgYmVoYXZlcyBsaWtlIDxjb2RlPntAbGluayB0cnVuY30oIGl0ZXJhYmxlLFxuICogLW4pPC9jb2RlPi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIDAgLCAxICwgMiBdXG4gKiBsaXN0KCB0YWtlKCByYW5nZSggNSApICwgMyApICkgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGluY2x1ZGUgaW4gdGhlIG91dHB1dC5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn0gLSBUaGUgZmlyc3QgPGNvZGU+bjwvY29kZT4gZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIHRha2UgKCBpdGVyYWJsZSAsIG4gKSB7XG5cblx0aWYgKCBuIDwgMCApIHtcblx0XHR5aWVsZCogdHJ1bmMoIGl0ZXJhYmxlICwgLW4gKSA7XG5cdFx0cmV0dXJuIDtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0d2hpbGUgKCBuIC0tPiAwICkge1xuXG5cdFx0Y29uc3QgY3VycmVudCA9IGl0ZXJhdG9yLm5leHQoKSA7XG5cblx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHJldHVybiA7XG5cblx0XHR5aWVsZCBjdXJyZW50LnZhbHVlIDtcblxuXHR9XG5cbn1cbiJdfQ==