'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enumerate = enumerate;

var _ = require('..');

/**
 * Yields (index,element) tuples where the elements are taken from the input
 * iterable. You can choose the starting index. The starting index is
 * <code>0</code> by default.
 *
 * @example
 * // returns [ [ 0 , 'a' ] , [ 1 , 'b' ] , [ 2 , 'c' ] ]
 * list( enumerate( 'abc' ) ) ;
 *
 * @example
 * // returns [ [ 1 , 'a' ] , [ 2 , 'b' ] , [ 3 , 'c' ] ]
 * list( enumerate( 'abc' , 1 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} [start=0] - The starting index.
 * @returns {Iterator}
 */
function enumerate(iterable, start = 0) {

  return (0, _._zip2)((0, _._count)(start, 1), iterable);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZW51bWVyYXRlLmpzIl0sIm5hbWVzIjpbImVudW1lcmF0ZSIsIml0ZXJhYmxlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBbUJnQkEsUyxHQUFBQSxTOztBQW5CaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFNBQVNBLFNBQVQsQ0FBcUJDLFFBQXJCLEVBQStCQyxRQUFRLENBQXZDLEVBQTJDOztBQUVqRCxTQUFPLGFBQU8sY0FBUUEsS0FBUixFQUFnQixDQUFoQixDQUFQLEVBQTZCRCxRQUE3QixDQUFQO0FBRUEiLCJmaWxlIjoiZW51bWVyYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3ppcDIgLCBfY291bnQgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIFlpZWxkcyAoaW5kZXgsZWxlbWVudCkgdHVwbGVzIHdoZXJlIHRoZSBlbGVtZW50cyBhcmUgdGFrZW4gZnJvbSB0aGUgaW5wdXRcbiAqIGl0ZXJhYmxlLiBZb3UgY2FuIGNob29zZSB0aGUgc3RhcnRpbmcgaW5kZXguIFRoZSBzdGFydGluZyBpbmRleCBpc1xuICogPGNvZGU+MDwvY29kZT4gYnkgZGVmYXVsdC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIFsgMCAsICdhJyBdICwgWyAxICwgJ2InIF0gLCBbIDIgLCAnYycgXSBdXG4gKiBsaXN0KCBlbnVtZXJhdGUoICdhYmMnICkgKSA7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyBbIDEgLCAnYScgXSAsIFsgMiAsICdiJyBdICwgWyAzICwgJ2MnIF0gXVxuICogbGlzdCggZW51bWVyYXRlKCAnYWJjJyAsIDEgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gLSBUaGUgc3RhcnRpbmcgaW5kZXguXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnVtZXJhdGUgKCBpdGVyYWJsZSwgc3RhcnQgPSAwICkge1xuXG5cdHJldHVybiBfemlwMiggX2NvdW50KCBzdGFydCAsIDEgKSAsIGl0ZXJhYmxlICkgO1xuXG59XG4iXX0=