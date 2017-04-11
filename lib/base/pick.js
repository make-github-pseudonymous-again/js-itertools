"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = pick;

var _marked = [pick].map(regeneratorRuntime.mark);

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
  }, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3BpY2suanMiXSwibmFtZXMiOlsicGljayIsIm9iamVjdCIsIml0ZXJhYmxlIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7OztRQVlpQkEsSSxHQUFBQSxJOztlQUFBQSxJOztBQVpqQjs7Ozs7Ozs7Ozs7O0FBWU8sU0FBVUEsSUFBVixDQUFpQkMsTUFBakIsRUFBMEJDLFFBQTFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVXQSxRQUZYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLGFBRko7QUFBQTtBQUFBLGlCQUU0QkYsT0FBT0UsR0FBUCxDQUY1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InBpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFlpZWxkcyBzb21lIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBpbnB1dCBvYmplY3QuIFRoZSBwcm9wZXJ0aWVzIHRvIHlpZWxkXG4gKiBhcmUgZGVzaWduYXRlZCBieSB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyAnYScgLCAnZScgLCAnYycgXVxuICogbGlzdCggcGljayggJ2FiY2RlJyAsIFsgMCAsIDQgLCAyIF0gKSApIDtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gVGhlIGlucHV0IG9iamVjdC5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHBpY2sgKCBvYmplY3QgLCBpdGVyYWJsZSApIHtcblxuXHRmb3IgKCBsZXQga2V5IG9mIGl0ZXJhYmxlICkgeWllbGQgb2JqZWN0W2tleV0gO1xuXG59XG4iXX0=