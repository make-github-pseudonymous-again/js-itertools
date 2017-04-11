"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

var _marked = [filter].map(regeneratorRuntime.mark);

/**
 * Yields all elements from input iterable that verify a given predicate.
 *
 * @example
 * // returns [ 1 , 3 , 5 , 7 , 9 ]
 * list( filter( x => x % 2 , range( 10 ) ) ) ;
 *
 * @param {Function} predicate - A unary function that returns a truthy or
 * falsy value.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
function filter(predicate, iterable) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.wrap(function filter$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = iterable[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 13;
            break;
          }

          item = _step.value;

          if (!predicate(item)) {
            _context.next = 10;
            break;
          }

          _context.next = 10;
          return item;

        case 10:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 19:
          _context.prev = 19;
          _context.prev = 20;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 22:
          _context.prev = 22;

          if (!_didIteratorError) {
            _context.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context.finish(22);

        case 26:
          return _context.finish(19);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[3, 15, 19, 27], [20,, 22, 26]]);
}

/**
 * Same as {@link filter}.
 * @function filtertrue
 */
var filtertrue = exports.filtertrue = filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZmlsdGVyLmpzIl0sIm5hbWVzIjpbImZpbHRlciIsInByZWRpY2F0ZSIsIml0ZXJhYmxlIiwiaXRlbSIsImZpbHRlcnRydWUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWlCQSxNLEdBQUFBLE07O2VBQUFBLE07O0FBYmpCOzs7Ozs7Ozs7Ozs7O0FBYU8sU0FBVUEsTUFBVixDQUFtQkMsU0FBbkIsRUFBK0JDLFFBQS9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVZQSxRQUZaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLGNBRko7O0FBQUEsZUFJQUYsVUFBV0UsSUFBWCxDQUpBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBSTBCQSxJQUoxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVQOzs7O0FBSU8sSUFBTUMsa0NBQWFKLE1BQW5CIiwiZmlsZSI6ImZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogWWllbGRzIGFsbCBlbGVtZW50cyBmcm9tIGlucHV0IGl0ZXJhYmxlIHRoYXQgdmVyaWZ5IGEgZ2l2ZW4gcHJlZGljYXRlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgMSAsIDMgLCA1ICwgNyAsIDkgXVxuICogbGlzdCggZmlsdGVyKCB4ID0+IHggJSAyICwgcmFuZ2UoIDEwICkgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgLSBBIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHRydXRoeSBvclxuICogZmFsc3kgdmFsdWUuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZmlsdGVyICggcHJlZGljYXRlICwgaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB7XG5cblx0XHRpZiAoIHByZWRpY2F0ZSggaXRlbSApICkgeWllbGQgaXRlbSA7XG5cblx0fVxuXG59XG5cbi8qKlxuICogU2FtZSBhcyB7QGxpbmsgZmlsdGVyfS5cbiAqIEBmdW5jdGlvbiBmaWx0ZXJ0cnVlXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJ0cnVlID0gZmlsdGVyIDtcbiJdfQ==