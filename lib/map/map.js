"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _marked = [map].map(regeneratorRuntime.mark);

/**
 * Applies a given callable to each of the elements of the input iterable.
 *
 * @example
 * // return [ 0 , 1 , 4 , 9 ]
 * list( map( x => x**2 , range( 4 ) ) ) ;
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function map(callable, iterable) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.wrap(function map$(_context) {
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

          item = _step.value;
          _context.next = 9;
          return callable(item);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsImNhbGxhYmxlIiwiaXRlcmFibGUiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsRyxHQUFBQSxHOztlQUFBQSxHOztBQVhqQjs7Ozs7Ozs7Ozs7QUFXTyxTQUFVQSxHQUFWLENBQWdCQyxRQUFoQixFQUEyQkMsUUFBM0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRVlBLFFBRlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFSUMsY0FGSjtBQUFBO0FBQUEsaUJBRTZCRixTQUFVRSxJQUFWLENBRjdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gY2FsbGFibGUgdG8gZWFjaCBvZiB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm4gWyAwICwgMSAsIDQgLCA5IF1cbiAqIGxpc3QoIG1hcCggeCA9PiB4KioyICwgcmFuZ2UoIDQgKSApICkgO1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxhYmxlIC0gVGhlIGNhbGxhYmxlIHRvIHVzZS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIG1hcCAoIGNhbGxhYmxlICwgaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB5aWVsZCBjYWxsYWJsZSggaXRlbSApIDtcblxufVxuIl19