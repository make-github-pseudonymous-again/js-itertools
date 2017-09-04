"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = cycle;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(cycle);

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
  }, _marked, this, [[4, 16, 20, 28], [21,, 23, 27]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2N5Y2xlLmpzIl0sIm5hbWVzIjpbImN5Y2xlIiwiaXRlcmFibGUiLCJidWZmZXIiLCJpdGVtIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXaUJBLEssR0FBQUEsSzs7bURBQUFBLEs7O0FBWGpCOzs7Ozs7Ozs7OztBQVdPLFNBQVVBLEtBQVYsQ0FBa0JDLFFBQWxCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRkMsZ0JBRkUsR0FFTyxFQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFJWUQsUUFKWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlJRSxjQUpKO0FBQUE7QUFBQSxpQkFNQ0EsSUFORDs7QUFBQTtBQU9MRCxpQkFBT0UsSUFBUCxDQUFhRCxJQUFiOztBQVBLO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxnQkFXREQsT0FBT0csTUFBUCxLQUFrQixDQVhqQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLGVBYUUsSUFiRjtBQUFBO0FBQUE7QUFBQTs7QUFBQSx3Q0FhZ0JILE1BYmhCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjeWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3ljbGVzIHRocm91Z2ggdGhlIGlucHV0IGl0ZXJhYmxlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFswLDEsMCwxLDAsMSwwXVxuICogbGlzdChoZWFkKGN5Y2xlKHJhbmdlKDIpKSw3KSkgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBjeWNsZSAoIGl0ZXJhYmxlICkge1xuXG5cdGxldCBidWZmZXIgPSBbIF0gO1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkge1xuXG5cdFx0eWllbGQgaXRlbSA7XG5cdFx0YnVmZmVyLnB1c2goIGl0ZW0gKSA7XG5cblx0fVxuXG5cdGlmICggYnVmZmVyLmxlbmd0aCA9PT0gMCApIHJldHVybiA7XG5cblx0d2hpbGUgKCB0cnVlICkgeWllbGQqIGJ1ZmZlciA7XG5cbn1cbiJdfQ==