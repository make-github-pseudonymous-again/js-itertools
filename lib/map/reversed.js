"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reversed = reversed;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(reversed);

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
  }, _marked, this, [[4, 8, 12, 20], [13,, 15, 19]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcmV2ZXJzZWQuanMiXSwibmFtZXMiOlsicmV2ZXJzZWQiLCJpdGVyYWJsZSIsImJ1ZmZlciIsIml0ZW0iLCJwdXNoIiwianoiLCJsZW5ndGgiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWlCQSxRLEdBQUFBLFE7O21EQUFBQSxROztBQU5qQjs7Ozs7O0FBTU8sU0FBVUEsUUFBVixDQUFxQkMsUUFBckI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxnQkFGRSxHQUVPLEVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBSU4sMkJBQWtCRCxRQUFsQjtBQUFVRSxnQkFBVjtBQUE2QkQsbUJBQU9FLElBQVAsQ0FBYUQsSUFBYjtBQUE3QixXQUpNLENBTU47O0FBTk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFRRkUsWUFSRSxHQVFHSCxPQUFPSSxNQVJWOztBQUFBO0FBQUEsZUFVRUQsRUFWRjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQVVvQkgsT0FBT0ssR0FBUCxFQVZwQjs7QUFBQTtBQVVPLFlBQUVGLEVBVlQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InJldmVyc2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBZaWVsZHMgZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGluIHJldmVyc2Ugb3JkZXIuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9IC0gVGhlIGlucHV0IGl0ZXJhYmxlLCByZXZlcnNlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiByZXZlcnNlZCAoIGl0ZXJhYmxlICkge1xuXG5cdGxldCBidWZmZXIgPSBbIF0gO1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkgYnVmZmVyLnB1c2goIGl0ZW0gKSA7XG5cblx0Ly8gY2FjaGluZyBsZW5ndGggaXMgYmVsaWV2ZWQgdG8gYmUgZmFzdGVyXG5cblx0bGV0IGp6ID0gYnVmZmVyLmxlbmd0aCA7XG5cblx0Zm9yICggOyBqeiA7IC0tanogKSB5aWVsZCBidWZmZXIucG9wKCApIDtcblxufVxuIl19