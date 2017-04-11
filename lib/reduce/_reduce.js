"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._reduce = _reduce;
/**
 * Applies the accumulator function iteratively on the last return value of the
 * accumulator and the next value in the input iterable. The initial value is
 * the initializer parameter.
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 0 ) ; // returns 45
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Function} accumulator - The accumulator, a 2-ary function.
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} initializer - The initial value of the reduction.
 * @returns {Object} - The reduction of the elements of <code>iterable</code>.
 */
function _reduce(accumulator, iterable, initializer) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      initializer = accumulator(initializer, item);
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

  return initializer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvX3JlZHVjZS5qcyJdLCJuYW1lcyI6WyJfcmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVyYWJsZSIsImluaXRpYWxpemVyIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxPLEdBQUFBLE87QUFoQmhCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLE9BQVQsQ0FBbUJDLFdBQW5CLEVBQWlDQyxRQUFqQyxFQUE0Q0MsV0FBNUMsRUFBMEQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRWhFLHlCQUFrQkQsUUFBbEIsOEhBQTZCO0FBQUEsVUFBbkJFLElBQW1COztBQUM1QkQsb0JBQWNGLFlBQWFFLFdBQWIsRUFBMkJDLElBQTNCLENBQWQ7QUFDQTtBQUorRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1oRSxTQUFPRCxXQUFQO0FBRUEiLCJmaWxlIjoiX3JlZHVjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXBwbGllcyB0aGUgYWNjdW11bGF0b3IgZnVuY3Rpb24gaXRlcmF0aXZlbHkgb24gdGhlIGxhc3QgcmV0dXJuIHZhbHVlIG9mIHRoZVxuICogYWNjdW11bGF0b3IgYW5kIHRoZSBuZXh0IHZhbHVlIGluIHRoZSBpbnB1dCBpdGVyYWJsZS4gVGhlIGluaXRpYWwgdmFsdWUgaXNcbiAqIHRoZSBpbml0aWFsaXplciBwYXJhbWV0ZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIF9yZWR1Y2UoICggeCAsIHkgKSA9PiB4ICsgeSAsIHJhbmdlKCAxMCApICwgMCApIDsgLy8gcmV0dXJucyA0NVxuICpcbiAqIEBleGFtcGxlXG4gKiBfcmVkdWNlKCAoIHggLCB5ICkgPT4geCArIHkgLCByYW5nZSggMTAgKSAsIDEwMCApIDsgLy8gcmV0dXJucyAxNDVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY2N1bXVsYXRvciAtIFRoZSBhY2N1bXVsYXRvciwgYSAyLWFyeSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtPYmplY3R9IGluaXRpYWxpemVyIC0gVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIHJlZHVjdGlvbiBvZiB0aGUgZWxlbWVudHMgb2YgPGNvZGU+aXRlcmFibGU8L2NvZGU+LlxuICovXG5leHBvcnQgZnVuY3Rpb24gX3JlZHVjZSAoIGFjY3VtdWxhdG9yICwgaXRlcmFibGUgLCBpbml0aWFsaXplciApIHtcblxuXHRmb3IgKCBsZXQgaXRlbSBvZiBpdGVyYWJsZSApIHtcblx0XHRpbml0aWFsaXplciA9IGFjY3VtdWxhdG9yKCBpbml0aWFsaXplciAsIGl0ZW0gKSA7XG5cdH1cblxuXHRyZXR1cm4gaW5pdGlhbGl6ZXIgO1xuXG59XG4iXX0=