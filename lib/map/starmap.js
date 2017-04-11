"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.starmap = starmap;

var _marked = [starmap].map(regeneratorRuntime.mark);

/**
 * Same as {@link map} but allows multiple arguments callable functions.
 *
 * @example
 * // return [ 0 , 1 , 4 , 9 ]
 * list( starmap( ( x , y ) => x*y , zip( range( 4 ) , range( 4 ) ) ) ;
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function starmap(callable, iterable) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, args;

  return regeneratorRuntime.wrap(function starmap$(_context) {
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

          args = _step.value;
          _context.next = 9;
          return callable.apply(null, args);

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
  }, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvc3Rhcm1hcC5qcyJdLCJuYW1lcyI6WyJzdGFybWFwIiwiY2FsbGFibGUiLCJpdGVyYWJsZSIsImFyZ3MiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXaUJBLE8sR0FBQUEsTzs7ZUFBQUEsTzs7QUFYakI7Ozs7Ozs7Ozs7O0FBV08sU0FBVUEsT0FBVixDQUFvQkMsUUFBcEIsRUFBK0JDLFFBQS9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVZQSxRQUZaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLGNBRko7QUFBQTtBQUFBLGlCQUU2QkYsU0FBU0csS0FBVCxDQUFnQixJQUFoQixFQUF1QkQsSUFBdkIsQ0FGN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGFybWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTYW1lIGFzIHtAbGluayBtYXB9IGJ1dCBhbGxvd3MgbXVsdGlwbGUgYXJndW1lbnRzIGNhbGxhYmxlIGZ1bmN0aW9ucy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJuIFsgMCAsIDEgLCA0ICwgOSBdXG4gKiBsaXN0KCBzdGFybWFwKCAoIHggLCB5ICkgPT4geCp5ICwgemlwKCByYW5nZSggNCApICwgcmFuZ2UoIDQgKSApICkgO1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxhYmxlIC0gVGhlIGNhbGxhYmxlIHRvIHVzZS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHN0YXJtYXAgKCBjYWxsYWJsZSAsIGl0ZXJhYmxlICkge1xuXG5cdGZvciAoIGxldCBhcmdzIG9mIGl0ZXJhYmxlICkgeWllbGQgY2FsbGFibGUuYXBwbHkoIG51bGwgLCBhcmdzICkgO1xuXHQvL2ZvciAoIGxldCBhcmdzIG9mIGl0ZXJhYmxlICkgeWllbGQgY2FsbGFibGUoIC4uLiApIDtcblxufVxuIl19