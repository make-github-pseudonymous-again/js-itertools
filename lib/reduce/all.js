"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
/**
 * Returns true if all of the elements of the input iterable are truthy.
 *
 * @example
 * all( repeat( true ) ) ; // loops forever
 *
 * @example
 * all( repeat( false ) ) ; // returns false
 *
 * @example
 * all( chain( [ nrepeat( true , 10 ) , repeat( false ) ) ) ; // returns false
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Boolean} Returns <code>true</code> if all element of
 * <code>iterable</code> are truthy, <code>false</code> otherwise.
 */
function all(iterable) {

  for (let item of iterable) {

    if (!item) return false;
  }

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvYWxsLmpzIl0sIm5hbWVzIjpbImFsbCIsIml0ZXJhYmxlIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxHLEdBQUFBLEc7QUFoQmhCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQjs7QUFFaEMsT0FBTSxJQUFJQyxJQUFWLElBQWtCRCxRQUFsQixFQUE2Qjs7QUFFNUIsUUFBSyxDQUFDQyxJQUFOLEVBQWEsT0FBTyxLQUFQO0FBRWI7O0FBRUQsU0FBTyxJQUFQO0FBRUEiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIG9mIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUgYXJlIHRydXRoeS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYWxsKCByZXBlYXQoIHRydWUgKSApIDsgLy8gbG9vcHMgZm9yZXZlclxuICpcbiAqIEBleGFtcGxlXG4gKiBhbGwoIHJlcGVhdCggZmFsc2UgKSApIDsgLy8gcmV0dXJucyBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiBhbGwoIGNoYWluKCBbIG5yZXBlYXQoIHRydWUgLCAxMCApICwgcmVwZWF0KCBmYWxzZSApICkgKSA7IC8vIHJldHVybnMgZmFsc2VcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIGFsbCBlbGVtZW50IG9mXG4gKiA8Y29kZT5pdGVyYWJsZTwvY29kZT4gYXJlIHRydXRoeSwgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbCAoIGl0ZXJhYmxlICkge1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkge1xuXG5cdFx0aWYgKCAhaXRlbSApIHJldHVybiBmYWxzZSA7XG5cblx0fVxuXG5cdHJldHVybiB0cnVlIDtcblxufVxuIl19