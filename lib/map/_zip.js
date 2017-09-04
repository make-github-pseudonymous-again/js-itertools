'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._zip = _zip;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_zip);

/**
 * Zips iterables together. Yields a tuple containing the first element of each
 * iterable, then a tupe containing the second element of each iterable, etc.
 * Stops when one of the iterables runs out of elements.
 *
 * @example
 * // returns [ [ 'a' , 1 ] , [ 'b' , 2 ] , [ 'c' , 3 ] ]
 * list( _zip( [ 'abcd' , range(3) ] ) ) ;
 *
 * @param {Iterable[]} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
function _zip(iterables) {
  var iterators, buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, result;

  return regeneratorRuntime.wrap(function _zip$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          iterators = (0, _.list)((0, _.map)(_.iter, iterables));

          if (!(iterators.length === 0)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt('return');

        case 3:
          if (!true) {
            _context.next = 36;
            break;
          }

          buffer = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 8;
          _iterator = (0, _.map)(_._next, iterators)[Symbol.iterator]();

        case 10:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 18;
            break;
          }

          result = _step.value;

          if (!result.done) {
            _context.next = 14;
            break;
          }

          return _context.abrupt('return');

        case 14:

          buffer.push(result.value);

        case 15:
          _iteratorNormalCompletion = true;
          _context.next = 10;
          break;

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context['catch'](8);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 24:
          _context.prev = 24;
          _context.prev = 25;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 27:
          _context.prev = 27;

          if (!_didIteratorError) {
            _context.next = 30;
            break;
          }

          throw _iteratorError;

        case 30:
          return _context.finish(27);

        case 31:
          return _context.finish(24);

        case 32:
          _context.next = 34;
          return buffer;

        case 34:
          _context.next = 3;
          break;

        case 36:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[8, 20, 24, 32], [25,, 27, 31]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcC5qcyJdLCJuYW1lcyI6WyJfemlwIiwiaXRlcmFibGVzIiwiaXRlcmF0b3JzIiwibGVuZ3RoIiwiYnVmZmVyIiwicmVzdWx0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlaUJBLEksR0FBQUEsSTs7QUFmakI7O21EQWVpQkEsSTs7QUFiakI7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFVQSxJQUFWLENBQWlCQyxTQUFqQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLG1CQUZFLEdBRVUsWUFBTSxtQkFBWUQsU0FBWixDQUFOLENBRlY7O0FBQUEsZ0JBSURDLFVBQVVDLE1BQVYsS0FBcUIsQ0FKcEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxlQU1FLElBTkY7QUFBQTtBQUFBO0FBQUE7O0FBUURDLGdCQVJDLEdBUVEsRUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVWUsb0JBQWFGLFNBQWIsQ0FWZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVLRyxnQkFWTDs7QUFBQSxlQVlDQSxPQUFPQyxJQVpSO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQWNKRixpQkFBT0csSUFBUCxDQUFhRixPQUFPRyxLQUFwQjs7QUFkSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxpQkFrQkNKLE1BbEJEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfemlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIG1hcCAsIGl0ZXIgLCBfbmV4dCB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWmlwcyBpdGVyYWJsZXMgdG9nZXRoZXIuIFlpZWxkcyBhIHR1cGxlIGNvbnRhaW5pbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgZWFjaFxuICogaXRlcmFibGUsIHRoZW4gYSB0dXBlIGNvbnRhaW5pbmcgdGhlIHNlY29uZCBlbGVtZW50IG9mIGVhY2ggaXRlcmFibGUsIGV0Yy5cbiAqIFN0b3BzIHdoZW4gb25lIG9mIHRoZSBpdGVyYWJsZXMgcnVucyBvdXQgb2YgZWxlbWVudHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyBbICdhJyAsIDEgXSAsIFsgJ2InICwgMiBdICwgWyAnYycgLCAzIF0gXVxuICogbGlzdCggX3ppcCggWyAnYWJjZCcgLCByYW5nZSgzKSBdICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZVtdfSBpdGVyYWJsZXMgLSBUaGUgaXRlcmFibGVzIHRvIHppcC5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX3ppcCAoIGl0ZXJhYmxlcyApIHtcblxuXHRsZXQgaXRlcmF0b3JzID0gbGlzdCggbWFwKCBpdGVyICwgaXRlcmFibGVzICkgKSA7XG5cblx0aWYgKCBpdGVyYXRvcnMubGVuZ3RoID09PSAwICkgcmV0dXJuIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgYnVmZmVyID0gWyBdIDtcblxuXHRcdGZvciAoIGxldCByZXN1bHQgb2YgbWFwKCBfbmV4dCAsIGl0ZXJhdG9ycyApICkge1xuXG5cdFx0XHRpZiAoIHJlc3VsdC5kb25lICkgcmV0dXJuIDtcblxuXHRcdFx0YnVmZmVyLnB1c2goIHJlc3VsdC52YWx1ZSApIDtcblxuXHRcdH1cblxuXHRcdHlpZWxkIGJ1ZmZlciA7XG5cblx0fVxuXG59XG4iXX0=