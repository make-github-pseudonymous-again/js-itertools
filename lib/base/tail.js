'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tail = tail;

var _aureoomsJsCollections = require('aureooms-js-collections');

var _iter = require('./iter');

var _drop = require('./drop');

var _marked = [tail].map(regeneratorRuntime.mark);

/**
 * Returns the last <code>n</code> elements of the input iterable in an array.
 * If <code>n</code> is negative, behaves like <code>{@link drop}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 3 , 4 ]
 * list( tail( range( 5 ) , 2 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to include in the output.
 * @returns {Array} - The last <code>n</code> elements of the input iterable.
 */
function tail(iterable, n) {
  return regeneratorRuntime.wrap(function tail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(n < 0)) {
            _context.next = 3;
            break;
          }

          return _context.delegateYield((0, _drop.drop)(iterable, -n), 't0', 2);

        case 2:
          return _context.abrupt('return');

        case 3:
          return _context.delegateYield((0, _aureoomsJsCollections.deque)(iterable, n), 't1', 4);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RhaWwuanMiXSwibmFtZXMiOlsidGFpbCIsIml0ZXJhYmxlIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFrQmlCQSxJLEdBQUFBLEk7O0FBbEJqQjs7QUFFQTs7QUFDQTs7ZUFlaUJBLEk7O0FBYmpCOzs7Ozs7Ozs7Ozs7O0FBYU8sU0FBVUEsSUFBVixDQUFpQkMsUUFBakIsRUFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFREEsSUFBSSxDQUZIO0FBQUE7QUFBQTtBQUFBOztBQUFBLHdDQUdFLGdCQUFNRCxRQUFOLEVBQWlCLENBQUNDLENBQWxCLENBSEY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdDQU9DLGtDQUFPRCxRQUFQLEVBQWtCQyxDQUFsQixDQVBEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXF1ZSB9IGZyb20gJ2F1cmVvb21zLWpzLWNvbGxlY3Rpb25zJyA7XG5cbmltcG9ydCB7IGl0ZXIgfSBmcm9tICcuL2l0ZXInIDtcbmltcG9ydCB7IGRyb3AgfSBmcm9tICcuL2Ryb3AnIDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXN0IDxjb2RlPm48L2NvZGU+IGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBpbiBhbiBhcnJheS5cbiAqIElmIDxjb2RlPm48L2NvZGU+IGlzIG5lZ2F0aXZlLCBiZWhhdmVzIGxpa2UgPGNvZGU+e0BsaW5rIGRyb3B9KCBpdGVyYWJsZSxcbiAqIC1uKTwvY29kZT4uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyAzICwgNCBdXG4gKiBsaXN0KCB0YWlsKCByYW5nZSggNSApICwgMiApICkgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGluY2x1ZGUgaW4gdGhlIG91dHB1dC5cbiAqIEByZXR1cm5zIHtBcnJheX0gLSBUaGUgbGFzdCA8Y29kZT5uPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogdGFpbCAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRpZiAoIG4gPCAwICkge1xuXHRcdHlpZWxkKiBkcm9wKCBpdGVyYWJsZSAsIC1uICkgO1xuXHRcdHJldHVybiA7XG5cdH1cblxuXHR5aWVsZCogZGVxdWUoIGl0ZXJhYmxlICwgbiApIDtcblxufVxuIl19