"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closure = closure;

var _marked = [closure].map(regeneratorRuntime.mark);

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
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRyYS9jbG9zdXJlLmpzIl0sIm5hbWVzIjpbImNsb3N1cmUiLCJvcGVyYXRvciIsInN0YXJ0IiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmlCQSxPLEdBQUFBLE87O2VBQUFBLE87O0FBakJqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk8sU0FBVUEsT0FBVixDQUFvQkMsUUFBcEIsRUFBK0JDLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUFBLEtBRkE7O0FBQUE7QUFJRkMsaUJBSkUsR0FJUUQsS0FKUjs7QUFBQTtBQUFBLGVBTUUsSUFORjtBQUFBO0FBQUE7QUFBQTs7QUFRTEMsb0JBQVVGLFNBQVNFLE9BQVQsQ0FBVjs7QUFSSztBQUFBLGlCQVVDQSxPQVZEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjbG9zdXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21wdXRlcyB0aGUgY2xvc3VyZSBvZiBhIHVuYXJ5IG9wZXJhdG9yLCBzdGFydGluZyBmcm9tIGEgc2luZ2xlIGVsZW1lbnQuXG4gKlxuICogQGV4cGVyaW1lbnRhbCBTaG91bGQgaGFuZGxlIGQtYXJ5IG9wZXJhdG9ycyBpbiB0aGUgZnV0dXJlLiBOb3Qgc3VyZSB0aGUgbmFtZVxuICogaXMgd2VsbCBjaG9zZW4uIEFuIGFjdHVhbCBjbG9zdXJlIGZ1bmN0aW9uIHdvdWxkIGtlZXAgdHJhY2sgb2YgZW5jb3VudGVyZWRcbiAqIGVsZW1lbnRzIHRvIHN0b3Agd2hlbiBhbGwgZWxlbWVudHMgaGF2ZSBiZWVuIGZvdW5kLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjbG9zdXJlKCB4ID0+IHggKyAxICwgMCApIDsgLy8gMCAxIDIgMyAuLi5cbiAqXG4gKiBAZXhhbXBsZVxuICogY2xvc3VyZSggeCA9PiB4ICogMiAsIDEgKSA7IC8vIDEgMiA0IDggLi4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3BlcmF0b3IgVGhlIG9wZXJhdG9yLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXJ0IFRoZSBzdGFydGluZyBlbGVtZW50LlxuICogQHJldHVybnMge0l0ZXJhdG9yfSBJdGVyYXRvciBvdmVyIHRoZSBjbG9zdXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIGNsb3N1cmUgKCBvcGVyYXRvciAsIHN0YXJ0ICkge1xuXG5cdHlpZWxkIHN0YXJ0IDtcblxuXHRsZXQgZWxlbWVudCA9IHN0YXJ0IDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRlbGVtZW50ID0gb3BlcmF0b3IoZWxlbWVudCkgO1xuXG5cdFx0eWllbGQgZWxlbWVudCA7XG5cblx0fVxuXG59XG4iXX0=