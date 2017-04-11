"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iter = iter;
/**
 * Returns the iterator for the input iterable.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
function iter(iterable) {

  return iterable[Symbol.iterator]();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2l0ZXIuanMiXSwibmFtZXMiOlsiaXRlciIsIml0ZXJhYmxlIiwiU3ltYm9sIiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O1FBT2dCQSxJLEdBQUFBLEk7QUFQaEI7Ozs7Ozs7QUFPTyxTQUFTQSxJQUFULENBQWdCQyxRQUFoQixFQUEyQjs7QUFFakMsU0FBT0EsU0FBU0MsT0FBT0MsUUFBaEIsR0FBUDtBQUVBIiwiZmlsZSI6Iml0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIGZvciB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXRlciAoIGl0ZXJhYmxlICkge1xuXG5cdHJldHVybiBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCApIDtcblxufVxuIl19