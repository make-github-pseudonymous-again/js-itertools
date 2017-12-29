"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.starmap = starmap;
/**
 * Same as {@link map} but allows multiple arguments callable functions.
 *
 * @example
 * // return [ 0 , 1 , 4 , 9 ]
 * list( starmap( ( x , y ) => x*y , zip( range( 4 ) , range( 4 ) ) ) ;
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function* starmap(callable, iterable) {

  for (let args of iterable) yield callable.apply(null, args);
  //for ( let args of iterable ) yield callable( ... ) ;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvc3Rhcm1hcC5qcyJdLCJuYW1lcyI6WyJzdGFybWFwIiwiY2FsbGFibGUiLCJpdGVyYWJsZSIsImFyZ3MiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXaUJBLE8sR0FBQUEsTztBQVhqQjs7Ozs7Ozs7Ozs7QUFXTyxVQUFVQSxPQUFWLENBQW9CQyxRQUFwQixFQUErQkMsUUFBL0IsRUFBMEM7O0FBRWhELE9BQU0sSUFBSUMsSUFBVixJQUFrQkQsUUFBbEIsRUFBNkIsTUFBTUQsU0FBU0csS0FBVCxDQUFnQixJQUFoQixFQUF1QkQsSUFBdkIsQ0FBTjtBQUM3QjtBQUVBIiwiZmlsZSI6InN0YXJtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNhbWUgYXMge0BsaW5rIG1hcH0gYnV0IGFsbG93cyBtdWx0aXBsZSBhcmd1bWVudHMgY2FsbGFibGUgZnVuY3Rpb25zLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm4gWyAwICwgMSAsIDQgLCA5IF1cbiAqIGxpc3QoIHN0YXJtYXAoICggeCAsIHkgKSA9PiB4KnkgLCB6aXAoIHJhbmdlKCA0ICkgLCByYW5nZSggNCApICkgKSA7XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGFibGUgLSBUaGUgY2FsbGFibGUgdG8gdXNlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogc3Rhcm1hcCAoIGNhbGxhYmxlICwgaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IGFyZ3Mgb2YgaXRlcmFibGUgKSB5aWVsZCBjYWxsYWJsZS5hcHBseSggbnVsbCAsIGFyZ3MgKSA7XG5cdC8vZm9yICggbGV0IGFyZ3Mgb2YgaXRlcmFibGUgKSB5aWVsZCBjYWxsYWJsZSggLi4uICkgO1xuXG59XG4iXX0=