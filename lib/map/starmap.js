"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.starmap = starmap;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(starmap);

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
  }, _marked, this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvc3Rhcm1hcC5qcyJdLCJuYW1lcyI6WyJzdGFybWFwIiwiY2FsbGFibGUiLCJpdGVyYWJsZSIsImFyZ3MiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXaUJBLE8sR0FBQUEsTzs7bURBQUFBLE87O0FBWGpCOzs7Ozs7Ozs7OztBQVdPLFNBQVVBLE9BQVYsQ0FBb0JDLFFBQXBCLEVBQStCQyxRQUEvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFWUEsUUFGWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVJQyxjQUZKO0FBQUE7QUFBQSxpQkFFNkJGLFNBQVNHLEtBQVQsQ0FBZ0IsSUFBaEIsRUFBdUJELElBQXZCLENBRjdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3Rhcm1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2FtZSBhcyB7QGxpbmsgbWFwfSBidXQgYWxsb3dzIG11bHRpcGxlIGFyZ3VtZW50cyBjYWxsYWJsZSBmdW5jdGlvbnMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybiBbIDAgLCAxICwgNCAsIDkgXVxuICogbGlzdCggc3Rhcm1hcCggKCB4ICwgeSApID0+IHgqeSAsIHppcCggcmFuZ2UoIDQgKSAsIHJhbmdlKCA0ICkgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYWJsZSAtIFRoZSBjYWxsYWJsZSB0byB1c2UuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBzdGFybWFwICggY2FsbGFibGUgLCBpdGVyYWJsZSApIHtcblxuXHRmb3IgKCBsZXQgYXJncyBvZiBpdGVyYWJsZSApIHlpZWxkIGNhbGxhYmxlLmFwcGx5KCBudWxsICwgYXJncyApIDtcblx0Ly9mb3IgKCBsZXQgYXJncyBvZiBpdGVyYWJsZSApIHlpZWxkIGNhbGxhYmxlKCAuLi4gKSA7XG5cbn1cbiJdfQ==