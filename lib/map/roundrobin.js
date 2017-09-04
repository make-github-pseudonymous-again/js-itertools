'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundrobin = roundrobin;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(roundrobin);

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
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcm91bmRyb2Jpbi5qcyJdLCJuYW1lcyI6WyJyb3VuZHJvYmluIiwiaXRlcmFibGVzIiwicGVuZGluZyIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yIiwibmV4dCIsInZhbHVlIiwiaXQiLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7OztRQWlCaUJBLFUsR0FBQUEsVTs7QUFqQmpCOzttREFpQmlCQSxVOztBQWZqQjs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sU0FBVUEsVUFBVixDQUF1QkMsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLGlCQUZFLEdBRVEsV0FBS0QsU0FBTCxDQUZSO0FBSUZFLG1CQUpFLEdBSVUsYUFBTyxtQkFBWUYsU0FBWixDQUFQLENBSlY7O0FBQUE7QUFBQSxlQU1FQyxPQU5GO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsZUFRRyxJQVJIO0FBQUE7QUFBQTtBQUFBOztBQVVBRSxrQkFWQSxHQVVXRCxVQUFVRSxJQUFWLEdBQWlCQyxLQVY1QjtBQVlBQyxZQVpBLEdBWUtILFNBQVNDLElBQVQsRUFaTDs7QUFBQSxlQWNDRSxHQUFHQyxJQWRKO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxpQkFnQkVELEdBQUdELEtBaEJMOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFvQkwsWUFBRUosT0FBRjs7QUFFQUMsc0JBQVksYUFBTyxhQUFPQSxTQUFQLEVBQW1CLENBQW5CLEVBQXVCRCxPQUF2QixFQUFpQyxDQUFqQyxDQUFQLENBQVo7O0FBdEJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicm91bmRyb2Jpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgLCBsZW4gLCBjeWNsZSAsIG1hcCAsIHNsaWNlIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBZaWVsZHMgdGhlIGZpcnN0IGl0ZW0gb2YgdGhlIGZpcnN0IGlucHV0IGl0ZXJhYmxlLCB0aGVuIHRoZSBmaXJzdCBpdGVtIG9mXG4gKiB0aGUgc2Vjb25kIGlucHV0IGl0ZXJhYmxlLCBldGMuLCB1bnRpbCB0aGUgbGFzdCBpbnB1dCBpdGVyYWJsZS4gVGhlbiBzdGFydFxuICogYWdhaW4gd2l0aCB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGZpcnN0IGlucHV0IGl0ZXJhYmxlLCBldGMuIElmIG9uZSBvZiB0aGVcbiAqIGlucHV0IGl0ZXJhYmxlIGlzIGV4aGF1c3RlZCwgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0IG9mIGlucHV0IGl0ZXJhYmxlc1xuICogYW5kIHRoZSBhbGdvcml0aG0gY29udGludWVzIHVudGlsIGFsbCBpbnB1dCBpdGVyYWJsZXMgaGF2ZSBiZWVuIGV4aGF1c3RlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbJ0EnLCdEJywnRScsJ0InLCdGJywnQ11cbiAqIGxpc3QoIHJvdW5kcm9iaW4oWydBQkMnLCAnRCcsICdFRiddKSApXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZVtdfSBpdGVyYWJsZXMgLSBUaGUgaW5wdXQgaXRlcmFibGVzLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiByb3VuZHJvYmluICggaXRlcmFibGVzICkge1xuXG5cdGxldCBwZW5kaW5nID0gbGVuKCBpdGVyYWJsZXMgKSA7XG5cblx0bGV0IGl0ZXJhdG9ycyA9IGN5Y2xlKCBtYXAoIGl0ZXIgLCBpdGVyYWJsZXMgKSApIDtcblxuXHR3aGlsZSAoIHBlbmRpbmcgKSB7XG5cblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdGxldCBpdGVyYXRvciA9IGl0ZXJhdG9ycy5uZXh0KCkudmFsdWUgO1xuXG5cdFx0XHRsZXQgaXQgPSBpdGVyYXRvci5uZXh0KCkgO1xuXG5cdFx0XHRpZiAoIGl0LmRvbmUgKSBicmVhayA7XG5cblx0XHRcdHlpZWxkIGl0LnZhbHVlIDtcblxuXHRcdH1cblxuXHRcdC0tcGVuZGluZyA7XG5cblx0XHRpdGVyYXRvcnMgPSBjeWNsZSggc2xpY2UoIGl0ZXJhdG9ycyAsIDAgLCBwZW5kaW5nICwgMSApICkgO1xuXG5cdH1cblxufVxuIl19