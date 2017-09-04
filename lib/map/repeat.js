"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(repeat);

/**
 * Repeats the input item endlessly. Returns an iterator that yields the input
 * item over and over again.
 *
 * @example
 * list( take( repeat( 6 ) , 3 ) ) ; // returns [ 6 , 6 , 6 ]
 *
 * @param {Object} item - The input item.
 * @returns {Iterator}
 */
function repeat(item) {
  return regeneratorRuntime.wrap(function repeat$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!true) {
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
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcmVwZWF0LmpzIl0sIm5hbWVzIjpbInJlcGVhdCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWlCQSxNLEdBQUFBLE07O21EQUFBQSxNOztBQVZqQjs7Ozs7Ozs7OztBQVVPLFNBQVVBLE1BQVYsQ0FBbUJDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVFLElBRkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFFZUEsSUFGZjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicmVwZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXBlYXRzIHRoZSBpbnB1dCBpdGVtIGVuZGxlc3NseS4gUmV0dXJucyBhbiBpdGVyYXRvciB0aGF0IHlpZWxkcyB0aGUgaW5wdXRcbiAqIGl0ZW0gb3ZlciBhbmQgb3ZlciBhZ2Fpbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogbGlzdCggdGFrZSggcmVwZWF0KCA2ICkgLCAzICkgKSA7IC8vIHJldHVybnMgWyA2ICwgNiAsIDYgXVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gVGhlIGlucHV0IGl0ZW0uXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogcmVwZWF0ICggaXRlbSApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB5aWVsZCBpdGVtIDtcblxufVxuIl19