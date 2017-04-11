"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.any = any;
/**
 * Returns true if any of the elements of the input iterable is truthy.
 *
 * @example
 * any( repeat( true ) ) ; // returns true
 *
 * @example
 * any( repeat( false ) ) ; // loops forever
 *
 * @example
 * any( nrepeat( false , 10 ) ) ; // returns false
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Boolean} Returns <code>true</code> if any element of
 * <code>iterable</code> is truthy, <code>false</code> otherwise.
 */
function any(iterable) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;


      if (item) return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvYW55LmpzIl0sIm5hbWVzIjpbImFueSIsIml0ZXJhYmxlIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxHLEdBQUFBLEc7QUFoQmhCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFaEMseUJBQWtCQSxRQUFsQiw4SEFBNkI7QUFBQSxVQUFuQkMsSUFBbUI7OztBQUU1QixVQUFLQSxJQUFMLEVBQVksT0FBTyxJQUFQO0FBRVo7QUFOK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRaEMsU0FBTyxLQUFQO0FBRUEiLCJmaWxlIjoiYW55LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYW55IG9mIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUgaXMgdHJ1dGh5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBhbnkoIHJlcGVhdCggdHJ1ZSApICkgOyAvLyByZXR1cm5zIHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogYW55KCByZXBlYXQoIGZhbHNlICkgKSA7IC8vIGxvb3BzIGZvcmV2ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogYW55KCBucmVwZWF0KCBmYWxzZSAsIDEwICkgKSA7IC8vIHJldHVybnMgZmFsc2VcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIGFueSBlbGVtZW50IG9mXG4gKiA8Y29kZT5pdGVyYWJsZTwvY29kZT4gaXMgdHJ1dGh5LCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYW55ICggaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB7XG5cblx0XHRpZiAoIGl0ZW0gKSByZXR1cm4gdHJ1ZSA7XG5cblx0fVxuXG5cdHJldHVybiBmYWxzZSA7XG5cbn1cbiJdfQ==