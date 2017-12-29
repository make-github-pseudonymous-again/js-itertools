"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;
/**
 * Yields all elements from input iterable that verify a given predicate.
 *
 * @example
 * // returns [ 1 , 3 , 5 , 7 , 9 ]
 * list( filter( x => x % 2 , range( 10 ) ) ) ;
 *
 * @param {Function} predicate - A unary function that returns a truthy or
 * falsy value.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
function* filter(predicate, iterable) {

  for (let item of iterable) {

    if (predicate(item)) yield item;
  }
}

/**
 * Same as {@link filter}.
 * @function filtertrue
 */
const filtertrue = exports.filtertrue = filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZmlsdGVyLmpzIl0sIm5hbWVzIjpbImZpbHRlciIsInByZWRpY2F0ZSIsIml0ZXJhYmxlIiwiaXRlbSIsImZpbHRlcnRydWUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWlCQSxNLEdBQUFBLE07QUFiakI7Ozs7Ozs7Ozs7Ozs7QUFhTyxVQUFVQSxNQUFWLENBQW1CQyxTQUFuQixFQUErQkMsUUFBL0IsRUFBMEM7O0FBRWhELE9BQU0sSUFBSUMsSUFBVixJQUFrQkQsUUFBbEIsRUFBNkI7O0FBRTVCLFFBQUtELFVBQVdFLElBQVgsQ0FBTCxFQUF5QixNQUFNQSxJQUFOO0FBRXpCO0FBRUQ7O0FBRUQ7Ozs7QUFJTyxNQUFNQyxrQ0FBYUosTUFBbkIiLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBZaWVsZHMgYWxsIGVsZW1lbnRzIGZyb20gaW5wdXQgaXRlcmFibGUgdGhhdCB2ZXJpZnkgYSBnaXZlbiBwcmVkaWNhdGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyAxICwgMyAsIDUgLCA3ICwgOSBdXG4gKiBsaXN0KCBmaWx0ZXIoIHggPT4geCAlIDIgLCByYW5nZSggMTAgKSApICkgO1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSAtIEEgdW5hcnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdHJ1dGh5IG9yXG4gKiBmYWxzeSB2YWx1ZS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBmaWx0ZXIgKCBwcmVkaWNhdGUgLCBpdGVyYWJsZSApIHtcblxuXHRmb3IgKCBsZXQgaXRlbSBvZiBpdGVyYWJsZSApIHtcblxuXHRcdGlmICggcHJlZGljYXRlKCBpdGVtICkgKSB5aWVsZCBpdGVtIDtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBTYW1lIGFzIHtAbGluayBmaWx0ZXJ9LlxuICogQGZ1bmN0aW9uIGZpbHRlcnRydWVcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlcnRydWUgPSBmaWx0ZXIgO1xuIl19