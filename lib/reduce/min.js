'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = min;

var _iter = require('../base/iter');

/**
 * Returns the smallest element of the input iterable according
 * to some comparison function.
 *
 * @example
 * min( ( a , b ) => a - b , range( 10 ) ) ; // returns 0
 *
 * @example
 * min( ( a , b ) => a - b , range( 0 ) ) ; // returns undefined
 *
 * @param {Function} compare - The comparison function to use. This function
 * must be 2-ary. It must return -1, 0, or 1 depending whether the first
 * parameter is, respectively, less than, equal to, or greater than the second
 * parameter.
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} [dflt=undefined] - The default value to return in the case
 * that the input iterable is empty.
 * @returns {Object} The smallest element of <code>iterable</code> according to
 * <code>compare</code>.
 */
function min(compare, iterable) {
  var dflt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;


  var iterator = (0, _iter.iter)(iterable);

  var first = iterator.next();

  if (first.done) return dflt;

  var smallest = first.value;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var candidate = _step.value;


      if (compare(candidate, smallest) < 0) {

        smallest = candidate;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return smallest;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvbWluLmpzIl0sIm5hbWVzIjpbIm1pbiIsImNvbXBhcmUiLCJpdGVyYWJsZSIsImRmbHQiLCJ1bmRlZmluZWQiLCJpdGVyYXRvciIsImZpcnN0IiwibmV4dCIsImRvbmUiLCJzbWFsbGVzdCIsInZhbHVlIiwiY2FuZGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7OztRQXNCZ0JBLEcsR0FBQUEsRzs7QUF0QmhCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CTyxTQUFTQSxHQUFULENBQWVDLE9BQWYsRUFBeUJDLFFBQXpCLEVBQXVEO0FBQUEsTUFBbkJDLElBQW1CLHVFQUFaQyxTQUFZOzs7QUFFN0QsTUFBSUMsV0FBVyxnQkFBTUgsUUFBTixDQUFmOztBQUVBLE1BQUlJLFFBQVFELFNBQVNFLElBQVQsRUFBWjs7QUFFQSxNQUFLRCxNQUFNRSxJQUFYLEVBQWtCLE9BQU9MLElBQVA7O0FBRWxCLE1BQUlNLFdBQVdILE1BQU1JLEtBQXJCOztBQVI2RDtBQUFBO0FBQUE7O0FBQUE7QUFVN0QseUJBQXVCTCxRQUF2Qiw4SEFBa0M7QUFBQSxVQUF4Qk0sU0FBd0I7OztBQUVqQyxVQUFLVixRQUFTVSxTQUFULEVBQXFCRixRQUFyQixJQUFrQyxDQUF2QyxFQUEyQzs7QUFFMUNBLG1CQUFXRSxTQUFYO0FBRUE7QUFFRDtBQWxCNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQjdELFNBQU9GLFFBQVA7QUFFQSIsImZpbGUiOiJtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi4vYmFzZS9pdGVyJyA7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc21hbGxlc3QgZWxlbWVudCBvZiB0aGUgaW5wdXQgaXRlcmFibGUgYWNjb3JkaW5nXG4gKiB0byBzb21lIGNvbXBhcmlzb24gZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIG1pbiggKCBhICwgYiApID0+IGEgLSBiICwgcmFuZ2UoIDEwICkgKSA7IC8vIHJldHVybnMgMFxuICpcbiAqIEBleGFtcGxlXG4gKiBtaW4oICggYSAsIGIgKSA9PiBhIC0gYiAsIHJhbmdlKCAwICkgKSA7IC8vIHJldHVybnMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyZSAtIFRoZSBjb21wYXJpc29uIGZ1bmN0aW9uIHRvIHVzZS4gVGhpcyBmdW5jdGlvblxuICogbXVzdCBiZSAyLWFyeS4gSXQgbXVzdCByZXR1cm4gLTEsIDAsIG9yIDEgZGVwZW5kaW5nIHdoZXRoZXIgdGhlIGZpcnN0XG4gKiBwYXJhbWV0ZXIgaXMsIHJlc3BlY3RpdmVseSwgbGVzcyB0aGFuLCBlcXVhbCB0bywgb3IgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmRcbiAqIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtPYmplY3R9IFtkZmx0PXVuZGVmaW5lZF0gLSBUaGUgZGVmYXVsdCB2YWx1ZSB0byByZXR1cm4gaW4gdGhlIGNhc2VcbiAqIHRoYXQgdGhlIGlucHV0IGl0ZXJhYmxlIGlzIGVtcHR5LlxuICogQHJldHVybnMge09iamVjdH0gVGhlIHNtYWxsZXN0IGVsZW1lbnQgb2YgPGNvZGU+aXRlcmFibGU8L2NvZGU+IGFjY29yZGluZyB0b1xuICogPGNvZGU+Y29tcGFyZTwvY29kZT4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4gKCBjb21wYXJlICwgaXRlcmFibGUgLCBkZmx0ID0gdW5kZWZpbmVkICkge1xuXG5cdGxldCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdGxldCBmaXJzdCA9IGl0ZXJhdG9yLm5leHQoICkgO1xuXG5cdGlmICggZmlyc3QuZG9uZSApIHJldHVybiBkZmx0IDtcblxuXHRsZXQgc21hbGxlc3QgPSBmaXJzdC52YWx1ZSA7XG5cblx0Zm9yICggbGV0IGNhbmRpZGF0ZSBvZiBpdGVyYXRvciApIHtcblxuXHRcdGlmICggY29tcGFyZSggY2FuZGlkYXRlICwgc21hbGxlc3QgKSA8IDAgKSB7XG5cblx0XHRcdHNtYWxsZXN0ID0gY2FuZGlkYXRlIDtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIHNtYWxsZXN0IDtcblxufVxuIl19