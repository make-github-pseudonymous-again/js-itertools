'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;

var _zip2 = require('./_zip');

/**
 * Zips iterables together. Yields a tuple containing the first element of each
 * iterable, then a tupe containing the second element of each iterable, etc.
 * Stops when one of the iterables runs out of elements.
 *
 * @example
 * // returns [ [ 'a' , 1 ] , [ 'b' , 2 ] , [ 'c' , 3 ] ]
 * list( zip( 'abcd' , range(3) ) ) ;
 *
 * @param {...Iterable} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
function zip(...iterables) {

  return (0, _zip2._zip)(iterables);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvemlwLmpzIl0sIm5hbWVzIjpbInppcCIsIml0ZXJhYmxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlZ0JBLEcsR0FBQUEsRzs7QUFmaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTQSxHQUFULENBQWUsR0FBR0MsU0FBbEIsRUFBOEI7O0FBRXBDLFNBQU8sZ0JBQU1BLFNBQU4sQ0FBUDtBQUVBIiwiZmlsZSI6InppcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF96aXAgfSBmcm9tICcuL196aXAnIDtcblxuLyoqXG4gKiBaaXBzIGl0ZXJhYmxlcyB0b2dldGhlci4gWWllbGRzIGEgdHVwbGUgY29udGFpbmluZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBlYWNoXG4gKiBpdGVyYWJsZSwgdGhlbiBhIHR1cGUgY29udGFpbmluZyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgZWFjaCBpdGVyYWJsZSwgZXRjLlxuICogU3RvcHMgd2hlbiBvbmUgb2YgdGhlIGl0ZXJhYmxlcyBydW5zIG91dCBvZiBlbGVtZW50cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIFsgJ2EnICwgMSBdICwgWyAnYicgLCAyIF0gLCBbICdjJyAsIDMgXSBdXG4gKiBsaXN0KCB6aXAoICdhYmNkJyAsIHJhbmdlKDMpICkgKSA7XG4gKlxuICogQHBhcmFtIHsuLi5JdGVyYWJsZX0gaXRlcmFibGVzIC0gVGhlIGl0ZXJhYmxlcyB0byB6aXAuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gemlwICggLi4uaXRlcmFibGVzICkge1xuXG5cdHJldHVybiBfemlwKCBpdGVyYWJsZXMgKSA7XG5cbn1cbiJdfQ==