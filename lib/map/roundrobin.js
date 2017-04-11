'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundrobin = roundrobin;

var _ = require('..');

var _marked = [roundrobin].map(regeneratorRuntime.mark);

/**
 * Yields the first item of the first input iterable, then the first item of
 * the second input iterable, etc., until the last input iterable. Then start
 * again with the second item of the first input iterable, etc. If one of the
 * input iterable is exhausted, it is removed from the list of input iterables
 * and the algorithm continues until all input iterables have been exhausted.
 *
 * @example
 * // returns ['A','D','E','B','F','C]
 * list( roundrobin(['ABC', 'D', 'EF']) )
 *
 * @param {Iterable[]} iterables - The input iterables.
 * @returns {Iterator}
 *
 */
function roundrobin(iterables) {
  var pending, iterators, iterator, it;
  return regeneratorRuntime.wrap(function roundrobin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          pending = (0, _.len)(iterables);
          iterators = (0, _.cycle)((0, _.map)(_.iter, iterables));

        case 2:
          if (!pending) {
            _context.next = 16;
            break;
          }

        case 3:
          if (!true) {
            _context.next = 12;
            break;
          }

          iterator = iterators.next().value;
          it = iterator.next();

          if (!it.done) {
            _context.next = 8;
            break;
          }

          return _context.abrupt('break', 12);

        case 8:
          _context.next = 10;
          return it.value;

        case 10:
          _context.next = 3;
          break;

        case 12:

          --pending;

          iterators = (0, _.cycle)((0, _.slice)(iterators, 0, pending, 1));

          _context.next = 2;
          break;

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcm91bmRyb2Jpbi5qcyJdLCJuYW1lcyI6WyJyb3VuZHJvYmluIiwiaXRlcmFibGVzIiwicGVuZGluZyIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yIiwibmV4dCIsInZhbHVlIiwiaXQiLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7OztRQWlCaUJBLFUsR0FBQUEsVTs7QUFqQmpCOztlQWlCaUJBLFU7O0FBZmpCOzs7Ozs7Ozs7Ozs7Ozs7QUFlTyxTQUFVQSxVQUFWLENBQXVCQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRkMsaUJBRkUsR0FFUSxXQUFLRCxTQUFMLENBRlI7QUFJRkUsbUJBSkUsR0FJVSxhQUFPLG1CQUFZRixTQUFaLENBQVAsQ0FKVjs7QUFBQTtBQUFBLGVBTUVDLE9BTkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxlQVFHLElBUkg7QUFBQTtBQUFBO0FBQUE7O0FBVUFFLGtCQVZBLEdBVVdELFVBQVVFLElBQVYsR0FBaUJDLEtBVjVCO0FBWUFDLFlBWkEsR0FZS0gsU0FBU0MsSUFBVCxFQVpMOztBQUFBLGVBY0NFLEdBQUdDLElBZEo7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlCQWdCRUQsR0FBR0QsS0FoQkw7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQW9CTCxZQUFFSixPQUFGOztBQUVBQyxzQkFBWSxhQUFPLGFBQU9BLFNBQVAsRUFBbUIsQ0FBbkIsRUFBdUJELE9BQXZCLEVBQWlDLENBQWpDLENBQVAsQ0FBWjs7QUF0Qks7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJyb3VuZHJvYmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciAsIGxlbiAsIGN5Y2xlICwgbWFwICwgc2xpY2UgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIFlpZWxkcyB0aGUgZmlyc3QgaXRlbSBvZiB0aGUgZmlyc3QgaW5wdXQgaXRlcmFibGUsIHRoZW4gdGhlIGZpcnN0IGl0ZW0gb2ZcbiAqIHRoZSBzZWNvbmQgaW5wdXQgaXRlcmFibGUsIGV0Yy4sIHVudGlsIHRoZSBsYXN0IGlucHV0IGl0ZXJhYmxlLiBUaGVuIHN0YXJ0XG4gKiBhZ2FpbiB3aXRoIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZmlyc3QgaW5wdXQgaXRlcmFibGUsIGV0Yy4gSWYgb25lIG9mIHRoZVxuICogaW5wdXQgaXRlcmFibGUgaXMgZXhoYXVzdGVkLCBpdCBpcyByZW1vdmVkIGZyb20gdGhlIGxpc3Qgb2YgaW5wdXQgaXRlcmFibGVzXG4gKiBhbmQgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgdW50aWwgYWxsIGlucHV0IGl0ZXJhYmxlcyBoYXZlIGJlZW4gZXhoYXVzdGVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsnQScsJ0QnLCdFJywnQicsJ0YnLCdDXVxuICogbGlzdCggcm91bmRyb2JpbihbJ0FCQycsICdEJywgJ0VGJ10pIClcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlW119IGl0ZXJhYmxlcyAtIFRoZSBpbnB1dCBpdGVyYWJsZXMuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJvdW5kcm9iaW4gKCBpdGVyYWJsZXMgKSB7XG5cblx0bGV0IHBlbmRpbmcgPSBsZW4oIGl0ZXJhYmxlcyApIDtcblxuXHRsZXQgaXRlcmF0b3JzID0gY3ljbGUoIG1hcCggaXRlciAsIGl0ZXJhYmxlcyApICkgO1xuXG5cdHdoaWxlICggcGVuZGluZyApIHtcblxuXHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0bGV0IGl0ZXJhdG9yID0gaXRlcmF0b3JzLm5leHQoKS52YWx1ZSA7XG5cblx0XHRcdGxldCBpdCA9IGl0ZXJhdG9yLm5leHQoKSA7XG5cblx0XHRcdGlmICggaXQuZG9uZSApIGJyZWFrIDtcblxuXHRcdFx0eWllbGQgaXQudmFsdWUgO1xuXG5cdFx0fVxuXG5cdFx0LS1wZW5kaW5nIDtcblxuXHRcdGl0ZXJhdG9ycyA9IGN5Y2xlKCBzbGljZSggaXRlcmF0b3JzICwgMCAsIHBlbmRpbmcgLCAxICkgKSA7XG5cblx0fVxuXG59XG4iXX0=