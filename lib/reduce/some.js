"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.some = some;

/**
 * Returns true if at least some of the elements of the input iterable are
 * truthy.
 *
 * @example
 * some( repeat( true ) , 100 ) ; // returns true
 *
 * @example
 * some( repeat( false ) , 0 ) ; // returns true
 *
 * @example
 * some( repeat( false ) , 10 ) ; // loops forever
 *
 * @example
 * some( nrepeat( true , 10 ) , 11 ) ; // returns false
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements that should be truthy.
 * @returns {Boolean} Returns <code>true</code> if at least <code>n</code>
 * elements of <code>iterable</code> are truthy, <code>false</code> otherwise.
 */

function some(iterable, n) {

  if (n <= 0) return true;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;


      if (item && --n === 0) return true;
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

  return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Uvc29tZS5qcyJdLCJuYW1lcyI6WyJzb21lIiwiaXRlcmFibGUiLCJuIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUF1QmdCQSxJLEdBQUFBLEk7O0FBdEJoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCTyxTQUFTQSxJQUFULENBQWdCQyxRQUFoQixFQUEyQkMsQ0FBM0IsRUFBK0I7O0FBRXJDLE1BQUtBLEtBQUssQ0FBVixFQUFjLE9BQU8sSUFBUDs7QUFGdUI7QUFBQTtBQUFBOztBQUFBO0FBSXJDLHlCQUFrQkQsUUFBbEIsOEhBQTZCO0FBQUEsVUFBbkJFLElBQW1COzs7QUFFNUIsVUFBS0EsUUFBUSxFQUFFRCxDQUFGLEtBQVEsQ0FBckIsRUFBeUIsT0FBTyxJQUFQO0FBRXpCO0FBUm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXJDLFNBQU8sS0FBUDtBQUVBIiwiZmlsZSI6InNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IHNvbWUgb2YgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBhcmVcbiAqIHRydXRoeS5cbiAqXG4gKiBAZXhhbXBsZVxuICogc29tZSggcmVwZWF0KCB0cnVlICkgLCAxMDAgKSA7IC8vIHJldHVybnMgdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBzb21lKCByZXBlYXQoIGZhbHNlICkgLCAwICkgOyAvLyByZXR1cm5zIHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogc29tZSggcmVwZWF0KCBmYWxzZSApICwgMTAgKSA7IC8vIGxvb3BzIGZvcmV2ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogc29tZSggbnJlcGVhdCggdHJ1ZSAsIDEwICkgLCAxMSApIDsgLy8gcmV0dXJucyBmYWxzZVxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIHRydXRoeS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIGF0IGxlYXN0IDxjb2RlPm48L2NvZGU+XG4gKiBlbGVtZW50cyBvZiA8Y29kZT5pdGVyYWJsZTwvY29kZT4gYXJlIHRydXRoeSwgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc29tZSAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRpZiAoIG4gPD0gMCApIHJldHVybiB0cnVlIDtcblxuXHRmb3IgKCBsZXQgaXRlbSBvZiBpdGVyYWJsZSApIHtcblxuXHRcdGlmICggaXRlbSAmJiAtLW4gPT09IDAgKSByZXR1cm4gdHJ1ZSA7XG5cblx0fVxuXG5cdHJldHVybiBmYWxzZSA7XG5cbn1cbiJdfQ==