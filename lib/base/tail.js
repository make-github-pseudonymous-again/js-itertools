'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tail = tail;

var _jsCollectionsDeque = require('@aureooms/js-collections-deque');

var _jsCollectionsDeque2 = _interopRequireDefault(_jsCollectionsDeque);

var _iter = require('./iter');

var _drop = require('./drop');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          return _context.delegateYield((0, _jsCollectionsDeque2.default)(iterable, n), 't1', 4);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RhaWwuanMiXSwibmFtZXMiOlsidGFpbCIsIml0ZXJhYmxlIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFrQmlCQSxJLEdBQUFBLEk7O0FBbEJqQjs7OztBQUVBOztBQUNBOzs7O2VBZWlCQSxJOztBQWJqQjs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVVBLElBQVYsQ0FBaUJDLFFBQWpCLEVBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRURBLElBQUksQ0FGSDtBQUFBO0FBQUE7QUFBQTs7QUFBQSx3Q0FHRSxnQkFBTUQsUUFBTixFQUFpQixDQUFDQyxDQUFsQixDQUhGOztBQUFBO0FBQUE7O0FBQUE7QUFBQSx3Q0FPQyxrQ0FBT0QsUUFBUCxFQUFrQkMsQ0FBbEIsQ0FQRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJ0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlcXVlIGZyb20gJ0BhdXJlb29tcy9qcy1jb2xsZWN0aW9ucy1kZXF1ZScgO1xuXG5pbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi9pdGVyJyA7XG5pbXBvcnQgeyBkcm9wIH0gZnJvbSAnLi9kcm9wJyA7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCA8Y29kZT5uPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUgaW4gYW4gYXJyYXkuXG4gKiBJZiA8Y29kZT5uPC9jb2RlPiBpcyBuZWdhdGl2ZSwgYmVoYXZlcyBsaWtlIDxjb2RlPntAbGluayBkcm9wfSggaXRlcmFibGUsXG4gKiAtbik8L2NvZGU+LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgMyAsIDQgXVxuICogbGlzdCggdGFpbCggcmFuZ2UoIDUgKSAsIDIgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBpbmNsdWRlIGluIHRoZSBvdXRwdXQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gVGhlIGxhc3QgPGNvZGU+bjwvY29kZT4gZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIHRhaWwgKCBpdGVyYWJsZSAsIG4gKSB7XG5cblx0aWYgKCBuIDwgMCApIHtcblx0XHR5aWVsZCogZHJvcCggaXRlcmFibGUgLCAtbiApIDtcblx0XHRyZXR1cm4gO1xuXHR9XG5cblx0eWllbGQqIGRlcXVlKCBpdGVyYWJsZSAsIG4gKSA7XG5cbn1cbiJdfQ==