"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ncycle = ncycle;

var _marked = [ncycle].map(regeneratorRuntime.mark);

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
  }, _marked[0], this, [[4, 16, 20, 28], [21,, 23, 27]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL25jeWNsZS5qcyJdLCJuYW1lcyI6WyJuY3ljbGUiLCJpdGVyYWJsZSIsIm4iLCJidWZmZXIiLCJpdGVtIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZaUJBLE0sR0FBQUEsTTs7ZUFBQUEsTTs7QUFaakI7Ozs7Ozs7Ozs7OztBQVlPLFNBQVVBLE1BQVYsQ0FBbUJDLFFBQW5CLEVBQThCQyxDQUE5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLGdCQUZFLEdBRU8sRUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSVlGLFFBSlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJSUcsY0FKSjtBQUFBO0FBQUEsaUJBTUNBLElBTkQ7O0FBQUE7QUFPTEQsaUJBQU9FLElBQVAsQ0FBYUQsSUFBYjs7QUFQSztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ0JBV0RELE9BQU9HLE1BQVAsS0FBa0IsQ0FYakI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxnQkFhRSxFQUFFSixDQUFGLEdBQU0sQ0FiUjtBQUFBO0FBQUE7QUFBQTs7QUFBQSx3Q0FhbUJDLE1BYm5COztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJuY3ljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNhbWUgYXMge0BsaW5rIGN5Y2xlfSBidXQgb25seSBjeWNsZXMgYSBsaW1pdGVkIG51bWJlciBvZiB0aW1lcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMCwxLDAsMSwwLDEsMCwxXVxuICogbGlzdChuY3ljbGUocmFuZ2UoMiksNCkpIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0byBjeWNsZSB0aHJvdWdoIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogbmN5Y2xlICggaXRlcmFibGUgLCBuICkge1xuXG5cdGxldCBidWZmZXIgPSBbIF0gO1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkge1xuXG5cdFx0eWllbGQgaXRlbSA7XG5cdFx0YnVmZmVyLnB1c2goIGl0ZW0gKSA7XG5cblx0fVxuXG5cdGlmICggYnVmZmVyLmxlbmd0aCA9PT0gMCApIHJldHVybiA7XG5cblx0d2hpbGUgKCAtLW4gPiAwICkgeWllbGQqIGJ1ZmZlciA7XG5cbn1cbiJdfQ==