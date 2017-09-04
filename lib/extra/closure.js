"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closure = closure;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(closure);

/**
 * Computes the closure of a unary operator, starting from a single element.
 *
 * @experimental Should handle d-ary operators in the future. Not sure the name
 * is well chosen. An actual closure function would keep track of encountered
 * elements to stop when all elements have been found.
 *
 * @example
 * closure( x => x + 1 , 0 ) ; // 0 1 2 3 ...
 *
 * @example
 * closure( x => x * 2 , 1 ) ; // 1 2 4 8 ...
 *
 * @param {Function} operator The operator.
 * @param {Object} start The starting element.
 * @returns {Iterator} Iterator over the closure.
 */
function closure(operator, start) {
  var element;
  return regeneratorRuntime.wrap(function closure$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return start;

        case 2:
          element = start;

        case 3:
          if (!true) {
            _context.next = 9;
            break;
          }

          element = operator(element);

          _context.next = 7;
          return element;

        case 7:
          _context.next = 3;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRyYS9jbG9zdXJlLmpzIl0sIm5hbWVzIjpbImNsb3N1cmUiLCJvcGVyYXRvciIsInN0YXJ0IiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmlCQSxPLEdBQUFBLE87O21EQUFBQSxPOztBQWpCakI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFNBQVVBLE9BQVYsQ0FBb0JDLFFBQXBCLEVBQStCQyxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBQSxLQUZBOztBQUFBO0FBSUZDLGlCQUpFLEdBSVFELEtBSlI7O0FBQUE7QUFBQSxlQU1FLElBTkY7QUFBQTtBQUFBO0FBQUE7O0FBUUxDLG9CQUFVRixTQUFTRSxPQUFULENBQVY7O0FBUks7QUFBQSxpQkFVQ0EsT0FWRDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2xvc3VyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tcHV0ZXMgdGhlIGNsb3N1cmUgb2YgYSB1bmFyeSBvcGVyYXRvciwgc3RhcnRpbmcgZnJvbSBhIHNpbmdsZSBlbGVtZW50LlxuICpcbiAqIEBleHBlcmltZW50YWwgU2hvdWxkIGhhbmRsZSBkLWFyeSBvcGVyYXRvcnMgaW4gdGhlIGZ1dHVyZS4gTm90IHN1cmUgdGhlIG5hbWVcbiAqIGlzIHdlbGwgY2hvc2VuLiBBbiBhY3R1YWwgY2xvc3VyZSBmdW5jdGlvbiB3b3VsZCBrZWVwIHRyYWNrIG9mIGVuY291bnRlcmVkXG4gKiBlbGVtZW50cyB0byBzdG9wIHdoZW4gYWxsIGVsZW1lbnRzIGhhdmUgYmVlbiBmb3VuZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogY2xvc3VyZSggeCA9PiB4ICsgMSAsIDAgKSA7IC8vIDAgMSAyIDMgLi4uXG4gKlxuICogQGV4YW1wbGVcbiAqIGNsb3N1cmUoIHggPT4geCAqIDIgLCAxICkgOyAvLyAxIDIgNCA4IC4uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wZXJhdG9yIFRoZSBvcGVyYXRvci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFydCBUaGUgc3RhcnRpbmcgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn0gSXRlcmF0b3Igb3ZlciB0aGUgY2xvc3VyZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBjbG9zdXJlICggb3BlcmF0b3IgLCBzdGFydCApIHtcblxuXHR5aWVsZCBzdGFydCA7XG5cblx0bGV0IGVsZW1lbnQgPSBzdGFydCA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0ZWxlbWVudCA9IG9wZXJhdG9yKGVsZW1lbnQpIDtcblxuXHRcdHlpZWxkIGVsZW1lbnQgO1xuXG5cdH1cblxufVxuIl19