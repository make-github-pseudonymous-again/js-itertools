"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nrepeat = nrepeat;

var _marked = [nrepeat].map(regeneratorRuntime.mark);

/**
 * Repeats the input item a few times. Returns an iterator that yields the input
 * item a fixed number of times.
 *
 * @example
 * list( nrepeat( 6 , 3 ) ) ; // returns [ 6 , 6 , 6 ]
 *
 * @param {Object} item - The input item.
 * @param {Number} times - The number of times to yield <code>item</code>.
 * @returns {Iterator}
 */
function nrepeat(item, times) {
  return regeneratorRuntime.wrap(function nrepeat$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(times-- > 0)) {
            _context.next = 5;
            break;
          }

          _context.next = 3;
          return item;

        case 3:
          _context.next = 0;
          break;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvbnJlcGVhdC5qcyJdLCJuYW1lcyI6WyJucmVwZWF0IiwiaXRlbSIsInRpbWVzIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsTyxHQUFBQSxPOztlQUFBQSxPOztBQVhqQjs7Ozs7Ozs7Ozs7QUFXTyxTQUFVQSxPQUFWLENBQW9CQyxJQUFwQixFQUEyQkMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUVFQSxVQUFVLENBRlo7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFFc0JELElBRnRCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJucmVwZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXBlYXRzIHRoZSBpbnB1dCBpdGVtIGEgZmV3IHRpbWVzLiBSZXR1cm5zIGFuIGl0ZXJhdG9yIHRoYXQgeWllbGRzIHRoZSBpbnB1dFxuICogaXRlbSBhIGZpeGVkIG51bWJlciBvZiB0aW1lcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogbGlzdCggbnJlcGVhdCggNiAsIDMgKSApIDsgLy8gcmV0dXJucyBbIDYgLCA2ICwgNiBdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSBUaGUgaW5wdXQgaXRlbS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lcyAtIFRoZSBudW1iZXIgb2YgdGltZXMgdG8geWllbGQgPGNvZGU+aXRlbTwvY29kZT4uXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogbnJlcGVhdCAoIGl0ZW0gLCB0aW1lcyApIHtcblxuXHR3aGlsZSAoIHRpbWVzIC0tPiAwICkgeWllbGQgaXRlbSA7XG5cbn1cbiJdfQ==