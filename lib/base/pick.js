"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = pick;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(pick);

/**
 * Yields some of the properties of the input object. The properties to yield
 * are designated by the input iterable.
 *
 * @example
 * // returns [ 'a' , 'e' , 'c' ]
 * list( pick( 'abcde' , [ 0 , 4 , 2 ] ) ) ;
 *
 * @param {Object} object - The input object.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function pick(object, iterable) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

  return regeneratorRuntime.wrap(function pick$(_context) {
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
            _context.next = 12;
            break;
          }

          key = _step.value;
          _context.next = 9;
          return object[key];

        case 9:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 18:
          _context.prev = 18;
          _context.prev = 19;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 21:
          _context.prev = 21;

          if (!_didIteratorError) {
            _context.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return _context.finish(21);

        case 25:
          return _context.finish(18);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3BpY2suanMiXSwibmFtZXMiOlsicGljayIsIm9iamVjdCIsIml0ZXJhYmxlIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7OztRQVlpQkEsSSxHQUFBQSxJOzttREFBQUEsSTs7QUFaakI7Ozs7Ozs7Ozs7OztBQVlPLFNBQVVBLElBQVYsQ0FBaUJDLE1BQWpCLEVBQTBCQyxRQUExQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFV0EsUUFGWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVJQyxhQUZKO0FBQUE7QUFBQSxpQkFFNEJGLE9BQU9FLEdBQVAsQ0FGNUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJwaWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBZaWVsZHMgc29tZSBvZiB0aGUgcHJvcGVydGllcyBvZiB0aGUgaW5wdXQgb2JqZWN0LiBUaGUgcHJvcGVydGllcyB0byB5aWVsZFxuICogYXJlIGRlc2lnbmF0ZWQgYnkgdGhlIGlucHV0IGl0ZXJhYmxlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgJ2EnICwgJ2UnICwgJ2MnIF1cbiAqIGxpc3QoIHBpY2soICdhYmNkZScgLCBbIDAgLCA0ICwgMiBdICkgKSA7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCAtIFRoZSBpbnB1dCBvYmplY3QuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBwaWNrICggb2JqZWN0ICwgaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IGtleSBvZiBpdGVyYWJsZSApIHlpZWxkIG9iamVjdFtrZXldIDtcblxufVxuIl19