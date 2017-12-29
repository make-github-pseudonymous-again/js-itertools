"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
/**
 * Applies a given callable to each of the elements of the input iterable.
 *
 * @example
 * // return [ 0 , 1 , 4 , 9 ]
 * list( map( x => x**2 , range( 4 ) ) ) ;
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function* map(callable, iterable) {

  for (let item of iterable) yield callable(item);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsImNhbGxhYmxlIiwiaXRlcmFibGUiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsRyxHQUFBQSxHO0FBWGpCOzs7Ozs7Ozs7OztBQVdPLFVBQVVBLEdBQVYsQ0FBZ0JDLFFBQWhCLEVBQTJCQyxRQUEzQixFQUFzQzs7QUFFNUMsT0FBTSxJQUFJQyxJQUFWLElBQWtCRCxRQUFsQixFQUE2QixNQUFNRCxTQUFVRSxJQUFWLENBQU47QUFFN0IiLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gY2FsbGFibGUgdG8gZWFjaCBvZiB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm4gWyAwICwgMSAsIDQgLCA5IF1cbiAqIGxpc3QoIG1hcCggeCA9PiB4KioyICwgcmFuZ2UoIDQgKSApICkgO1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxhYmxlIC0gVGhlIGNhbGxhYmxlIHRvIHVzZS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIG1hcCAoIGNhbGxhYmxlICwgaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB5aWVsZCBjYWxsYWJsZSggaXRlbSApIDtcblxufVxuIl19