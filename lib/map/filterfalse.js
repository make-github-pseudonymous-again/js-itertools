"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterfalse = filterfalse;

var _marked = [filterfalse].map(regeneratorRuntime.mark);

/**
 * Yields all elements from input iterable that do not verify a given predicate.
 *
 * @example
 * // returns [ 0 , 2 , 4 , 6 , 8 ]
 * list( filter( x => x % 2 , range( 10 ) ) ) ;
 *
 * @param {Function} predicate - A unary function that returns a truthy or
 * falsy value.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
function filterfalse(predicate, iterable) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.wrap(function filterfalse$(_context) {
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

          if (predicate(item)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZmlsdGVyZmFsc2UuanMiXSwibmFtZXMiOlsiZmlsdGVyZmFsc2UiLCJwcmVkaWNhdGUiLCJpdGVyYWJsZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWlCQSxXLEdBQUFBLFc7O2VBQUFBLFc7O0FBYmpCOzs7Ozs7Ozs7Ozs7O0FBYU8sU0FBVUEsV0FBVixDQUF3QkMsU0FBeEIsRUFBb0NDLFFBQXBDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVZQSxRQUZaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLGNBRko7O0FBQUEsY0FJRUYsVUFBV0UsSUFBWCxDQUpGO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBSTRCQSxJQUo1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImZpbHRlcmZhbHNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBZaWVsZHMgYWxsIGVsZW1lbnRzIGZyb20gaW5wdXQgaXRlcmFibGUgdGhhdCBkbyBub3QgdmVyaWZ5IGEgZ2l2ZW4gcHJlZGljYXRlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgMCAsIDIgLCA0ICwgNiAsIDggXVxuICogbGlzdCggZmlsdGVyKCB4ID0+IHggJSAyICwgcmFuZ2UoIDEwICkgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgLSBBIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHRydXRoeSBvclxuICogZmFsc3kgdmFsdWUuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZmlsdGVyZmFsc2UgKCBwcmVkaWNhdGUgLCBpdGVyYWJsZSApIHtcblxuXHRmb3IgKCBsZXQgaXRlbSBvZiBpdGVyYWJsZSApIHtcblxuXHRcdGlmICggISBwcmVkaWNhdGUoIGl0ZW0gKSApIHlpZWxkIGl0ZW0gO1xuXG5cdH1cblxufVxuIl19