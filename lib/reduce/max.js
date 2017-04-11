'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = max;

var _iter = require('../base/iter');

/**
 * Returns the largest element of the input iterable according
 * to some comparison function.
 *
 * @example
 * max( ( a , b ) => a - b , range( 10 ) ) ; // returns 9
 *
 * @example
 * max( ( a , b ) => a - b , range( 0 ) ) ; // returns undefined
 *
 * @param {Function} compare - The comparison function to use. This function
 * must be 2-ary. It must return -1, 0, or 1 depending whether the first
 * parameter is, respectively, less than, equal to, or greater than the second
 * parameter.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Object} The largest element of <code>iterable</code> according to
 * <code>compare</code>.
 */
function max(compare, iterable) {
  var dflt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;


  var iterator = (0, _iter.iter)(iterable);

  var first = iterator.next();

  if (first.done) return dflt;

  var largest = first.value;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var candidate = _step.value;


      if (compare(candidate, largest) > 0) {

        largest = candidate;
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

  return largest;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvbWF4LmpzIl0sIm5hbWVzIjpbIm1heCIsImNvbXBhcmUiLCJpdGVyYWJsZSIsImRmbHQiLCJ1bmRlZmluZWQiLCJpdGVyYXRvciIsImZpcnN0IiwibmV4dCIsImRvbmUiLCJsYXJnZXN0IiwidmFsdWUiLCJjYW5kaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBb0JnQkEsRyxHQUFBQSxHOztBQXBCaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCTyxTQUFTQSxHQUFULENBQWVDLE9BQWYsRUFBeUJDLFFBQXpCLEVBQXVEO0FBQUEsTUFBbkJDLElBQW1CLHVFQUFaQyxTQUFZOzs7QUFFN0QsTUFBSUMsV0FBVyxnQkFBTUgsUUFBTixDQUFmOztBQUVBLE1BQUlJLFFBQVFELFNBQVNFLElBQVQsRUFBWjs7QUFFQSxNQUFLRCxNQUFNRSxJQUFYLEVBQWtCLE9BQU9MLElBQVA7O0FBRWxCLE1BQUlNLFVBQVVILE1BQU1JLEtBQXBCOztBQVI2RDtBQUFBO0FBQUE7O0FBQUE7QUFVN0QseUJBQXVCTCxRQUF2Qiw4SEFBa0M7QUFBQSxVQUF4Qk0sU0FBd0I7OztBQUVqQyxVQUFLVixRQUFTVSxTQUFULEVBQXFCRixPQUFyQixJQUFpQyxDQUF0QyxFQUEwQzs7QUFFekNBLGtCQUFVRSxTQUFWO0FBRUE7QUFFRDtBQWxCNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQjdELFNBQU9GLE9BQVA7QUFFQSIsImZpbGUiOiJtYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi4vYmFzZS9pdGVyJyA7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFyZ2VzdCBlbGVtZW50IG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBhY2NvcmRpbmdcbiAqIHRvIHNvbWUgY29tcGFyaXNvbiBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogbWF4KCAoIGEgLCBiICkgPT4gYSAtIGIgLCByYW5nZSggMTAgKSApIDsgLy8gcmV0dXJucyA5XG4gKlxuICogQGV4YW1wbGVcbiAqIG1heCggKCBhICwgYiApID0+IGEgLSBiICwgcmFuZ2UoIDAgKSApIDsgLy8gcmV0dXJucyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJlIC0gVGhlIGNvbXBhcmlzb24gZnVuY3Rpb24gdG8gdXNlLiBUaGlzIGZ1bmN0aW9uXG4gKiBtdXN0IGJlIDItYXJ5LiBJdCBtdXN0IHJldHVybiAtMSwgMCwgb3IgMSBkZXBlbmRpbmcgd2hldGhlciB0aGUgZmlyc3RcbiAqIHBhcmFtZXRlciBpcywgcmVzcGVjdGl2ZWx5LCBsZXNzIHRoYW4sIGVxdWFsIHRvLCBvciBncmVhdGVyIHRoYW4gdGhlIHNlY29uZFxuICogcGFyYW1ldGVyLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbGFyZ2VzdCBlbGVtZW50IG9mIDxjb2RlPml0ZXJhYmxlPC9jb2RlPiBhY2NvcmRpbmcgdG9cbiAqIDxjb2RlPmNvbXBhcmU8L2NvZGU+LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4ICggY29tcGFyZSAsIGl0ZXJhYmxlICwgZGZsdCA9IHVuZGVmaW5lZCApIHtcblxuXHRsZXQgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRsZXQgZmlyc3QgPSBpdGVyYXRvci5uZXh0KCkgO1xuXG5cdGlmICggZmlyc3QuZG9uZSApIHJldHVybiBkZmx0IDtcblxuXHRsZXQgbGFyZ2VzdCA9IGZpcnN0LnZhbHVlIDtcblxuXHRmb3IgKCBsZXQgY2FuZGlkYXRlIG9mIGl0ZXJhdG9yICkge1xuXG5cdFx0aWYgKCBjb21wYXJlKCBjYW5kaWRhdGUgLCBsYXJnZXN0ICkgPiAwICkge1xuXG5cdFx0XHRsYXJnZXN0ID0gY2FuZGlkYXRlIDtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIGxhcmdlc3QgO1xuXG59XG4iXX0=