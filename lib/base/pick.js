"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = pick;
/**
 * Yields some of the properties of the input object. The properties to yield
 * are designated by the input iterable.
 *
 * @example
 * // returns [ 'a' , 'e' , 'c' ]
 * list( pick( 'abcde' , [ 0 , 4 , 2 ] ) ) ;
 *
 * @param {Object} object - The input object.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function* pick(object, iterable) {

  for (let key of iterable) yield object[key];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3BpY2suanMiXSwibmFtZXMiOlsicGljayIsIm9iamVjdCIsIml0ZXJhYmxlIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7OztRQVlpQkEsSSxHQUFBQSxJO0FBWmpCOzs7Ozs7Ozs7Ozs7QUFZTyxVQUFVQSxJQUFWLENBQWlCQyxNQUFqQixFQUEwQkMsUUFBMUIsRUFBcUM7O0FBRTNDLE9BQU0sSUFBSUMsR0FBVixJQUFpQkQsUUFBakIsRUFBNEIsTUFBTUQsT0FBT0UsR0FBUCxDQUFOO0FBRTVCIiwiZmlsZSI6InBpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFlpZWxkcyBzb21lIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBpbnB1dCBvYmplY3QuIFRoZSBwcm9wZXJ0aWVzIHRvIHlpZWxkXG4gKiBhcmUgZGVzaWduYXRlZCBieSB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyAnYScgLCAnZScgLCAnYycgXVxuICogbGlzdCggcGljayggJ2FiY2RlJyAsIFsgMCAsIDQgLCAyIF0gKSApIDtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gVGhlIGlucHV0IG9iamVjdC5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHBpY2sgKCBvYmplY3QgLCBpdGVyYWJsZSApIHtcblxuXHRmb3IgKCBsZXQga2V5IG9mIGl0ZXJhYmxlICkgeWllbGQgb2JqZWN0W2tleV0gO1xuXG59XG4iXX0=