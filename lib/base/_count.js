"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._count = _count;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_count);

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
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL19jb3VudC5qcyJdLCJuYW1lcyI6WyJfY291bnQiLCJzdGFydCIsInN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JpQkEsTSxHQUFBQSxNOzttREFBQUEsTTs7QUFoQmpCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVVBLE1BQVYsQ0FBbUJDLEtBQW5CLEVBQTJCQyxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFRSxJQUZGO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBSUNELEtBSkQ7O0FBQUE7O0FBTUxBLG1CQUFTQyxJQUFUOztBQU5LO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBZaWVsZHMgaW5jcmVhc2luZyBvciBkZWNyZWFzaW5nIHNlcXVlbmNlcyBvZiBudW1iZXJzLiBUaGUgc3RhcnRpbmcgdmFsdWVcbiAqIGFuZCB0aGUgc3RlcCBiZXR3ZWVuIHNlcGFyYXRpbmcgb3V0cHV0IHZhbHVlcyBjYW4gYmUgY2hvc2VuLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBlcXVpdmFsZW50IHRvIGxpc3QoIHJhbmdlKCA3ICkgKVxuICogbGlzdCggaGVhZCggX2NvdW50KCAwICwgMSApICwgNyApICkgO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFswLC0xLC0yLC0zLC00XVxuICogbGlzdCggaGVhZCggX2NvdW50KCAwICwgLTEgKSAsIDUgKSApIDtcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgLSBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gKiBAcGFyYW0ge051bWJlcn0gc3RlcCAtIFRoZSBzdGVwIGJldHdlZW4gdGhlIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBfY291bnQgKCBzdGFydCAsIHN0ZXAgKSB7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0eWllbGQgc3RhcnQgO1xuXG5cdFx0c3RhcnQgKz0gc3RlcCA7XG5cblx0fVxuXG59XG4iXX0=