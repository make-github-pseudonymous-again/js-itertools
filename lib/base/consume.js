"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consume = consume;
/**
 * Consumes a given number of iterations of the input iterator.
 *
 * @param {Iterator} iterator - The input iterator.
 * @param {Number} n - The number of iterations to consume.
 *
 */
function consume(iterator, n) {

  while (n-- > 0 && !iterator.next().done);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2NvbnN1bWUuanMiXSwibmFtZXMiOlsiY29uc3VtZSIsIml0ZXJhdG9yIiwibiIsIm5leHQiLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsTyxHQUFBQSxPO0FBUGhCOzs7Ozs7O0FBT08sU0FBU0EsT0FBVCxDQUFtQkMsUUFBbkIsRUFBOEJDLENBQTlCLEVBQWtDOztBQUV4QyxTQUFRQSxNQUFNLENBQU4sSUFBVyxDQUFDRCxTQUFTRSxJQUFULEdBQWdCQyxJQUFwQyxDQUEyQztBQUUzQyIsImZpbGUiOiJjb25zdW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb25zdW1lcyBhIGdpdmVuIG51bWJlciBvZiBpdGVyYXRpb25zIG9mIHRoZSBpbnB1dCBpdGVyYXRvci5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBpdGVyYXRvciAtIFRoZSBpbnB1dCBpdGVyYXRvci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiBpdGVyYXRpb25zIHRvIGNvbnN1bWUuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3VtZSAoIGl0ZXJhdG9yICwgbiApIHtcblxuXHR3aGlsZSAoIG4gLS0+IDAgJiYgIWl0ZXJhdG9yLm5leHQoKS5kb25lICkgO1xuXG59XG4iXX0=