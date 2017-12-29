"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._count = _count;
/**
 * Yields increasing or decreasing sequences of numbers. The starting value
 * and the step between separating output values can be chosen.
 *
 * @example
 * // equivalent to list( range( 7 ) )
 * list( head( _count( 0 , 1 ) , 7 ) ) ;
 *
 * @example
 * // returns [0,-1,-2,-3,-4]
 * list( head( _count( 0 , -1 ) , 5 ) ) ;
 *
 * @param {Number} start - The starting value.
 * @param {Number} step - The step between the values.
 * @returns {Iterator}
 */
function* _count(start, step) {

  while (true) {

    yield start;

    start += step;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL19jb3VudC5qcyJdLCJuYW1lcyI6WyJfY291bnQiLCJzdGFydCIsInN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JpQkEsTSxHQUFBQSxNO0FBaEJqQjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxVQUFVQSxNQUFWLENBQW1CQyxLQUFuQixFQUEyQkMsSUFBM0IsRUFBa0M7O0FBRXhDLFNBQVEsSUFBUixFQUFlOztBQUVkLFVBQU1ELEtBQU47O0FBRUFBLGFBQVNDLElBQVQ7QUFFQTtBQUVEIiwiZmlsZSI6Il9jb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogWWllbGRzIGluY3JlYXNpbmcgb3IgZGVjcmVhc2luZyBzZXF1ZW5jZXMgb2YgbnVtYmVycy4gVGhlIHN0YXJ0aW5nIHZhbHVlXG4gKiBhbmQgdGhlIHN0ZXAgYmV0d2VlbiBzZXBhcmF0aW5nIG91dHB1dCB2YWx1ZXMgY2FuIGJlIGNob3Nlbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gZXF1aXZhbGVudCB0byBsaXN0KCByYW5nZSggNyApIClcbiAqIGxpc3QoIGhlYWQoIF9jb3VudCggMCAsIDEgKSAsIDcgKSApIDtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMCwtMSwtMiwtMywtNF1cbiAqIGxpc3QoIGhlYWQoIF9jb3VudCggMCAsIC0xICkgLCA1ICkgKSA7XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IC0gVGhlIHN0YXJ0aW5nIHZhbHVlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgc3RlcCBiZXR3ZWVuIHRoZSB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX2NvdW50ICggc3RhcnQgLCBzdGVwICkge1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdHlpZWxkIHN0YXJ0IDtcblxuXHRcdHN0YXJ0ICs9IHN0ZXAgO1xuXG5cdH1cblxufVxuIl19