"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reversed = reversed;

var _marked = [reversed].map(regeneratorRuntime.mark);

/**
 * Yields elements of the input iterable in reverse order.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator} - The input iterable, reversed.
 */
function reversed(iterable) {
  var buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, jz;

  return regeneratorRuntime.wrap(function reversed$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          buffer = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 4;


          for (_iterator = iterable[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            item = _step.value;
            buffer.push(item);
          } // caching length is believed to be faster

          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 12:
          _context.prev = 12;
          _context.prev = 13;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 15:
          _context.prev = 15;

          if (!_didIteratorError) {
            _context.next = 18;
            break;
          }

          throw _iteratorError;

        case 18:
          return _context.finish(15);

        case 19:
          return _context.finish(12);

        case 20:
          jz = buffer.length;

        case 21:
          if (!jz) {
            _context.next = 27;
            break;
          }

          _context.next = 24;
          return buffer.pop();

        case 24:
          --jz;
          _context.next = 21;
          break;

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[4, 8, 12, 20], [13,, 15, 19]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcmV2ZXJzZWQuanMiXSwibmFtZXMiOlsicmV2ZXJzZWQiLCJpdGVyYWJsZSIsImJ1ZmZlciIsIml0ZW0iLCJwdXNoIiwianoiLCJsZW5ndGgiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWlCQSxRLEdBQUFBLFE7O2VBQUFBLFE7O0FBTmpCOzs7Ozs7QUFNTyxTQUFVQSxRQUFWLENBQXFCQyxRQUFyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLGdCQUZFLEdBRU8sRUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFJTiwyQkFBa0JELFFBQWxCO0FBQVVFLGdCQUFWO0FBQTZCRCxtQkFBT0UsSUFBUCxDQUFhRCxJQUFiO0FBQTdCLFdBSk0sQ0FNTjs7QUFOTTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQVFGRSxZQVJFLEdBUUdILE9BQU9JLE1BUlY7O0FBQUE7QUFBQSxlQVVFRCxFQVZGO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBVW9CSCxPQUFPSyxHQUFQLEVBVnBCOztBQUFBO0FBVU8sWUFBRUYsRUFWVDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicmV2ZXJzZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFlpZWxkcyBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUgaW4gcmV2ZXJzZSBvcmRlci5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn0gLSBUaGUgaW5wdXQgaXRlcmFibGUsIHJldmVyc2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJldmVyc2VkICggaXRlcmFibGUgKSB7XG5cblx0bGV0IGJ1ZmZlciA9IFsgXSA7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSBidWZmZXIucHVzaCggaXRlbSApIDtcblxuXHQvLyBjYWNoaW5nIGxlbmd0aCBpcyBiZWxpZXZlZCB0byBiZSBmYXN0ZXJcblxuXHRsZXQganogPSBidWZmZXIubGVuZ3RoIDtcblxuXHRmb3IgKCA7IGp6IDsgLS1qeiApIHlpZWxkIGJ1ZmZlci5wb3AoICkgO1xuXG59XG4iXX0=