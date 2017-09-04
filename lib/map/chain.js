"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chain = chain;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(chain);

/**
 * Chains input iterables one after the other. Returns an iterator that yields
 * all values of the first input iterable, then all values of the second, etc.
 *
 * @example
 * // returns [ 0 , 1 , 0 , 1 , 2 ]
 * list( chain( [ range( 2 ) , range( 3 ) ] ) ) ;
 *
 * @param {Iterable[]} iterables - The input iterables to chain.
 * @returns {Iterator}
 *
 */
function chain(iterables) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, iterable;

  return regeneratorRuntime.wrap(function chain$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = iterables[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 11;
            break;
          }

          iterable = _step.value;
          return _context.delegateYield(iterable, "t0", 8);

        case 8:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t1 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 17:
          _context.prev = 17;
          _context.prev = 18;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 20:
          _context.prev = 20;

          if (!_didIteratorError) {
            _context.next = 23;
            break;
          }

          throw _iteratorError;

        case 23:
          return _context.finish(20);

        case 24:
          return _context.finish(17);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 13, 17, 25], [18,, 20, 24]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY2hhaW4uanMiXSwibmFtZXMiOlsiY2hhaW4iLCJpdGVyYWJsZXMiLCJpdGVyYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZaUJBLEssR0FBQUEsSzs7bURBQUFBLEs7O0FBWmpCOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFVQSxLQUFWLENBQWtCQyxTQUFsQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFZ0JBLFNBRmhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLGtCQUZKO0FBQUEsd0NBRW1DQSxRQUZuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNoYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDaGFpbnMgaW5wdXQgaXRlcmFibGVzIG9uZSBhZnRlciB0aGUgb3RoZXIuIFJldHVybnMgYW4gaXRlcmF0b3IgdGhhdCB5aWVsZHNcbiAqIGFsbCB2YWx1ZXMgb2YgdGhlIGZpcnN0IGlucHV0IGl0ZXJhYmxlLCB0aGVuIGFsbCB2YWx1ZXMgb2YgdGhlIHNlY29uZCwgZXRjLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgMCAsIDEgLCAwICwgMSAsIDIgXVxuICogbGlzdCggY2hhaW4oIFsgcmFuZ2UoIDIgKSAsIHJhbmdlKCAzICkgXSApICkgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGVbXX0gaXRlcmFibGVzIC0gVGhlIGlucHV0IGl0ZXJhYmxlcyB0byBjaGFpbi5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogY2hhaW4gKCBpdGVyYWJsZXMgKSB7XG5cblx0Zm9yICggbGV0IGl0ZXJhYmxlIG9mIGl0ZXJhYmxlcyApIHlpZWxkKiBpdGVyYWJsZSA7XG5cbn1cbiJdfQ==