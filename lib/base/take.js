'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

var _iter = require('./iter');

var _trunc = require('./trunc');

var _marked = [take].map(regeneratorRuntime.mark);

/**
 * Yields the first <code>n</code> elements of the input iterable. If
 * <code>n</code> is negative, behaves like <code>{@link trunc}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 0 , 1 , 2 ]
 * list( take( range( 5 ) , 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to include in the output.
 * @returns {Iterator} - The first <code>n</code> elements of the input iterable.
 */
function take(iterable, n) {
  var iterator, current;
  return regeneratorRuntime.wrap(function take$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(n < 0)) {
            _context.next = 3;
            break;
          }

          return _context.delegateYield((0, _trunc.trunc)(iterable, -n), 't0', 2);

        case 2:
          return _context.abrupt('return');

        case 3:
          iterator = (0, _iter.iter)(iterable);

        case 4:
          if (!(n-- > 0)) {
            _context.next = 12;
            break;
          }

          current = iterator.next();

          if (!current.done) {
            _context.next = 8;
            break;
          }

          return _context.abrupt('return');

        case 8:
          _context.next = 10;
          return current.value;

        case 10:
          _context.next = 4;
          break;

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3Rha2UuanMiXSwibmFtZXMiOlsidGFrZSIsIml0ZXJhYmxlIiwibiIsIml0ZXJhdG9yIiwiY3VycmVudCIsIm5leHQiLCJkb25lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JpQkEsSSxHQUFBQSxJOztBQWhCakI7O0FBQ0E7O2VBZWlCQSxJOztBQWJqQjs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVVBLElBQVYsQ0FBaUJDLFFBQWpCLEVBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFREEsSUFBSSxDQUZIO0FBQUE7QUFBQTtBQUFBOztBQUFBLHdDQUdFLGtCQUFPRCxRQUFQLEVBQWtCLENBQUNDLENBQW5CLENBSEY7O0FBQUE7QUFBQTs7QUFBQTtBQU9BQyxrQkFQQSxHQU9XLGdCQUFNRixRQUFOLENBUFg7O0FBQUE7QUFBQSxnQkFTRUMsTUFBTSxDQVRSO0FBQUE7QUFBQTtBQUFBOztBQVdDRSxpQkFYRCxHQVdXRCxTQUFTRSxJQUFULEVBWFg7O0FBQUEsZUFhQUQsUUFBUUUsSUFiUjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUEsaUJBZUNGLFFBQVFHLEtBZlQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InRha2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi9pdGVyJyA7XG5pbXBvcnQgeyB0cnVuYyB9IGZyb20gJy4vdHJ1bmMnIDtcblxuLyoqXG4gKiBZaWVsZHMgdGhlIGZpcnN0IDxjb2RlPm48L2NvZGU+IGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS4gSWZcbiAqIDxjb2RlPm48L2NvZGU+IGlzIG5lZ2F0aXZlLCBiZWhhdmVzIGxpa2UgPGNvZGU+e0BsaW5rIHRydW5jfSggaXRlcmFibGUsXG4gKiAtbik8L2NvZGU+LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgMCAsIDEgLCAyIF1cbiAqIGxpc3QoIHRha2UoIHJhbmdlKCA1ICkgLCAzICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gaW5jbHVkZSBpbiB0aGUgb3V0cHV0LlxuICogQHJldHVybnMge0l0ZXJhdG9yfSAtIFRoZSBmaXJzdCA8Y29kZT5uPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogdGFrZSAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRpZiAoIG4gPCAwICkge1xuXHRcdHlpZWxkKiB0cnVuYyggaXRlcmFibGUgLCAtbiApIDtcblx0XHRyZXR1cm4gO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHR3aGlsZSAoIG4gLS0+IDAgKSB7XG5cblx0XHRjb25zdCBjdXJyZW50ID0gaXRlcmF0b3IubmV4dCgpIDtcblxuXHRcdGlmICggY3VycmVudC5kb25lICkgcmV0dXJuIDtcblxuXHRcdHlpZWxkIGN1cnJlbnQudmFsdWUgO1xuXG5cdH1cblxufVxuIl19