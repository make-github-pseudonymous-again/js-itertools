"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closure = closure;
/**
 * Computes the closure of a unary operator, starting from a single element.
 *
 * @experimental Should handle d-ary operators in the future. Not sure the name
 * is well chosen. An actual closure function would keep track of encountered
 * elements to stop when all elements have been found.
 *
 * @example
 * closure( x => x + 1 , 0 ) ; // 0 1 2 3 ...
 *
 * @example
 * closure( x => x * 2 , 1 ) ; // 1 2 4 8 ...
 *
 * @param {Function} operator The operator.
 * @param {Object} start The starting element.
 * @returns {Iterator} Iterator over the closure.
 */
function* closure(operator, start) {

  yield start;

  let element = start;

  while (true) {

    element = operator(element);

    yield element;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRyYS9jbG9zdXJlLmpzIl0sIm5hbWVzIjpbImNsb3N1cmUiLCJvcGVyYXRvciIsInN0YXJ0IiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmlCQSxPLEdBQUFBLE87QUFqQmpCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxVQUFVQSxPQUFWLENBQW9CQyxRQUFwQixFQUErQkMsS0FBL0IsRUFBdUM7O0FBRTdDLFFBQU1BLEtBQU47O0FBRUEsTUFBSUMsVUFBVUQsS0FBZDs7QUFFQSxTQUFRLElBQVIsRUFBZTs7QUFFZEMsY0FBVUYsU0FBU0UsT0FBVCxDQUFWOztBQUVBLFVBQU1BLE9BQU47QUFFQTtBQUVEIiwiZmlsZSI6ImNsb3N1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbXB1dGVzIHRoZSBjbG9zdXJlIG9mIGEgdW5hcnkgb3BlcmF0b3IsIHN0YXJ0aW5nIGZyb20gYSBzaW5nbGUgZWxlbWVudC5cbiAqXG4gKiBAZXhwZXJpbWVudGFsIFNob3VsZCBoYW5kbGUgZC1hcnkgb3BlcmF0b3JzIGluIHRoZSBmdXR1cmUuIE5vdCBzdXJlIHRoZSBuYW1lXG4gKiBpcyB3ZWxsIGNob3Nlbi4gQW4gYWN0dWFsIGNsb3N1cmUgZnVuY3Rpb24gd291bGQga2VlcCB0cmFjayBvZiBlbmNvdW50ZXJlZFxuICogZWxlbWVudHMgdG8gc3RvcCB3aGVuIGFsbCBlbGVtZW50cyBoYXZlIGJlZW4gZm91bmQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNsb3N1cmUoIHggPT4geCArIDEgLCAwICkgOyAvLyAwIDEgMiAzIC4uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjbG9zdXJlKCB4ID0+IHggKiAyICwgMSApIDsgLy8gMSAyIDQgOCAuLi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcGVyYXRvciBUaGUgb3BlcmF0b3IuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhcnQgVGhlIHN0YXJ0aW5nIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9IEl0ZXJhdG9yIG92ZXIgdGhlIGNsb3N1cmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogY2xvc3VyZSAoIG9wZXJhdG9yICwgc3RhcnQgKSB7XG5cblx0eWllbGQgc3RhcnQgO1xuXG5cdGxldCBlbGVtZW50ID0gc3RhcnQgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGVsZW1lbnQgPSBvcGVyYXRvcihlbGVtZW50KSA7XG5cblx0XHR5aWVsZCBlbGVtZW50IDtcblxuXHR9XG5cbn1cbiJdfQ==