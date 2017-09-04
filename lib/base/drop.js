'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drop = drop;

var _iter = require('./iter');

var _consume = require('./consume');

var _tail = require('./tail');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(drop);

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
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2Ryb3AuanMiXSwibmFtZXMiOlsiZHJvcCIsIml0ZXJhYmxlIiwibiIsIml0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztRQWlCaUJBLEksR0FBQUEsSTs7QUFqQmpCOztBQUNBOztBQUNBOzttREFlaUJBLEk7O0FBYmpCOzs7Ozs7Ozs7Ozs7O0FBYU8sU0FBVUEsSUFBVixDQUFpQkMsUUFBakIsRUFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUVEQSxJQUFJLENBRkg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0NBR0UsZ0JBQU1ELFFBQU4sRUFBaUIsQ0FBQ0MsQ0FBbEIsQ0FIRjs7QUFBQTtBQUFBOztBQUFBO0FBT0FDLGtCQVBBLEdBT1csZ0JBQU1GLFFBQU4sQ0FQWDs7QUFRTixnQ0FBU0UsUUFBVCxFQUFvQkQsQ0FBcEI7QUFSTSx3Q0FTQ0MsUUFURDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkcm9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgY29uc3VtZSB9IGZyb20gJy4vY29uc3VtZScgO1xuaW1wb3J0IHsgdGFpbCB9IGZyb20gJy4vdGFpbCcgO1xuXG4vKipcbiAqIERyb3BzIHRoZSBmaXJzdCA8Y29kZT5uPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKiBJZiA8Y29kZT5uPC9jb2RlPiBpcyBuZWdhdGl2ZSwgYmVoYXZlcyBsaWtlIDxjb2RlPntAbGluayB0YWlsfSggaXRlcmFibGUsXG4gKiAtbik8L2NvZGU+LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgMyAsIDQgXVxuICogbGlzdCggZHJvcCggcmFuZ2UoIDUgKSAsIDMgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBkcm9wLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIGRyb3AgKCBpdGVyYWJsZSAsIG4gKSB7XG5cblx0aWYgKCBuIDwgMCApIHtcblx0XHR5aWVsZCogdGFpbCggaXRlcmFibGUgLCAtbiApIDtcblx0XHRyZXR1cm4gO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblx0Y29uc3VtZSggaXRlcmF0b3IgLCBuICkgO1xuXHR5aWVsZCogaXRlcmF0b3IgO1xuXG59XG4iXX0=