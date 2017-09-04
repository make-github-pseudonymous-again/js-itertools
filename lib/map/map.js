"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(map);

/**
 * Applies a given callable to each of the elements of the input iterable.
 *
 * @example
 * // return [ 0 , 1 , 4 , 9 ]
 * list( map( x => x**2 , range( 4 ) ) ) ;
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function map(callable, iterable) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.wrap(function map$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = iterable[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 12;
            break;
          }

          item = _step.value;
          _context.next = 9;
          return callable(item);

        case 9:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 18:
          _context.prev = 18;
          _context.prev = 19;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 21:
          _context.prev = 21;

          if (!_didIteratorError) {
            _context.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return _context.finish(21);

        case 25:
          return _context.finish(18);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsImNhbGxhYmxlIiwiaXRlcmFibGUiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsRyxHQUFBQSxHOzttREFBQUEsRzs7QUFYakI7Ozs7Ozs7Ozs7O0FBV08sU0FBVUEsR0FBVixDQUFnQkMsUUFBaEIsRUFBMkJDLFFBQTNCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVZQSxRQUZaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLGNBRko7QUFBQTtBQUFBLGlCQUU2QkYsU0FBVUUsSUFBVixDQUY3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Im1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXBwbGllcyBhIGdpdmVuIGNhbGxhYmxlIHRvIGVhY2ggb2YgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJuIFsgMCAsIDEgLCA0ICwgOSBdXG4gKiBsaXN0KCBtYXAoIHggPT4geCoqMiAsIHJhbmdlKCA0ICkgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYWJsZSAtIFRoZSBjYWxsYWJsZSB0byB1c2UuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBtYXAgKCBjYWxsYWJsZSAsIGl0ZXJhYmxlICkge1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkgeWllbGQgY2FsbGFibGUoIGl0ZW0gKSA7XG5cbn1cbiJdfQ==