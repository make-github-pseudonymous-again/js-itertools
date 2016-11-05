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
 * @returns {Object} The smallest element of <code>iterable</code> according to
 * <code>compare</code>.
 */
function min(compare, iterable) {

  var iterator = (0, _iter.iter)(iterable);

  var first = iterator.next();

  if (first.done) return undefined;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvbWluLmpzIl0sIm5hbWVzIjpbIm1pbiIsImNvbXBhcmUiLCJpdGVyYWJsZSIsIml0ZXJhdG9yIiwiZmlyc3QiLCJuZXh0IiwiZG9uZSIsInVuZGVmaW5lZCIsInNtYWxsZXN0IiwidmFsdWUiLCJjYW5kaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBb0JnQkEsRyxHQUFBQSxHOztBQXBCaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCTyxTQUFTQSxHQUFULENBQWVDLE9BQWYsRUFBeUJDLFFBQXpCLEVBQW9DOztBQUUxQyxNQUFJQyxXQUFXLGdCQUFNRCxRQUFOLENBQWY7O0FBRUEsTUFBSUUsUUFBUUQsU0FBU0UsSUFBVCxFQUFaOztBQUVBLE1BQUtELE1BQU1FLElBQVgsRUFBa0IsT0FBT0MsU0FBUDs7QUFFbEIsTUFBSUMsV0FBV0osTUFBTUssS0FBckI7O0FBUjBDO0FBQUE7QUFBQTs7QUFBQTtBQVUxQyx5QkFBdUJOLFFBQXZCLDhIQUFrQztBQUFBLFVBQXhCTyxTQUF3Qjs7O0FBRWpDLFVBQUtULFFBQVNTLFNBQVQsRUFBcUJGLFFBQXJCLElBQWtDLENBQXZDLEVBQTJDOztBQUUxQ0EsbUJBQVdFLFNBQVg7QUFFQTtBQUVEO0FBbEJ5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CMUMsU0FBT0YsUUFBUDtBQUVBIiwiZmlsZSI6Im1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgfSBmcm9tICcuLi9iYXNlL2l0ZXInIDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzbWFsbGVzdCBlbGVtZW50IG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBhY2NvcmRpbmdcbiAqIHRvIHNvbWUgY29tcGFyaXNvbiBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogbWluKCAoIGEgLCBiICkgPT4gYSAtIGIgLCByYW5nZSggMTAgKSApIDsgLy8gcmV0dXJucyAwXG4gKlxuICogQGV4YW1wbGVcbiAqIG1pbiggKCBhICwgYiApID0+IGEgLSBiICwgcmFuZ2UoIDAgKSApIDsgLy8gcmV0dXJucyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJlIC0gVGhlIGNvbXBhcmlzb24gZnVuY3Rpb24gdG8gdXNlLiBUaGlzIGZ1bmN0aW9uXG4gKiBtdXN0IGJlIDItYXJ5LiBJdCBtdXN0IHJldHVybiAtMSwgMCwgb3IgMSBkZXBlbmRpbmcgd2hldGhlciB0aGUgZmlyc3RcbiAqIHBhcmFtZXRlciBpcywgcmVzcGVjdGl2ZWx5LCBsZXNzIHRoYW4sIGVxdWFsIHRvLCBvciBncmVhdGVyIHRoYW4gdGhlIHNlY29uZFxuICogcGFyYW1ldGVyLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc21hbGxlc3QgZWxlbWVudCBvZiA8Y29kZT5pdGVyYWJsZTwvY29kZT4gYWNjb3JkaW5nIHRvXG4gKiA8Y29kZT5jb21wYXJlPC9jb2RlPi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbiAoIGNvbXBhcmUgLCBpdGVyYWJsZSApIHtcblxuXHRsZXQgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRsZXQgZmlyc3QgPSBpdGVyYXRvci5uZXh0KCApIDtcblxuXHRpZiAoIGZpcnN0LmRvbmUgKSByZXR1cm4gdW5kZWZpbmVkIDtcblxuXHRsZXQgc21hbGxlc3QgPSBmaXJzdC52YWx1ZSA7XG5cblx0Zm9yICggbGV0IGNhbmRpZGF0ZSBvZiBpdGVyYXRvciApIHtcblxuXHRcdGlmICggY29tcGFyZSggY2FuZGlkYXRlICwgc21hbGxlc3QgKSA8IDAgKSB7XG5cblx0XHRcdHNtYWxsZXN0ID0gY2FuZGlkYXRlIDtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIHNtYWxsZXN0IDtcblxufVxuIl19