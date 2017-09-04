'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tail = tail;

var _jsCollectionsDeque = require('@aureooms/js-collections-deque');

var _jsCollectionsDeque2 = _interopRequireDefault(_jsCollectionsDeque);

var _iter = require('./iter');

var _drop = require('./drop');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(tail);

/**
 * Returns the last <code>n</code> elements of the input iterable in an array.
 * If <code>n</code> is negative, behaves like <code>{@link drop}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 3 , 4 ]
 * list( tail( range( 5 ) , 2 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to include in the output.
 * @returns {Array} - The last <code>n</code> elements of the input iterable.
 */
function tail(iterable, n) {
  return regeneratorRuntime.wrap(function tail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(n < 0)) {
            _context.next = 3;
            break;
          }

          return _context.delegateYield((0, _drop.drop)(iterable, -n), 't0', 2);

        case 2:
          return _context.abrupt('return');

        case 3:
          return _context.delegateYield((0, _jsCollectionsDeque2.default)(iterable, n), 't1', 4);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RhaWwuanMiXSwibmFtZXMiOlsidGFpbCIsIml0ZXJhYmxlIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFrQmlCQSxJLEdBQUFBLEk7O0FBbEJqQjs7OztBQUVBOztBQUNBOzs7O21EQWVpQkEsSTs7QUFiakI7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFVQSxJQUFWLENBQWlCQyxRQUFqQixFQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUVEQSxJQUFJLENBRkg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0NBR0UsZ0JBQU1ELFFBQU4sRUFBaUIsQ0FBQ0MsQ0FBbEIsQ0FIRjs7QUFBQTtBQUFBOztBQUFBO0FBQUEsd0NBT0Msa0NBQU9ELFFBQVAsRUFBa0JDLENBQWxCLENBUEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoidGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZXF1ZSBmcm9tICdAYXVyZW9vbXMvanMtY29sbGVjdGlvbnMtZGVxdWUnIDtcblxuaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgZHJvcCB9IGZyb20gJy4vZHJvcCcgO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGxhc3QgPGNvZGU+bjwvY29kZT4gZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGluIGFuIGFycmF5LlxuICogSWYgPGNvZGU+bjwvY29kZT4gaXMgbmVnYXRpdmUsIGJlaGF2ZXMgbGlrZSA8Y29kZT57QGxpbmsgZHJvcH0oIGl0ZXJhYmxlLFxuICogLW4pPC9jb2RlPi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIDMgLCA0IF1cbiAqIGxpc3QoIHRhaWwoIHJhbmdlKCA1ICkgLCAyICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gaW5jbHVkZSBpbiB0aGUgb3V0cHV0LlxuICogQHJldHVybnMge0FycmF5fSAtIFRoZSBsYXN0IDxjb2RlPm48L2NvZGU+IGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiB0YWlsICggaXRlcmFibGUgLCBuICkge1xuXG5cdGlmICggbiA8IDAgKSB7XG5cdFx0eWllbGQqIGRyb3AoIGl0ZXJhYmxlICwgLW4gKSA7XG5cdFx0cmV0dXJuIDtcblx0fVxuXG5cdHlpZWxkKiBkZXF1ZSggaXRlcmFibGUgLCBuICkgO1xuXG59XG4iXX0=