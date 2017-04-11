'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drop = drop;

var _iter = require('./iter');

var _consume = require('./consume');

var _tail = require('./tail');

var _marked = [drop].map(regeneratorRuntime.mark);

/**
 * Drops the first <code>n</code> elements of the input iterable.
 * If <code>n</code> is negative, behaves like <code>{@link tail}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 3 , 4 ]
 * list( drop( range( 5 ) , 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to drop.
 * @returns {Iterator}
 */
function drop(iterable, n) {
  var iterator;
  return regeneratorRuntime.wrap(function drop$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(n < 0)) {
            _context.next = 3;
            break;
          }

          return _context.delegateYield((0, _tail.tail)(iterable, -n), 't0', 2);

        case 2:
          return _context.abrupt('return');

        case 3:
          iterator = (0, _iter.iter)(iterable);

          (0, _consume.consume)(iterator, n);
          return _context.delegateYield(iterator, 't1', 6);

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2Ryb3AuanMiXSwibmFtZXMiOlsiZHJvcCIsIml0ZXJhYmxlIiwibiIsIml0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztRQWlCaUJBLEksR0FBQUEsSTs7QUFqQmpCOztBQUNBOztBQUNBOztlQWVpQkEsSTs7QUFiakI7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFVQSxJQUFWLENBQWlCQyxRQUFqQixFQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRURBLElBQUksQ0FGSDtBQUFBO0FBQUE7QUFBQTs7QUFBQSx3Q0FHRSxnQkFBTUQsUUFBTixFQUFpQixDQUFDQyxDQUFsQixDQUhGOztBQUFBO0FBQUE7O0FBQUE7QUFPQUMsa0JBUEEsR0FPVyxnQkFBTUYsUUFBTixDQVBYOztBQVFOLGdDQUFTRSxRQUFULEVBQW9CRCxDQUFwQjtBQVJNLHdDQVNDQyxRQVREOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImRyb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi9pdGVyJyA7XG5pbXBvcnQgeyBjb25zdW1lIH0gZnJvbSAnLi9jb25zdW1lJyA7XG5pbXBvcnQgeyB0YWlsIH0gZnJvbSAnLi90YWlsJyA7XG5cbi8qKlxuICogRHJvcHMgdGhlIGZpcnN0IDxjb2RlPm48L2NvZGU+IGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIElmIDxjb2RlPm48L2NvZGU+IGlzIG5lZ2F0aXZlLCBiZWhhdmVzIGxpa2UgPGNvZGU+e0BsaW5rIHRhaWx9KCBpdGVyYWJsZSxcbiAqIC1uKTwvY29kZT4uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyAzICwgNCBdXG4gKiBsaXN0KCBkcm9wKCByYW5nZSggNSApICwgMyApICkgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGRyb3AuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZHJvcCAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRpZiAoIG4gPCAwICkge1xuXHRcdHlpZWxkKiB0YWlsKCBpdGVyYWJsZSAsIC1uICkgO1xuXHRcdHJldHVybiA7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXHRjb25zdW1lKCBpdGVyYXRvciAsIG4gKSA7XG5cdHlpZWxkKiBpdGVyYXRvciA7XG5cbn1cbiJdfQ==