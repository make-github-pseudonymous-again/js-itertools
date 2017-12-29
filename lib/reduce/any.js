"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.any = any;
/**
 * Returns true if any of the elements of the input iterable is truthy.
 *
 * @example
 * any( repeat( true ) ) ; // returns true
 *
 * @example
 * any( repeat( false ) ) ; // loops forever
 *
 * @example
 * any( nrepeat( false , 10 ) ) ; // returns false
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Boolean} Returns <code>true</code> if any element of
 * <code>iterable</code> is truthy, <code>false</code> otherwise.
 */
function any(iterable) {

  for (let item of iterable) {

    if (item) return true;
  }

  return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvYW55LmpzIl0sIm5hbWVzIjpbImFueSIsIml0ZXJhYmxlIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxHLEdBQUFBLEc7QUFoQmhCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQjs7QUFFaEMsT0FBTSxJQUFJQyxJQUFWLElBQWtCRCxRQUFsQixFQUE2Qjs7QUFFNUIsUUFBS0MsSUFBTCxFQUFZLE9BQU8sSUFBUDtBQUVaOztBQUVELFNBQU8sS0FBUDtBQUVBIiwiZmlsZSI6ImFueS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFueSBvZiB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGlzIHRydXRoeS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYW55KCByZXBlYXQoIHRydWUgKSApIDsgLy8gcmV0dXJucyB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGFueSggcmVwZWF0KCBmYWxzZSApICkgOyAvLyBsb29wcyBmb3JldmVyXG4gKlxuICogQGV4YW1wbGVcbiAqIGFueSggbnJlcGVhdCggZmFsc2UgLCAxMCApICkgOyAvLyByZXR1cm5zIGZhbHNlXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiBhbnkgZWxlbWVudCBvZlxuICogPGNvZGU+aXRlcmFibGU8L2NvZGU+IGlzIHRydXRoeSwgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFueSAoIGl0ZXJhYmxlICkge1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkge1xuXG5cdFx0aWYgKCBpdGVtICkgcmV0dXJuIHRydWUgO1xuXG5cdH1cblxuXHRyZXR1cm4gZmFsc2UgO1xuXG59XG4iXX0=