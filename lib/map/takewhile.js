"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takewhile = takewhile;

var _marked = [takewhile].map(regeneratorRuntime.mark);

/**
 * Output elements of the input iterable while the current element satisfies the
 * input predicate.
 *
 * @param {Function} predicate - The input predicate.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function takewhile(predicate, iterable) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.wrap(function takewhile$(_context) {
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
            _context.next = 14;
            break;
          }

          item = _step.value;

          if (predicate(item)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return");

        case 9:
          _context.next = 11;
          return item;

        case 11:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 20:
          _context.prev = 20;
          _context.prev = 21;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 23:
          _context.prev = 23;

          if (!_didIteratorError) {
            _context.next = 26;
            break;
          }

          throw _iteratorError;

        case 26:
          return _context.finish(23);

        case 27:
          return _context.finish(20);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[3, 16, 20, 28], [21,, 23, 27]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvdGFrZXdoaWxlLmpzIl0sIm5hbWVzIjpbInRha2V3aGlsZSIsInByZWRpY2F0ZSIsIml0ZXJhYmxlIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFRaUJBLFMsR0FBQUEsUzs7ZUFBQUEsUzs7QUFSakI7Ozs7Ozs7O0FBUU8sU0FBVUEsU0FBVixDQUFzQkMsU0FBdEIsRUFBa0NDLFFBQWxDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVZQSxRQUZaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLGNBRko7O0FBQUEsY0FJQ0YsVUFBV0UsSUFBWCxDQUpEO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxpQkFNQ0EsSUFORDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InRha2V3aGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogT3V0cHV0IGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSB3aGlsZSB0aGUgY3VycmVudCBlbGVtZW50IHNhdGlzZmllcyB0aGVcbiAqIGlucHV0IHByZWRpY2F0ZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgLSBUaGUgaW5wdXQgcHJlZGljYXRlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogdGFrZXdoaWxlICggcHJlZGljYXRlICwgaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB7XG5cblx0XHRpZiAoICFwcmVkaWNhdGUoIGl0ZW0gKSApIHJldHVybiA7XG5cblx0XHR5aWVsZCBpdGVtIDtcblxuXHR9XG5cbn1cbiJdfQ==