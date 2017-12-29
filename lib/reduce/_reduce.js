"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._reduce = _reduce;
/**
 * Applies the accumulator function iteratively on the last return value of the
 * accumulator and the next value in the input iterable. The initial value is
 * the initializer parameter.
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 0 ) ; // returns 45
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Function} accumulator - The accumulator, a 2-ary function.
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} initializer - The initial value of the reduction.
 * @returns {Object} - The reduction of the elements of <code>iterable</code>.
 */
function _reduce(accumulator, iterable, initializer) {

  for (let item of iterable) {
    initializer = accumulator(initializer, item);
  }

  return initializer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvX3JlZHVjZS5qcyJdLCJuYW1lcyI6WyJfcmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVyYWJsZSIsImluaXRpYWxpemVyIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxPLEdBQUFBLE87QUFoQmhCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLE9BQVQsQ0FBbUJDLFdBQW5CLEVBQWlDQyxRQUFqQyxFQUE0Q0MsV0FBNUMsRUFBMEQ7O0FBRWhFLE9BQU0sSUFBSUMsSUFBVixJQUFrQkYsUUFBbEIsRUFBNkI7QUFDNUJDLGtCQUFjRixZQUFhRSxXQUFiLEVBQTJCQyxJQUEzQixDQUFkO0FBQ0E7O0FBRUQsU0FBT0QsV0FBUDtBQUVBIiwiZmlsZSI6Il9yZWR1Y2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFwcGxpZXMgdGhlIGFjY3VtdWxhdG9yIGZ1bmN0aW9uIGl0ZXJhdGl2ZWx5IG9uIHRoZSBsYXN0IHJldHVybiB2YWx1ZSBvZiB0aGVcbiAqIGFjY3VtdWxhdG9yIGFuZCB0aGUgbmV4dCB2YWx1ZSBpbiB0aGUgaW5wdXQgaXRlcmFibGUuIFRoZSBpbml0aWFsIHZhbHVlIGlzXG4gKiB0aGUgaW5pdGlhbGl6ZXIgcGFyYW1ldGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBfcmVkdWNlKCAoIHggLCB5ICkgPT4geCArIHkgLCByYW5nZSggMTAgKSAsIDAgKSA7IC8vIHJldHVybnMgNDVcbiAqXG4gKiBAZXhhbXBsZVxuICogX3JlZHVjZSggKCB4ICwgeSApID0+IHggKyB5ICwgcmFuZ2UoIDEwICkgLCAxMDAgKSA7IC8vIHJldHVybnMgMTQ1XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWNjdW11bGF0b3IgLSBUaGUgYWNjdW11bGF0b3IsIGEgMi1hcnkgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbml0aWFsaXplciAtIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSByZWR1Y3Rpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSByZWR1Y3Rpb24gb2YgdGhlIGVsZW1lbnRzIG9mIDxjb2RlPml0ZXJhYmxlPC9jb2RlPi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9yZWR1Y2UgKCBhY2N1bXVsYXRvciAsIGl0ZXJhYmxlICwgaW5pdGlhbGl6ZXIgKSB7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB7XG5cdFx0aW5pdGlhbGl6ZXIgPSBhY2N1bXVsYXRvciggaW5pdGlhbGl6ZXIgLCBpdGVtICkgO1xuXHR9XG5cblx0cmV0dXJuIGluaXRpYWxpemVyIDtcblxufVxuIl19