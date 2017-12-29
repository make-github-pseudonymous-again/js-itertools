'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drop = drop;

var _iter = require('./iter');

var _consume = require('./consume');

var _tail = require('./tail');

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
function* drop(iterable, n) {

  if (n < 0) {
    yield* (0, _tail.tail)(iterable, -n);
    return;
  }

  const iterator = (0, _iter.iter)(iterable);
  (0, _consume.consume)(iterator, n);
  yield* iterator;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2Ryb3AuanMiXSwibmFtZXMiOlsiZHJvcCIsIml0ZXJhYmxlIiwibiIsIml0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztRQWlCaUJBLEksR0FBQUEsSTs7QUFqQmpCOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FBYU8sVUFBVUEsSUFBVixDQUFpQkMsUUFBakIsRUFBNEJDLENBQTVCLEVBQWdDOztBQUV0QyxNQUFLQSxJQUFJLENBQVQsRUFBYTtBQUNaLFdBQU8sZ0JBQU1ELFFBQU4sRUFBaUIsQ0FBQ0MsQ0FBbEIsQ0FBUDtBQUNBO0FBQ0E7O0FBRUQsUUFBTUMsV0FBVyxnQkFBTUYsUUFBTixDQUFqQjtBQUNBLHdCQUFTRSxRQUFULEVBQW9CRCxDQUFwQjtBQUNBLFNBQU9DLFFBQVA7QUFFQSIsImZpbGUiOiJkcm9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgY29uc3VtZSB9IGZyb20gJy4vY29uc3VtZScgO1xuaW1wb3J0IHsgdGFpbCB9IGZyb20gJy4vdGFpbCcgO1xuXG4vKipcbiAqIERyb3BzIHRoZSBmaXJzdCA8Y29kZT5uPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKiBJZiA8Y29kZT5uPC9jb2RlPiBpcyBuZWdhdGl2ZSwgYmVoYXZlcyBsaWtlIDxjb2RlPntAbGluayB0YWlsfSggaXRlcmFibGUsXG4gKiAtbik8L2NvZGU+LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgMyAsIDQgXVxuICogbGlzdCggZHJvcCggcmFuZ2UoIDUgKSAsIDMgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBkcm9wLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIGRyb3AgKCBpdGVyYWJsZSAsIG4gKSB7XG5cblx0aWYgKCBuIDwgMCApIHtcblx0XHR5aWVsZCogdGFpbCggaXRlcmFibGUgLCAtbiApIDtcblx0XHRyZXR1cm4gO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblx0Y29uc3VtZSggaXRlcmF0b3IgLCBuICkgO1xuXHR5aWVsZCogaXRlcmF0b3IgO1xuXG59XG4iXX0=