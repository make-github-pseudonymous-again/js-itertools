'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;

var _sum2 = require('./_sum');

/**
 * Sums the elements of the input iterable. An optional initializer parameter
 * allows to start the sum of the elements at a chosen value. The default value
 * for the initializer parameter is <code>0</code>.
 *
 * @example
 * sum( range( 10 ) ) ; // returns 45
 *
 * @example
 * sum( range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} [initializer=0] - The initial value of the sum.
 * @returns {Object} - The sum of the initializer with the elements of
 * <code>iterable</code>.
 *
 */
function sum(iterable) {
  var initializer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


  return (0, _sum2._sum)(iterable, initializer);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Uvc3VtLmpzIl0sIm5hbWVzIjpbInN1bSIsIml0ZXJhYmxlIiwiaW5pdGlhbGl6ZXIiXSwibWFwcGluZ3MiOiI7Ozs7O1FBbUJnQkEsRyxHQUFBQSxHOztBQW5CaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUE0QztBQUFBLE1BQWxCQyxXQUFrQix1RUFBSixDQUFJOzs7QUFFbEQsU0FBTyxnQkFBTUQsUUFBTixFQUFpQkMsV0FBakIsQ0FBUDtBQUVBIiwiZmlsZSI6InN1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9zdW0gfSBmcm9tICcuL19zdW0nIDtcblxuLyoqXG4gKiBTdW1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuIEFuIG9wdGlvbmFsIGluaXRpYWxpemVyIHBhcmFtZXRlclxuICogYWxsb3dzIHRvIHN0YXJ0IHRoZSBzdW0gb2YgdGhlIGVsZW1lbnRzIGF0IGEgY2hvc2VuIHZhbHVlLiBUaGUgZGVmYXVsdCB2YWx1ZVxuICogZm9yIHRoZSBpbml0aWFsaXplciBwYXJhbWV0ZXIgaXMgPGNvZGU+MDwvY29kZT4uXG4gKlxuICogQGV4YW1wbGVcbiAqIHN1bSggcmFuZ2UoIDEwICkgKSA7IC8vIHJldHVybnMgNDVcbiAqXG4gKiBAZXhhbXBsZVxuICogc3VtKCByYW5nZSggMTAgKSAsIDEwMCApIDsgLy8gcmV0dXJucyAxNDVcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbaW5pdGlhbGl6ZXI9MF0gLSBUaGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgc3VtLlxuICogQHJldHVybnMge09iamVjdH0gLSBUaGUgc3VtIG9mIHRoZSBpbml0aWFsaXplciB3aXRoIHRoZSBlbGVtZW50cyBvZlxuICogPGNvZGU+aXRlcmFibGU8L2NvZGU+LlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bSAoIGl0ZXJhYmxlICwgaW5pdGlhbGl6ZXIgPSAwICkge1xuXG5cdHJldHVybiBfc3VtKCBpdGVyYWJsZSAsIGluaXRpYWxpemVyICkgO1xuXG59XG4iXX0=