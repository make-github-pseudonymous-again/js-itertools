"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.some = some;

/**
 * Returns true if at least some of the elements of the input iterable are
 * truthy.
 *
 * @example
 * some( repeat( true ) , 100 ) ; // returns true
 *
 * @example
 * some( repeat( false ) , 0 ) ; // returns true
 *
 * @example
 * some( repeat( false ) , 10 ) ; // loops forever
 *
 * @example
 * some( nrepeat( true , 10 ) , 11 ) ; // returns false
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements that should be truthy.
 * @returns {Boolean} Returns <code>true</code> if at least <code>n</code>
 * elements of <code>iterable</code> are truthy, <code>false</code> otherwise.
 */

function some(iterable, n) {

  if (n <= 0) return true;

  for (let item of iterable) {

    if (item && --n === 0) return true;
  }

  return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Uvc29tZS5qcyJdLCJuYW1lcyI6WyJzb21lIiwiaXRlcmFibGUiLCJuIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUF1QmdCQSxJLEdBQUFBLEk7O0FBdEJoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCTyxTQUFTQSxJQUFULENBQWdCQyxRQUFoQixFQUEyQkMsQ0FBM0IsRUFBK0I7O0FBRXJDLE1BQUtBLEtBQUssQ0FBVixFQUFjLE9BQU8sSUFBUDs7QUFFZCxPQUFNLElBQUlDLElBQVYsSUFBa0JGLFFBQWxCLEVBQTZCOztBQUU1QixRQUFLRSxRQUFRLEVBQUVELENBQUYsS0FBUSxDQUFyQixFQUF5QixPQUFPLElBQVA7QUFFekI7O0FBRUQsU0FBTyxLQUFQO0FBRUEiLCJmaWxlIjoic29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgc29tZSBvZiB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGFyZVxuICogdHJ1dGh5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBzb21lKCByZXBlYXQoIHRydWUgKSAsIDEwMCApIDsgLy8gcmV0dXJucyB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIHNvbWUoIHJlcGVhdCggZmFsc2UgKSAsIDAgKSA7IC8vIHJldHVybnMgdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBzb21lKCByZXBlYXQoIGZhbHNlICkgLCAxMCApIDsgLy8gbG9vcHMgZm9yZXZlclxuICpcbiAqIEBleGFtcGxlXG4gKiBzb21lKCBucmVwZWF0KCB0cnVlICwgMTAgKSAsIDExICkgOyAvLyByZXR1cm5zIGZhbHNlXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgdHJ1dGh5LlxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgYXQgbGVhc3QgPGNvZGU+bjwvY29kZT5cbiAqIGVsZW1lbnRzIG9mIDxjb2RlPml0ZXJhYmxlPC9jb2RlPiBhcmUgdHJ1dGh5LCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lICggaXRlcmFibGUgLCBuICkge1xuXG5cdGlmICggbiA8PSAwICkgcmV0dXJuIHRydWUgO1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkge1xuXG5cdFx0aWYgKCBpdGVtICYmIC0tbiA9PT0gMCApIHJldHVybiB0cnVlIDtcblxuXHR9XG5cblx0cmV0dXJuIGZhbHNlIDtcblxufVxuIl19