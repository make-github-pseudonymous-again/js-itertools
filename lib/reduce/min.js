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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvbWluLmpzIl0sIm5hbWVzIjpbIm1pbiIsImNvbXBhcmUiLCJpdGVyYWJsZSIsImRmbHQiLCJ1bmRlZmluZWQiLCJpdGVyYXRvciIsImZpcnN0IiwibmV4dCIsImRvbmUiLCJzbWFsbGVzdCIsInZhbHVlIiwiY2FuZGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7OztRQW9CZ0JBLEcsR0FBQUEsRzs7QUFwQmhCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQk8sU0FBU0EsR0FBVCxDQUFlQyxPQUFmLEVBQXlCQyxRQUF6QixFQUF1RDtBQUFBLE1BQW5CQyxJQUFtQix1RUFBWkMsU0FBWTs7O0FBRTdELE1BQUlDLFdBQVcsZ0JBQU1ILFFBQU4sQ0FBZjs7QUFFQSxNQUFJSSxRQUFRRCxTQUFTRSxJQUFULEVBQVo7O0FBRUEsTUFBS0QsTUFBTUUsSUFBWCxFQUFrQixPQUFPTCxJQUFQOztBQUVsQixNQUFJTSxXQUFXSCxNQUFNSSxLQUFyQjs7QUFSNkQ7QUFBQTtBQUFBOztBQUFBO0FBVTdELHlCQUF1QkwsUUFBdkIsOEhBQWtDO0FBQUEsVUFBeEJNLFNBQXdCOzs7QUFFakMsVUFBS1YsUUFBU1UsU0FBVCxFQUFxQkYsUUFBckIsSUFBa0MsQ0FBdkMsRUFBMkM7O0FBRTFDQSxtQkFBV0UsU0FBWDtBQUVBO0FBRUQ7QUFsQjREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0I3RCxTQUFPRixRQUFQO0FBRUEiLCJmaWxlIjoibWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4uL2Jhc2UvaXRlcicgO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHNtYWxsZXN0IGVsZW1lbnQgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGFjY29yZGluZ1xuICogdG8gc29tZSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBtaW4oICggYSAsIGIgKSA9PiBhIC0gYiAsIHJhbmdlKCAxMCApICkgOyAvLyByZXR1cm5zIDBcbiAqXG4gKiBAZXhhbXBsZVxuICogbWluKCAoIGEgLCBiICkgPT4gYSAtIGIgLCByYW5nZSggMCApICkgOyAvLyByZXR1cm5zIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmUgLSBUaGUgY29tcGFyaXNvbiBmdW5jdGlvbiB0byB1c2UuIFRoaXMgZnVuY3Rpb25cbiAqIG11c3QgYmUgMi1hcnkuIEl0IG11c3QgcmV0dXJuIC0xLCAwLCBvciAxIGRlcGVuZGluZyB3aGV0aGVyIHRoZSBmaXJzdFxuICogcGFyYW1ldGVyIGlzLCByZXNwZWN0aXZlbHksIGxlc3MgdGhhbiwgZXF1YWwgdG8sIG9yIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kXG4gKiBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzbWFsbGVzdCBlbGVtZW50IG9mIDxjb2RlPml0ZXJhYmxlPC9jb2RlPiBhY2NvcmRpbmcgdG9cbiAqIDxjb2RlPmNvbXBhcmU8L2NvZGU+LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWluICggY29tcGFyZSAsIGl0ZXJhYmxlICwgZGZsdCA9IHVuZGVmaW5lZCApIHtcblxuXHRsZXQgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRsZXQgZmlyc3QgPSBpdGVyYXRvci5uZXh0KCApIDtcblxuXHRpZiAoIGZpcnN0LmRvbmUgKSByZXR1cm4gZGZsdCA7XG5cblx0bGV0IHNtYWxsZXN0ID0gZmlyc3QudmFsdWUgO1xuXG5cdGZvciAoIGxldCBjYW5kaWRhdGUgb2YgaXRlcmF0b3IgKSB7XG5cblx0XHRpZiAoIGNvbXBhcmUoIGNhbmRpZGF0ZSAsIHNtYWxsZXN0ICkgPCAwICkge1xuXG5cdFx0XHRzbWFsbGVzdCA9IGNhbmRpZGF0ZSA7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBzbWFsbGVzdCA7XG5cbn1cbiJdfQ==