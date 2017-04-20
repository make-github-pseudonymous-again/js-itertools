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
 * @param {Object} [dflt=undefined] - The default value to return in the case
 * that the input iterable is empty.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvbWF4LmpzIl0sIm5hbWVzIjpbIm1heCIsImNvbXBhcmUiLCJpdGVyYWJsZSIsImRmbHQiLCJ1bmRlZmluZWQiLCJpdGVyYXRvciIsImZpcnN0IiwibmV4dCIsImRvbmUiLCJsYXJnZXN0IiwidmFsdWUiLCJjYW5kaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBc0JnQkEsRyxHQUFBQSxHOztBQXRCaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JPLFNBQVNBLEdBQVQsQ0FBZUMsT0FBZixFQUF5QkMsUUFBekIsRUFBdUQ7QUFBQSxNQUFuQkMsSUFBbUIsdUVBQVpDLFNBQVk7OztBQUU3RCxNQUFJQyxXQUFXLGdCQUFNSCxRQUFOLENBQWY7O0FBRUEsTUFBSUksUUFBUUQsU0FBU0UsSUFBVCxFQUFaOztBQUVBLE1BQUtELE1BQU1FLElBQVgsRUFBa0IsT0FBT0wsSUFBUDs7QUFFbEIsTUFBSU0sVUFBVUgsTUFBTUksS0FBcEI7O0FBUjZEO0FBQUE7QUFBQTs7QUFBQTtBQVU3RCx5QkFBdUJMLFFBQXZCLDhIQUFrQztBQUFBLFVBQXhCTSxTQUF3Qjs7O0FBRWpDLFVBQUtWLFFBQVNVLFNBQVQsRUFBcUJGLE9BQXJCLElBQWlDLENBQXRDLEVBQTBDOztBQUV6Q0Esa0JBQVVFLFNBQVY7QUFFQTtBQUVEO0FBbEI0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CN0QsU0FBT0YsT0FBUDtBQUVBIiwiZmlsZSI6Im1heC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgfSBmcm9tICcuLi9iYXNlL2l0ZXInIDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IGVsZW1lbnQgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGFjY29yZGluZ1xuICogdG8gc29tZSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBtYXgoICggYSAsIGIgKSA9PiBhIC0gYiAsIHJhbmdlKCAxMCApICkgOyAvLyByZXR1cm5zIDlcbiAqXG4gKiBAZXhhbXBsZVxuICogbWF4KCAoIGEgLCBiICkgPT4gYSAtIGIgLCByYW5nZSggMCApICkgOyAvLyByZXR1cm5zIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmUgLSBUaGUgY29tcGFyaXNvbiBmdW5jdGlvbiB0byB1c2UuIFRoaXMgZnVuY3Rpb25cbiAqIG11c3QgYmUgMi1hcnkuIEl0IG11c3QgcmV0dXJuIC0xLCAwLCBvciAxIGRlcGVuZGluZyB3aGV0aGVyIHRoZSBmaXJzdFxuICogcGFyYW1ldGVyIGlzLCByZXNwZWN0aXZlbHksIGxlc3MgdGhhbiwgZXF1YWwgdG8sIG9yIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kXG4gKiBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGZsdD11bmRlZmluZWRdIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gcmV0dXJuIGluIHRoZSBjYXNlXG4gKiB0aGF0IHRoZSBpbnB1dCBpdGVyYWJsZSBpcyBlbXB0eS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBsYXJnZXN0IGVsZW1lbnQgb2YgPGNvZGU+aXRlcmFibGU8L2NvZGU+IGFjY29yZGluZyB0b1xuICogPGNvZGU+Y29tcGFyZTwvY29kZT4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXggKCBjb21wYXJlICwgaXRlcmFibGUgLCBkZmx0ID0gdW5kZWZpbmVkICkge1xuXG5cdGxldCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdGxldCBmaXJzdCA9IGl0ZXJhdG9yLm5leHQoKSA7XG5cblx0aWYgKCBmaXJzdC5kb25lICkgcmV0dXJuIGRmbHQgO1xuXG5cdGxldCBsYXJnZXN0ID0gZmlyc3QudmFsdWUgO1xuXG5cdGZvciAoIGxldCBjYW5kaWRhdGUgb2YgaXRlcmF0b3IgKSB7XG5cblx0XHRpZiAoIGNvbXBhcmUoIGNhbmRpZGF0ZSAsIGxhcmdlc3QgKSA+IDAgKSB7XG5cblx0XHRcdGxhcmdlc3QgPSBjYW5kaWRhdGUgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gbGFyZ2VzdCA7XG5cbn1cbiJdfQ==