"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = cycle;
/**
 * Cycles through the input iterable.
 *
 * @example
 * // returns [0,1,0,1,0,1,0]
 * list(head(cycle(range(2)),7)) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
function* cycle(iterable) {

  let buffer = [];

  for (let item of iterable) {

    yield item;
    buffer.push(item);
  }

  if (buffer.length === 0) return;

  while (true) yield* buffer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2N5Y2xlLmpzIl0sIm5hbWVzIjpbImN5Y2xlIiwiaXRlcmFibGUiLCJidWZmZXIiLCJpdGVtIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXaUJBLEssR0FBQUEsSztBQVhqQjs7Ozs7Ozs7Ozs7QUFXTyxVQUFVQSxLQUFWLENBQWtCQyxRQUFsQixFQUE2Qjs7QUFFbkMsTUFBSUMsU0FBUyxFQUFiOztBQUVBLE9BQU0sSUFBSUMsSUFBVixJQUFrQkYsUUFBbEIsRUFBNkI7O0FBRTVCLFVBQU1FLElBQU47QUFDQUQsV0FBT0UsSUFBUCxDQUFhRCxJQUFiO0FBRUE7O0FBRUQsTUFBS0QsT0FBT0csTUFBUCxLQUFrQixDQUF2QixFQUEyQjs7QUFFM0IsU0FBUSxJQUFSLEVBQWUsT0FBT0gsTUFBUDtBQUVmIiwiZmlsZSI6ImN5Y2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDeWNsZXMgdGhyb3VnaCB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzAsMSwwLDEsMCwxLDBdXG4gKiBsaXN0KGhlYWQoY3ljbGUocmFuZ2UoMikpLDcpKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIGN5Y2xlICggaXRlcmFibGUgKSB7XG5cblx0bGV0IGJ1ZmZlciA9IFsgXSA7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB7XG5cblx0XHR5aWVsZCBpdGVtIDtcblx0XHRidWZmZXIucHVzaCggaXRlbSApIDtcblxuXHR9XG5cblx0aWYgKCBidWZmZXIubGVuZ3RoID09PSAwICkgcmV0dXJuIDtcblxuXHR3aGlsZSAoIHRydWUgKSB5aWVsZCogYnVmZmVyIDtcblxufVxuIl19