"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._count = _count;

var _marked = [_count].map(regeneratorRuntime.mark);

/**
 * Yields increasing or decreasing sequences of numbers. The starting value
 * and the step between separating output values can be chosen.
 *
 * @example
 * // equivalent to list( range( 7 ) )
 * list( head( _count( 0 , 1 ) , 7 ) ) ;
 *
 * @example
 * // returns [0,-1,-2,-3,-4]
 * list( head( _count( 0 , -1 ) , 5 ) ) ;
 *
 * @param {Number} start - The starting value.
 * @param {Number} step - The step between the values.
 * @returns {Iterator}
 */
function _count(start, step) {
  return regeneratorRuntime.wrap(function _count$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!true) {
            _context.next = 6;
            break;
          }

          _context.next = 3;
          return start;

        case 3:

          start += step;

          _context.next = 0;
          break;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL19jb3VudC5qcyJdLCJuYW1lcyI6WyJfY291bnQiLCJzdGFydCIsInN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JpQkEsTSxHQUFBQSxNOztlQUFBQSxNOztBQWhCakI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sU0FBVUEsTUFBVixDQUFtQkMsS0FBbkIsRUFBMkJDLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVFLElBRkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFJQ0QsS0FKRDs7QUFBQTs7QUFNTEEsbUJBQVNDLElBQVQ7O0FBTks7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfY291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFlpZWxkcyBpbmNyZWFzaW5nIG9yIGRlY3JlYXNpbmcgc2VxdWVuY2VzIG9mIG51bWJlcnMuIFRoZSBzdGFydGluZyB2YWx1ZVxuICogYW5kIHRoZSBzdGVwIGJldHdlZW4gc2VwYXJhdGluZyBvdXRwdXQgdmFsdWVzIGNhbiBiZSBjaG9zZW4uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIGVxdWl2YWxlbnQgdG8gbGlzdCggcmFuZ2UoIDcgKSApXG4gKiBsaXN0KCBoZWFkKCBfY291bnQoIDAgLCAxICkgLCA3ICkgKSA7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzAsLTEsLTIsLTMsLTRdXG4gKiBsaXN0KCBoZWFkKCBfY291bnQoIDAgLCAtMSApICwgNSApICkgO1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydGluZyB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIC0gVGhlIHN0ZXAgYmV0d2VlbiB0aGUgdmFsdWVzLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIF9jb3VudCAoIHN0YXJ0ICwgc3RlcCApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHR5aWVsZCBzdGFydCA7XG5cblx0XHRzdGFydCArPSBzdGVwIDtcblxuXHR9XG5cbn1cbiJdfQ==