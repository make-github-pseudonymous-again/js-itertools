"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nrepeat = nrepeat;
/**
 * Repeats the input item a few times. Returns an iterator that yields the input
 * item a fixed number of times.
 *
 * @example
 * list( nrepeat( 6 , 3 ) ) ; // returns [ 6 , 6 , 6 ]
 *
 * @param {Object} item - The input item.
 * @param {Number} times - The number of times to yield <code>item</code>.
 * @returns {Iterator}
 */
function* nrepeat(item, times) {

  while (times-- > 0) yield item;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvbnJlcGVhdC5qcyJdLCJuYW1lcyI6WyJucmVwZWF0IiwiaXRlbSIsInRpbWVzIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsTyxHQUFBQSxPO0FBWGpCOzs7Ozs7Ozs7OztBQVdPLFVBQVVBLE9BQVYsQ0FBb0JDLElBQXBCLEVBQTJCQyxLQUEzQixFQUFtQzs7QUFFekMsU0FBUUEsVUFBVSxDQUFsQixFQUFzQixNQUFNRCxJQUFOO0FBRXRCIiwiZmlsZSI6Im5yZXBlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlcGVhdHMgdGhlIGlucHV0IGl0ZW0gYSBmZXcgdGltZXMuIFJldHVybnMgYW4gaXRlcmF0b3IgdGhhdCB5aWVsZHMgdGhlIGlucHV0XG4gKiBpdGVtIGEgZml4ZWQgbnVtYmVyIG9mIHRpbWVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBsaXN0KCBucmVwZWF0KCA2ICwgMyApICkgOyAvLyByZXR1cm5zIFsgNiAsIDYgLCA2IF1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIFRoZSBpbnB1dCBpdGVtLlxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVzIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0byB5aWVsZCA8Y29kZT5pdGVtPC9jb2RlPi5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBucmVwZWF0ICggaXRlbSAsIHRpbWVzICkge1xuXG5cdHdoaWxlICggdGltZXMgLS0+IDAgKSB5aWVsZCBpdGVtIDtcblxufVxuIl19