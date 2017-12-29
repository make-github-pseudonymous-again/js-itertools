"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._sum = _sum;
/**
 * Sums the elements of the input iterable. An optional initializer parameter
 * allows to start the sum of the elements at a chosen value.
 *
 * @example
 * _sum( range( 10 ) , 0 ) ; // returns 45
 *
 * @example
 * _sum( range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} initializer - The initial value of the sum.
 * @returns {Object} - The sum of the initializer with the elements of
 * <code>iterable</code>.
 *
 */
function _sum(iterable, initializer) {

  for (let item of iterable) initializer += item;

  return initializer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvX3N1bS5qcyJdLCJuYW1lcyI6WyJfc3VtIiwiaXRlcmFibGUiLCJpbml0aWFsaXplciIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JnQkEsSSxHQUFBQSxJO0FBaEJoQjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxTQUFTQSxJQUFULENBQWdCQyxRQUFoQixFQUEyQkMsV0FBM0IsRUFBeUM7O0FBRS9DLE9BQU0sSUFBSUMsSUFBVixJQUFrQkYsUUFBbEIsRUFBNkJDLGVBQWVDLElBQWY7O0FBRTdCLFNBQU9ELFdBQVA7QUFFQSIsImZpbGUiOiJfc3VtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdW1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuIEFuIG9wdGlvbmFsIGluaXRpYWxpemVyIHBhcmFtZXRlclxuICogYWxsb3dzIHRvIHN0YXJ0IHRoZSBzdW0gb2YgdGhlIGVsZW1lbnRzIGF0IGEgY2hvc2VuIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBfc3VtKCByYW5nZSggMTAgKSAsIDAgKSA7IC8vIHJldHVybnMgNDVcbiAqXG4gKiBAZXhhbXBsZVxuICogX3N1bSggcmFuZ2UoIDEwICkgLCAxMDAgKSA7IC8vIHJldHVybnMgMTQ1XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge09iamVjdH0gaW5pdGlhbGl6ZXIgLSBUaGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgc3VtLlxuICogQHJldHVybnMge09iamVjdH0gLSBUaGUgc3VtIG9mIHRoZSBpbml0aWFsaXplciB3aXRoIHRoZSBlbGVtZW50cyBvZlxuICogPGNvZGU+aXRlcmFibGU8L2NvZGU+LlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zdW0gKCBpdGVyYWJsZSAsIGluaXRpYWxpemVyICkge1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkgaW5pdGlhbGl6ZXIgKz0gaXRlbSA7XG5cblx0cmV0dXJuIGluaXRpYWxpemVyIDtcblxufVxuIl19