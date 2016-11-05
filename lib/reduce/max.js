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

  var iterator = (0, _iter.iter)(iterable);

  var first = iterator.next();

  if (first.done) return undefined;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvbWF4LmpzIl0sIm5hbWVzIjpbIm1heCIsImNvbXBhcmUiLCJpdGVyYWJsZSIsIml0ZXJhdG9yIiwiZmlyc3QiLCJuZXh0IiwiZG9uZSIsInVuZGVmaW5lZCIsImxhcmdlc3QiLCJ2YWx1ZSIsImNhbmRpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFvQmdCQSxHLEdBQUFBLEc7O0FBcEJoQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JPLFNBQVNBLEdBQVQsQ0FBZUMsT0FBZixFQUF5QkMsUUFBekIsRUFBb0M7O0FBRTFDLE1BQUlDLFdBQVcsZ0JBQU1ELFFBQU4sQ0FBZjs7QUFFQSxNQUFJRSxRQUFRRCxTQUFTRSxJQUFULEVBQVo7O0FBRUEsTUFBS0QsTUFBTUUsSUFBWCxFQUFrQixPQUFPQyxTQUFQOztBQUVsQixNQUFJQyxVQUFVSixNQUFNSyxLQUFwQjs7QUFSMEM7QUFBQTtBQUFBOztBQUFBO0FBVTFDLHlCQUF1Qk4sUUFBdkIsOEhBQWtDO0FBQUEsVUFBeEJPLFNBQXdCOzs7QUFFakMsVUFBS1QsUUFBU1MsU0FBVCxFQUFxQkYsT0FBckIsSUFBaUMsQ0FBdEMsRUFBMEM7O0FBRXpDQSxrQkFBVUUsU0FBVjtBQUVBO0FBRUQ7QUFsQnlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0IxQyxTQUFPRixPQUFQO0FBRUEiLCJmaWxlIjoibWF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4uL2Jhc2UvaXRlcicgO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGxhcmdlc3QgZWxlbWVudCBvZiB0aGUgaW5wdXQgaXRlcmFibGUgYWNjb3JkaW5nXG4gKiB0byBzb21lIGNvbXBhcmlzb24gZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIG1heCggKCBhICwgYiApID0+IGEgLSBiICwgcmFuZ2UoIDEwICkgKSA7IC8vIHJldHVybnMgOVxuICpcbiAqIEBleGFtcGxlXG4gKiBtYXgoICggYSAsIGIgKSA9PiBhIC0gYiAsIHJhbmdlKCAwICkgKSA7IC8vIHJldHVybnMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyZSAtIFRoZSBjb21wYXJpc29uIGZ1bmN0aW9uIHRvIHVzZS4gVGhpcyBmdW5jdGlvblxuICogbXVzdCBiZSAyLWFyeS4gSXQgbXVzdCByZXR1cm4gLTEsIDAsIG9yIDEgZGVwZW5kaW5nIHdoZXRoZXIgdGhlIGZpcnN0XG4gKiBwYXJhbWV0ZXIgaXMsIHJlc3BlY3RpdmVseSwgbGVzcyB0aGFuLCBlcXVhbCB0bywgb3IgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmRcbiAqIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge09iamVjdH0gVGhlIGxhcmdlc3QgZWxlbWVudCBvZiA8Y29kZT5pdGVyYWJsZTwvY29kZT4gYWNjb3JkaW5nIHRvXG4gKiA8Y29kZT5jb21wYXJlPC9jb2RlPi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heCAoIGNvbXBhcmUgLCBpdGVyYWJsZSApIHtcblxuXHRsZXQgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRsZXQgZmlyc3QgPSBpdGVyYXRvci5uZXh0KCkgO1xuXG5cdGlmICggZmlyc3QuZG9uZSApIHJldHVybiB1bmRlZmluZWQgO1xuXG5cdGxldCBsYXJnZXN0ID0gZmlyc3QudmFsdWUgO1xuXG5cdGZvciAoIGxldCBjYW5kaWRhdGUgb2YgaXRlcmF0b3IgKSB7XG5cblx0XHRpZiAoIGNvbXBhcmUoIGNhbmRpZGF0ZSAsIGxhcmdlc3QgKSA+IDAgKSB7XG5cblx0XHRcdGxhcmdlc3QgPSBjYW5kaWRhdGUgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gbGFyZ2VzdCA7XG5cbn1cbiJdfQ==