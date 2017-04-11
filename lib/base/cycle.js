"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = cycle;

var _marked = [cycle].map(regeneratorRuntime.mark);

/**
 * Cycles through the input iterable.
 *
 * @example
 * // returns [0,1,0,1,0,1,0]
 * list(head(cycle(range(2)),7)) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
function cycle(iterable) {
  var buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.wrap(function cycle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          buffer = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 4;
          _iterator = iterable[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 14;
            break;
          }

          item = _step.value;
          _context.next = 10;
          return item;

        case 10:
          buffer.push(item);

        case 11:
          _iteratorNormalCompletion = true;
          _context.next = 6;
          break;

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](4);
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
          if (!(buffer.length === 0)) {
            _context.next = 30;
            break;
          }

          return _context.abrupt("return");

        case 30:
          if (!true) {
            _context.next = 34;
            break;
          }

          return _context.delegateYield(buffer, "t1", 32);

        case 32:
          _context.next = 30;
          break;

        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[4, 16, 20, 28], [21,, 23, 27]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2N5Y2xlLmpzIl0sIm5hbWVzIjpbImN5Y2xlIiwiaXRlcmFibGUiLCJidWZmZXIiLCJpdGVtIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXaUJBLEssR0FBQUEsSzs7ZUFBQUEsSzs7QUFYakI7Ozs7Ozs7Ozs7O0FBV08sU0FBVUEsS0FBVixDQUFrQkMsUUFBbEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxnQkFGRSxHQUVPLEVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUlZRCxRQUpaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUlFLGNBSko7QUFBQTtBQUFBLGlCQU1DQSxJQU5EOztBQUFBO0FBT0xELGlCQUFPRSxJQUFQLENBQWFELElBQWI7O0FBUEs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdCQVdERCxPQUFPRyxNQUFQLEtBQWtCLENBWGpCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsZUFhRSxJQWJGO0FBQUE7QUFBQTtBQUFBOztBQUFBLHdDQWFnQkgsTUFiaEI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImN5Y2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDeWNsZXMgdGhyb3VnaCB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzAsMSwwLDEsMCwxLDBdXG4gKiBsaXN0KGhlYWQoY3ljbGUocmFuZ2UoMikpLDcpKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIGN5Y2xlICggaXRlcmFibGUgKSB7XG5cblx0bGV0IGJ1ZmZlciA9IFsgXSA7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB7XG5cblx0XHR5aWVsZCBpdGVtIDtcblx0XHRidWZmZXIucHVzaCggaXRlbSApIDtcblxuXHR9XG5cblx0aWYgKCBidWZmZXIubGVuZ3RoID09PSAwICkgcmV0dXJuIDtcblxuXHR3aGlsZSAoIHRydWUgKSB5aWVsZCogYnVmZmVyIDtcblxufVxuIl19