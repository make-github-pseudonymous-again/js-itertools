'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._zip2 = _zip2;

var _ = require('..');

var _marked = [_zip2].map(regeneratorRuntime.mark);

/**
 * Zips exactly two iterables together. Yields a tuple containing the first
 * element of each iterable, then a tupe containing the second element of each
 * iterable, etc.  Stops when one of the two iterables runs out of elements.
 *
 * @example
 * // returns [ [ 'a' , 1 ] , [ 'b' , 2 ] , [ 'c' , 3 ] ]
 * list( _zip2( 'abcd' , range(3) ) ) ;
 *
 * @param {Iterable} A - The first iterable.
 * @param {Iterable} B - The second iterable.
 * @returns {Iterator}
 *
 */
function _zip2(A, B) {
  var a, b;
  return regeneratorRuntime.wrap(function _zip2$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          A = (0, _.iter)(A);
          B = (0, _.iter)(B);

        case 2:
          if (!true) {
            _context.next = 13;
            break;
          }

          a = A.next();

          if (!a.done) {
            _context.next = 6;
            break;
          }

          return _context.abrupt('return');

        case 6:
          b = B.next();

          if (!b.done) {
            _context.next = 9;
            break;
          }

          return _context.abrupt('return');

        case 9:
          _context.next = 11;
          return [a.value, b.value];

        case 11:
          _context.next = 2;
          break;

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcDIuanMiXSwibmFtZXMiOlsiX3ppcDIiLCJBIiwiQiIsImEiLCJuZXh0IiwiZG9uZSIsImIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmlCQSxLLEdBQUFBLEs7O0FBaEJqQjs7ZUFnQmlCQSxLOztBQWRqQjs7Ozs7Ozs7Ozs7Ozs7QUFjTyxTQUFVQSxLQUFWLENBQWtCQyxDQUFsQixFQUFzQkMsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVORCxjQUFJLFlBQU1BLENBQU4sQ0FBSjtBQUNBQyxjQUFJLFlBQU1BLENBQU4sQ0FBSjs7QUFITTtBQUFBLGVBS0UsSUFMRjtBQUFBO0FBQUE7QUFBQTs7QUFPQ0MsV0FQRCxHQU9LRixFQUFFRyxJQUFGLEVBUEw7O0FBQUEsZUFRQUQsRUFBRUUsSUFSRjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVVDQyxXQVZELEdBVUtKLEVBQUVFLElBQUYsRUFWTDs7QUFBQSxlQVdBRSxFQUFFRCxJQVhGO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxpQkFhQyxDQUFFRixFQUFFSSxLQUFKLEVBQVlELEVBQUVDLEtBQWQsQ0FiRDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX3ppcDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBaaXBzIGV4YWN0bHkgdHdvIGl0ZXJhYmxlcyB0b2dldGhlci4gWWllbGRzIGEgdHVwbGUgY29udGFpbmluZyB0aGUgZmlyc3RcbiAqIGVsZW1lbnQgb2YgZWFjaCBpdGVyYWJsZSwgdGhlbiBhIHR1cGUgY29udGFpbmluZyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgZWFjaFxuICogaXRlcmFibGUsIGV0Yy4gIFN0b3BzIHdoZW4gb25lIG9mIHRoZSB0d28gaXRlcmFibGVzIHJ1bnMgb3V0IG9mIGVsZW1lbnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgWyAnYScgLCAxIF0gLCBbICdiJyAsIDIgXSAsIFsgJ2MnICwgMyBdIF1cbiAqIGxpc3QoIF96aXAyKCAnYWJjZCcgLCByYW5nZSgzKSApICkgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IEEgLSBUaGUgZmlyc3QgaXRlcmFibGUuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBCIC0gVGhlIHNlY29uZCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX3ppcDIgKCBBICwgQiApIHtcblxuXHRBID0gaXRlciggQSApIDtcblx0QiA9IGl0ZXIoIEIgKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgYSA9IEEubmV4dCgpIDtcblx0XHRpZiAoIGEuZG9uZSApIHJldHVybiA7XG5cblx0XHRjb25zdCBiID0gQi5uZXh0KCkgO1xuXHRcdGlmICggYi5kb25lICkgcmV0dXJuIDtcblxuXHRcdHlpZWxkIFsgYS52YWx1ZSAsIGIudmFsdWUgXSA7XG5cblx0fVxuXG59XG4iXX0=