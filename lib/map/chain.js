"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chain = chain;
/**
 * Chains input iterables one after the other. Returns an iterator that yields
 * all values of the first input iterable, then all values of the second, etc.
 *
 * @example
 * // returns [ 0 , 1 , 0 , 1 , 2 ]
 * list( chain( [ range( 2 ) , range( 3 ) ] ) ) ;
 *
 * @param {Iterable[]} iterables - The input iterables to chain.
 * @returns {Iterator}
 *
 */
function* chain(iterables) {

  for (let iterable of iterables) yield* iterable;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY2hhaW4uanMiXSwibmFtZXMiOlsiY2hhaW4iLCJpdGVyYWJsZXMiLCJpdGVyYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZaUJBLEssR0FBQUEsSztBQVpqQjs7Ozs7Ozs7Ozs7O0FBWU8sVUFBVUEsS0FBVixDQUFrQkMsU0FBbEIsRUFBOEI7O0FBRXBDLE9BQU0sSUFBSUMsUUFBVixJQUFzQkQsU0FBdEIsRUFBa0MsT0FBT0MsUUFBUDtBQUVsQyIsImZpbGUiOiJjaGFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hhaW5zIGlucHV0IGl0ZXJhYmxlcyBvbmUgYWZ0ZXIgdGhlIG90aGVyLiBSZXR1cm5zIGFuIGl0ZXJhdG9yIHRoYXQgeWllbGRzXG4gKiBhbGwgdmFsdWVzIG9mIHRoZSBmaXJzdCBpbnB1dCBpdGVyYWJsZSwgdGhlbiBhbGwgdmFsdWVzIG9mIHRoZSBzZWNvbmQsIGV0Yy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIDAgLCAxICwgMCAsIDEgLCAyIF1cbiAqIGxpc3QoIGNoYWluKCBbIHJhbmdlKCAyICkgLCByYW5nZSggMyApIF0gKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlW119IGl0ZXJhYmxlcyAtIFRoZSBpbnB1dCBpdGVyYWJsZXMgdG8gY2hhaW4uXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIGNoYWluICggaXRlcmFibGVzICkge1xuXG5cdGZvciAoIGxldCBpdGVyYWJsZSBvZiBpdGVyYWJsZXMgKSB5aWVsZCogaXRlcmFibGUgO1xuXG59XG4iXX0=