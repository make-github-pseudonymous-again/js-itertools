'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

var _iter = require('./iter');

var _trunc = require('./trunc');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(take);

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
function take(iterable, n) {
  var iterator, current;
  return regeneratorRuntime.wrap(function take$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(n < 0)) {
            _context.next = 3;
            break;
          }

          return _context.delegateYield((0, _trunc.trunc)(iterable, -n), 't0', 2);

        case 2:
          return _context.abrupt('return');

        case 3:
          iterator = (0, _iter.iter)(iterable);

        case 4:
          if (!(n-- > 0)) {
            _context.next = 12;
            break;
          }

          current = iterator.next();

          if (!current.done) {
            _context.next = 8;
            break;
          }

          return _context.abrupt('return');

        case 8:
          _context.next = 10;
          return current.value;

        case 10:
          _context.next = 4;
          break;

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3Rha2UuanMiXSwibmFtZXMiOlsidGFrZSIsIml0ZXJhYmxlIiwibiIsIml0ZXJhdG9yIiwiY3VycmVudCIsIm5leHQiLCJkb25lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JpQkEsSSxHQUFBQSxJOztBQWhCakI7O0FBQ0E7O21EQWVpQkEsSTs7QUFiakI7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFVQSxJQUFWLENBQWlCQyxRQUFqQixFQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRURBLElBQUksQ0FGSDtBQUFBO0FBQUE7QUFBQTs7QUFBQSx3Q0FHRSxrQkFBT0QsUUFBUCxFQUFrQixDQUFDQyxDQUFuQixDQUhGOztBQUFBO0FBQUE7O0FBQUE7QUFPQUMsa0JBUEEsR0FPVyxnQkFBTUYsUUFBTixDQVBYOztBQUFBO0FBQUEsZ0JBU0VDLE1BQU0sQ0FUUjtBQUFBO0FBQUE7QUFBQTs7QUFXQ0UsaUJBWEQsR0FXV0QsU0FBU0UsSUFBVCxFQVhYOztBQUFBLGVBYUFELFFBQVFFLElBYlI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlCQWVDRixRQUFRRyxLQWZUOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJ0YWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgdHJ1bmMgfSBmcm9tICcuL3RydW5jJyA7XG5cbi8qKlxuICogWWllbGRzIHRoZSBmaXJzdCA8Y29kZT5uPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuIElmXG4gKiA8Y29kZT5uPC9jb2RlPiBpcyBuZWdhdGl2ZSwgYmVoYXZlcyBsaWtlIDxjb2RlPntAbGluayB0cnVuY30oIGl0ZXJhYmxlLFxuICogLW4pPC9jb2RlPi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIDAgLCAxICwgMiBdXG4gKiBsaXN0KCB0YWtlKCByYW5nZSggNSApICwgMyApICkgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGluY2x1ZGUgaW4gdGhlIG91dHB1dC5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn0gLSBUaGUgZmlyc3QgPGNvZGU+bjwvY29kZT4gZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIHRha2UgKCBpdGVyYWJsZSAsIG4gKSB7XG5cblx0aWYgKCBuIDwgMCApIHtcblx0XHR5aWVsZCogdHJ1bmMoIGl0ZXJhYmxlICwgLW4gKSA7XG5cdFx0cmV0dXJuIDtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0d2hpbGUgKCBuIC0tPiAwICkge1xuXG5cdFx0Y29uc3QgY3VycmVudCA9IGl0ZXJhdG9yLm5leHQoKSA7XG5cblx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHJldHVybiA7XG5cblx0XHR5aWVsZCBjdXJyZW50LnZhbHVlIDtcblxuXHR9XG5cbn1cbiJdfQ==