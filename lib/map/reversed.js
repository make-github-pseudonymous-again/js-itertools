"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reversed = reversed;
/**
 * Yields elements of the input iterable in reverse order.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator} - The input iterable, reversed.
 */
function* reversed(iterable) {

  let buffer = [];

  for (let item of iterable) buffer.push(item);

  // caching length is believed to be faster

  let jz = buffer.length;

  for (; jz; --jz) yield buffer.pop();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcmV2ZXJzZWQuanMiXSwibmFtZXMiOlsicmV2ZXJzZWQiLCJpdGVyYWJsZSIsImJ1ZmZlciIsIml0ZW0iLCJwdXNoIiwianoiLCJsZW5ndGgiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWlCQSxRLEdBQUFBLFE7QUFOakI7Ozs7OztBQU1PLFVBQVVBLFFBQVYsQ0FBcUJDLFFBQXJCLEVBQWdDOztBQUV0QyxNQUFJQyxTQUFTLEVBQWI7O0FBRUEsT0FBTSxJQUFJQyxJQUFWLElBQWtCRixRQUFsQixFQUE2QkMsT0FBT0UsSUFBUCxDQUFhRCxJQUFiOztBQUU3Qjs7QUFFQSxNQUFJRSxLQUFLSCxPQUFPSSxNQUFoQjs7QUFFQSxTQUFRRCxFQUFSLEVBQWEsRUFBRUEsRUFBZixFQUFvQixNQUFNSCxPQUFPSyxHQUFQLEVBQU47QUFFcEIiLCJmaWxlIjoicmV2ZXJzZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFlpZWxkcyBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUgaW4gcmV2ZXJzZSBvcmRlci5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn0gLSBUaGUgaW5wdXQgaXRlcmFibGUsIHJldmVyc2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJldmVyc2VkICggaXRlcmFibGUgKSB7XG5cblx0bGV0IGJ1ZmZlciA9IFsgXSA7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSBidWZmZXIucHVzaCggaXRlbSApIDtcblxuXHQvLyBjYWNoaW5nIGxlbmd0aCBpcyBiZWxpZXZlZCB0byBiZSBmYXN0ZXJcblxuXHRsZXQganogPSBidWZmZXIubGVuZ3RoIDtcblxuXHRmb3IgKCA7IGp6IDsgLS1qeiApIHlpZWxkIGJ1ZmZlci5wb3AoICkgO1xuXG59XG4iXX0=