"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
/**
 * Returns true if all of the elements of the input iterable are truthy.
 *
 * @example
 * all( repeat( true ) ) ; // loops forever
 *
 * @example
 * all( repeat( false ) ) ; // returns false
 *
 * @example
 * all( chain( [ nrepeat( true , 10 ) , repeat( false ) ) ) ; // returns false
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Boolean} Returns <code>true</code> if all element of
 * <code>iterable</code> are truthy, <code>false</code> otherwise.
 */
function all(iterable) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;


      if (!item) return false;
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

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvYWxsLmpzIl0sIm5hbWVzIjpbImFsbCIsIml0ZXJhYmxlIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxHLEdBQUFBLEc7QUFoQmhCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFaEMseUJBQWtCQSxRQUFsQiw4SEFBNkI7QUFBQSxVQUFuQkMsSUFBbUI7OztBQUU1QixVQUFLLENBQUNBLElBQU4sRUFBYSxPQUFPLEtBQVA7QUFFYjtBQU4rQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFoQyxTQUFPLElBQVA7QUFFQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgb2YgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBhcmUgdHJ1dGh5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBhbGwoIHJlcGVhdCggdHJ1ZSApICkgOyAvLyBsb29wcyBmb3JldmVyXG4gKlxuICogQGV4YW1wbGVcbiAqIGFsbCggcmVwZWF0KCBmYWxzZSApICkgOyAvLyByZXR1cm5zIGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIGFsbCggY2hhaW4oIFsgbnJlcGVhdCggdHJ1ZSAsIDEwICkgLCByZXBlYXQoIGZhbHNlICkgKSApIDsgLy8gcmV0dXJucyBmYWxzZVxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgYWxsIGVsZW1lbnQgb2ZcbiAqIDxjb2RlPml0ZXJhYmxlPC9jb2RlPiBhcmUgdHJ1dGh5LCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxsICggaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB7XG5cblx0XHRpZiAoICFpdGVtICkgcmV0dXJuIGZhbHNlIDtcblxuXHR9XG5cblx0cmV0dXJuIHRydWUgO1xuXG59XG4iXX0=