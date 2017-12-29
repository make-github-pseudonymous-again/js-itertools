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
function* tail(iterable, n) {

  if (n < 0) {
    yield* (0, _drop.drop)(iterable, -n);
    return;
  }

  yield* (0, _jsCollectionsDeque2.default)(iterable, n);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RhaWwuanMiXSwibmFtZXMiOlsidGFpbCIsIml0ZXJhYmxlIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFrQmlCQSxJLEdBQUFBLEk7O0FBbEJqQjs7OztBQUVBOztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhTyxVQUFVQSxJQUFWLENBQWlCQyxRQUFqQixFQUE0QkMsQ0FBNUIsRUFBZ0M7O0FBRXRDLE1BQUtBLElBQUksQ0FBVCxFQUFhO0FBQ1osV0FBTyxnQkFBTUQsUUFBTixFQUFpQixDQUFDQyxDQUFsQixDQUFQO0FBQ0E7QUFDQTs7QUFFRCxTQUFPLGtDQUFPRCxRQUFQLEVBQWtCQyxDQUFsQixDQUFQO0FBRUEiLCJmaWxlIjoidGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZXF1ZSBmcm9tICdAYXVyZW9vbXMvanMtY29sbGVjdGlvbnMtZGVxdWUnIDtcblxuaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgZHJvcCB9IGZyb20gJy4vZHJvcCcgO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGxhc3QgPGNvZGU+bjwvY29kZT4gZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGluIGFuIGFycmF5LlxuICogSWYgPGNvZGU+bjwvY29kZT4gaXMgbmVnYXRpdmUsIGJlaGF2ZXMgbGlrZSA8Y29kZT57QGxpbmsgZHJvcH0oIGl0ZXJhYmxlLFxuICogLW4pPC9jb2RlPi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIDMgLCA0IF1cbiAqIGxpc3QoIHRhaWwoIHJhbmdlKCA1ICkgLCAyICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gaW5jbHVkZSBpbiB0aGUgb3V0cHV0LlxuICogQHJldHVybnMge0FycmF5fSAtIFRoZSBsYXN0IDxjb2RlPm48L2NvZGU+IGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiB0YWlsICggaXRlcmFibGUgLCBuICkge1xuXG5cdGlmICggbiA8IDAgKSB7XG5cdFx0eWllbGQqIGRyb3AoIGl0ZXJhYmxlICwgLW4gKSA7XG5cdFx0cmV0dXJuIDtcblx0fVxuXG5cdHlpZWxkKiBkZXF1ZSggaXRlcmFibGUgLCBuICkgO1xuXG59XG4iXX0=