'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = reduce;

var _reduce2 = require('./_reduce');

var _iter = require('../base/iter');

/**
 * Applies the accumulator function iteratively on the last return value of the
 * accumulator and the next value in the input iterable. The initial value is
 * the initializer parameter. If no initial value is given, the first element
 * of the input iterable is used.
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 0 ) ; // returns 45
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Function} accumulator - The accumulator, a 2-ary function.
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} [initializer=undefined] - The initial value of the reduction.
 * @returns {Object} - The reduction of the elements of <code>iterable</code>.
 */
function reduce(accumulator, iterable) {
  var initializer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;


  if (initializer === undefined) {
    var iterator = (0, _iter.iter)(iterable);
    var first = iterator.next();

    if (first.done) {
      return undefined;
    }

    return (0, _reduce2._reduce)(accumulator, iterator, first.value);
  }

  return (0, _reduce2._reduce)(accumulator, iterable, initializer);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvcmVkdWNlLmpzIl0sIm5hbWVzIjpbInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaXRlcmFibGUiLCJpbml0aWFsaXplciIsInVuZGVmaW5lZCIsIml0ZXJhdG9yIiwiZmlyc3QiLCJuZXh0IiwiZG9uZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztRQW9CZ0JBLE0sR0FBQUEsTTs7QUFwQmhCOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxTQUFTQSxNQUFULENBQWtCQyxXQUFsQixFQUFnQ0MsUUFBaEMsRUFBcUU7QUFBQSxNQUExQkMsV0FBMEIsdUVBQVpDLFNBQVk7OztBQUUzRSxNQUFLRCxnQkFBZ0JDLFNBQXJCLEVBQWlDO0FBQ2hDLFFBQU1DLFdBQVcsZ0JBQU1ILFFBQU4sQ0FBakI7QUFDQSxRQUFNSSxRQUFRRCxTQUFTRSxJQUFULEVBQWQ7O0FBRUEsUUFBS0QsTUFBTUUsSUFBWCxFQUFrQjtBQUNqQixhQUFPSixTQUFQO0FBQ0E7O0FBRUQsV0FBTyxzQkFBU0gsV0FBVCxFQUF1QkksUUFBdkIsRUFBa0NDLE1BQU1HLEtBQXhDLENBQVA7QUFDQTs7QUFFRCxTQUFPLHNCQUFTUixXQUFULEVBQXVCQyxRQUF2QixFQUFrQ0MsV0FBbEMsQ0FBUDtBQUVBIiwiZmlsZSI6InJlZHVjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9yZWR1Y2UgfSBmcm9tICcuL19yZWR1Y2UnIDtcbmltcG9ydCB7IGl0ZXIgfSBmcm9tICcuLi9iYXNlL2l0ZXInIDtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBhY2N1bXVsYXRvciBmdW5jdGlvbiBpdGVyYXRpdmVseSBvbiB0aGUgbGFzdCByZXR1cm4gdmFsdWUgb2YgdGhlXG4gKiBhY2N1bXVsYXRvciBhbmQgdGhlIG5leHQgdmFsdWUgaW4gdGhlIGlucHV0IGl0ZXJhYmxlLiBUaGUgaW5pdGlhbCB2YWx1ZSBpc1xuICogdGhlIGluaXRpYWxpemVyIHBhcmFtZXRlci4gSWYgbm8gaW5pdGlhbCB2YWx1ZSBpcyBnaXZlbiwgdGhlIGZpcnN0IGVsZW1lbnRcbiAqIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBpcyB1c2VkLlxuICpcbiAqIEBleGFtcGxlXG4gKiBfcmVkdWNlKCAoIHggLCB5ICkgPT4geCArIHkgLCByYW5nZSggMTAgKSAsIDAgKSA7IC8vIHJldHVybnMgNDVcbiAqXG4gKiBAZXhhbXBsZVxuICogX3JlZHVjZSggKCB4ICwgeSApID0+IHggKyB5ICwgcmFuZ2UoIDEwICkgLCAxMDAgKSA7IC8vIHJldHVybnMgMTQ1XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWNjdW11bGF0b3IgLSBUaGUgYWNjdW11bGF0b3IsIGEgMi1hcnkgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbaW5pdGlhbGl6ZXI9dW5kZWZpbmVkXSAtIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSByZWR1Y3Rpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSByZWR1Y3Rpb24gb2YgdGhlIGVsZW1lbnRzIG9mIDxjb2RlPml0ZXJhYmxlPC9jb2RlPi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZSAoIGFjY3VtdWxhdG9yICwgaXRlcmFibGUgLCBpbml0aWFsaXplciA9IHVuZGVmaW5lZCApIHtcblxuXHRpZiAoIGluaXRpYWxpemVyID09PSB1bmRlZmluZWQgKSB7XG5cdFx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblx0XHRjb25zdCBmaXJzdCA9IGl0ZXJhdG9yLm5leHQoKSA7XG5cblx0XHRpZiAoIGZpcnN0LmRvbmUgKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkIDtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3JlZHVjZSggYWNjdW11bGF0b3IgLCBpdGVyYXRvciAsIGZpcnN0LnZhbHVlICkgO1xuXHR9XG5cblx0cmV0dXJuIF9yZWR1Y2UoIGFjY3VtdWxhdG9yICwgaXRlcmFibGUgLCBpbml0aWFsaXplciApIDtcblxufVxuIl19