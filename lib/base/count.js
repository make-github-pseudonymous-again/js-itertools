'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;

var _count2 = require('./_count');

/**
 * Yields increasing or decreasing sequences of numbers. The starting value
 * and the step between separating output values can be chosen. Both parameters are
 * optional. The default for the starting value is <code>0</code>. The default
 * for the step between separating output values is <code>1</code>.
 *
 * @example
 * // equivalent to list( range( 7 ) )
 * list( head( count( ) , 7 ) ) ;
 *
 * @example
 * // returns [0,-1,-2,-3,-4]
 * list( head( count( 0 , -1 ) , 5 ) ) ;
 *
 * @param {Number} [start=0] - The starting value.
 * @param {Number} [step=1] - The step between the values.
 * @returns {Iterator}
 */
function count() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


  return (0, _count2._count)(start, step);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2NvdW50LmpzIl0sIm5hbWVzIjpbImNvdW50Iiwic3RhcnQiLCJzdGVwIl0sIm1hcHBpbmdzIjoiOzs7OztRQW9CZ0JBLEssR0FBQUEsSzs7QUFwQmhCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQk8sU0FBU0EsS0FBVCxHQUF3QztBQUFBLE1BQXZCQyxLQUF1Qix1RUFBZixDQUFlO0FBQUEsTUFBWEMsSUFBVyx1RUFBSixDQUFJOzs7QUFFOUMsU0FBTyxvQkFBUUQsS0FBUixFQUFnQkMsSUFBaEIsQ0FBUDtBQUVBIiwiZmlsZSI6ImNvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2NvdW50IH0gZnJvbSAnLi9fY291bnQnIDtcblxuLyoqXG4gKiBZaWVsZHMgaW5jcmVhc2luZyBvciBkZWNyZWFzaW5nIHNlcXVlbmNlcyBvZiBudW1iZXJzLiBUaGUgc3RhcnRpbmcgdmFsdWVcbiAqIGFuZCB0aGUgc3RlcCBiZXR3ZWVuIHNlcGFyYXRpbmcgb3V0cHV0IHZhbHVlcyBjYW4gYmUgY2hvc2VuLiBCb3RoIHBhcmFtZXRlcnMgYXJlXG4gKiBvcHRpb25hbC4gVGhlIGRlZmF1bHQgZm9yIHRoZSBzdGFydGluZyB2YWx1ZSBpcyA8Y29kZT4wPC9jb2RlPi4gVGhlIGRlZmF1bHRcbiAqIGZvciB0aGUgc3RlcCBiZXR3ZWVuIHNlcGFyYXRpbmcgb3V0cHV0IHZhbHVlcyBpcyA8Y29kZT4xPC9jb2RlPi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gZXF1aXZhbGVudCB0byBsaXN0KCByYW5nZSggNyApIClcbiAqIGxpc3QoIGhlYWQoIGNvdW50KCApICwgNyApICkgO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFswLC0xLC0yLC0zLC00XVxuICogbGlzdCggaGVhZCggY291bnQoIDAgLCAtMSApICwgNSApICkgO1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gLSBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gKiBAcGFyYW0ge051bWJlcn0gW3N0ZXA9MV0gLSBUaGUgc3RlcCBiZXR3ZWVuIHRoZSB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudCAoIHN0YXJ0ID0gMCAsIHN0ZXAgPSAxICkge1xuXG5cdHJldHVybiBfY291bnQoIHN0YXJ0ICwgc3RlcCApIDtcblxufVxuIl19