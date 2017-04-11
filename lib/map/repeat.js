"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;

var _marked = [repeat].map(regeneratorRuntime.mark);

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
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcmVwZWF0LmpzIl0sIm5hbWVzIjpbInJlcGVhdCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWlCQSxNLEdBQUFBLE07O2VBQUFBLE07O0FBVmpCOzs7Ozs7Ozs7O0FBVU8sU0FBVUEsTUFBVixDQUFtQkMsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUUsSUFGRjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUVlQSxJQUZmOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJyZXBlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlcGVhdHMgdGhlIGlucHV0IGl0ZW0gZW5kbGVzc2x5LiBSZXR1cm5zIGFuIGl0ZXJhdG9yIHRoYXQgeWllbGRzIHRoZSBpbnB1dFxuICogaXRlbSBvdmVyIGFuZCBvdmVyIGFnYWluLlxuICpcbiAqIEBleGFtcGxlXG4gKiBsaXN0KCB0YWtlKCByZXBlYXQoIDYgKSAsIDMgKSApIDsgLy8gcmV0dXJucyBbIDYgLCA2ICwgNiBdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSBUaGUgaW5wdXQgaXRlbS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiByZXBlYXQgKCBpdGVtICkge1xuXG5cdHdoaWxlICggdHJ1ZSApIHlpZWxkIGl0ZW0gO1xuXG59XG4iXX0=