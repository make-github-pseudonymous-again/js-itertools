"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaust = exhaust;
/**
 * Exhausts the input iterator.
 *
 * @example
 * let it = range( 1000 ) ;
 * exhaust( it ) ;
 * list( it ) ; // returns []
 *
 * @param {Iterator} iterator - The input iterator.
 *
 */
function exhaust(iterator) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
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
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2V4aGF1c3QuanMiXSwibmFtZXMiOlsiZXhoYXVzdCIsIml0ZXJhdG9yIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXZ0JBLE8sR0FBQUEsTztBQVhoQjs7Ozs7Ozs7Ozs7QUFXTyxTQUFTQSxPQUFULENBQW1CQyxRQUFuQixFQUE4QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFcEMseUJBQWtCQSxRQUFsQjtBQUFBLFVBQVVDLElBQVY7QUFBQTtBQUZvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXBDIiwiZmlsZSI6ImV4aGF1c3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4aGF1c3RzIHRoZSBpbnB1dCBpdGVyYXRvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogbGV0IGl0ID0gcmFuZ2UoIDEwMDAgKSA7XG4gKiBleGhhdXN0KCBpdCApIDtcbiAqIGxpc3QoIGl0ICkgOyAvLyByZXR1cm5zIFtdXG4gKlxuICogQHBhcmFtIHtJdGVyYXRvcn0gaXRlcmF0b3IgLSBUaGUgaW5wdXQgaXRlcmF0b3IuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhoYXVzdCAoIGl0ZXJhdG9yICkge1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhdG9yICkgO1xuXG59XG4iXX0=