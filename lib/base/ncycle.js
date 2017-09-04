"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ncycle = ncycle;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(ncycle);

/**
 * Same as {@link cycle} but only cycles a limited number of times.
 *
 * @example
 * // returns [0,1,0,1,0,1,0,1]
 * list(ncycle(range(2),4)) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of times to cycle through the input iterable.
 * @returns {Iterator}
 *
 */
function ncycle(iterable, n) {
  var buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.wrap(function ncycle$(_context) {
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
          if (!(--n > 0)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL25jeWNsZS5qcyJdLCJuYW1lcyI6WyJuY3ljbGUiLCJpdGVyYWJsZSIsIm4iLCJidWZmZXIiLCJpdGVtIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZaUJBLE0sR0FBQUEsTTs7bURBQUFBLE07O0FBWmpCOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFVQSxNQUFWLENBQW1CQyxRQUFuQixFQUE4QkMsQ0FBOUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxnQkFGRSxHQUVPLEVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUlZRixRQUpaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUlHLGNBSko7QUFBQTtBQUFBLGlCQU1DQSxJQU5EOztBQUFBO0FBT0xELGlCQUFPRSxJQUFQLENBQWFELElBQWI7O0FBUEs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdCQVdERCxPQUFPRyxNQUFQLEtBQWtCLENBWGpCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsZ0JBYUUsRUFBRUosQ0FBRixHQUFNLENBYlI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0NBYW1CQyxNQWJuQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoibmN5Y2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTYW1lIGFzIHtAbGluayBjeWNsZX0gYnV0IG9ubHkgY3ljbGVzIGEgbGltaXRlZCBudW1iZXIgb2YgdGltZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzAsMSwwLDEsMCwxLDAsMV1cbiAqIGxpc3QobmN5Y2xlKHJhbmdlKDIpLDQpKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gY3ljbGUgdGhyb3VnaCB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIG5jeWNsZSAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRsZXQgYnVmZmVyID0gWyBdIDtcblxuXHRmb3IgKCBsZXQgaXRlbSBvZiBpdGVyYWJsZSApIHtcblxuXHRcdHlpZWxkIGl0ZW0gO1xuXHRcdGJ1ZmZlci5wdXNoKCBpdGVtICkgO1xuXG5cdH1cblxuXHRpZiAoIGJ1ZmZlci5sZW5ndGggPT09IDAgKSByZXR1cm4gO1xuXG5cdHdoaWxlICggLS1uID4gMCApIHlpZWxkKiBidWZmZXIgO1xuXG59XG4iXX0=