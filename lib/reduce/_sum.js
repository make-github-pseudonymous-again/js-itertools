"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._sum = _sum;
/**
 * Sums the elements of the input iterable. An optional initializer parameter
 * allows to start the sum of the elements at a chosen value.
 *
 * @example
 * _sum( range( 10 ) , 0 ) ; // returns 45
 *
 * @example
 * _sum( range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} initializer - The initial value of the sum.
 * @returns {Object} - The sum of the initializer with the elements of
 * <code>iterable</code>.
 *
 */
function _sum(iterable, initializer) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      initializer += item;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvX3N1bS5qcyJdLCJuYW1lcyI6WyJfc3VtIiwiaXRlcmFibGUiLCJpbml0aWFsaXplciIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JnQkEsSSxHQUFBQSxJO0FBaEJoQjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxTQUFTQSxJQUFULENBQWdCQyxRQUFoQixFQUEyQkMsV0FBM0IsRUFBeUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRS9DLHlCQUFrQkQsUUFBbEI7QUFBQSxVQUFVRSxJQUFWO0FBQTZCRCxxQkFBZUMsSUFBZjtBQUE3QjtBQUYrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUkvQyxTQUFPRCxXQUFQO0FBRUEiLCJmaWxlIjoiX3N1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlLiBBbiBvcHRpb25hbCBpbml0aWFsaXplciBwYXJhbWV0ZXJcbiAqIGFsbG93cyB0byBzdGFydCB0aGUgc3VtIG9mIHRoZSBlbGVtZW50cyBhdCBhIGNob3NlbiB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogX3N1bSggcmFuZ2UoIDEwICkgLCAwICkgOyAvLyByZXR1cm5zIDQ1XG4gKlxuICogQGV4YW1wbGVcbiAqIF9zdW0oIHJhbmdlKCAxMCApICwgMTAwICkgOyAvLyByZXR1cm5zIDE0NVxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtPYmplY3R9IGluaXRpYWxpemVyIC0gVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIHN1bS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIHN1bSBvZiB0aGUgaW5pdGlhbGl6ZXIgd2l0aCB0aGUgZWxlbWVudHMgb2ZcbiAqIDxjb2RlPml0ZXJhYmxlPC9jb2RlPi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfc3VtICggaXRlcmFibGUgLCBpbml0aWFsaXplciApIHtcblxuXHRmb3IgKCBsZXQgaXRlbSBvZiBpdGVyYWJsZSApIGluaXRpYWxpemVyICs9IGl0ZW0gO1xuXG5cdHJldHVybiBpbml0aWFsaXplciA7XG5cbn1cbiJdfQ==