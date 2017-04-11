'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sorted = sorted;

var _list = require('../base/list');

/**
 * Outputs an array containing the elements of the input iterable sorted
 * according to a given comparison function.
 *
 * @param {Function} compare - The comparison function to use. This function
 * must be 2-ary. It must return -1, 0, or 1 depending whether the first
 * parameter is, respectively, less than, equal to, or greater than the second
 * parameter.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Array} - The input iterable, sorted.
 */
function sorted(compare, iterable) {

  return (0, _list.list)(iterable).sort(compare);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvc29ydGVkLmpzIl0sIm5hbWVzIjpbInNvcnRlZCIsImNvbXBhcmUiLCJpdGVyYWJsZSIsInNvcnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWdCQSxNLEdBQUFBLE07O0FBYmhCOztBQUVBOzs7Ozs7Ozs7OztBQVdPLFNBQVNBLE1BQVQsQ0FBa0JDLE9BQWxCLEVBQTRCQyxRQUE1QixFQUF1Qzs7QUFFN0MsU0FBTyxnQkFBTUEsUUFBTixFQUFpQkMsSUFBakIsQ0FBdUJGLE9BQXZCLENBQVA7QUFFQSIsImZpbGUiOiJzb3J0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vYmFzZS9saXN0JyA7XG5cbi8qKlxuICogT3V0cHV0cyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUgc29ydGVkXG4gKiBhY2NvcmRpbmcgdG8gYSBnaXZlbiBjb21wYXJpc29uIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmUgLSBUaGUgY29tcGFyaXNvbiBmdW5jdGlvbiB0byB1c2UuIFRoaXMgZnVuY3Rpb25cbiAqIG11c3QgYmUgMi1hcnkuIEl0IG11c3QgcmV0dXJuIC0xLCAwLCBvciAxIGRlcGVuZGluZyB3aGV0aGVyIHRoZSBmaXJzdFxuICogcGFyYW1ldGVyIGlzLCByZXNwZWN0aXZlbHksIGxlc3MgdGhhbiwgZXF1YWwgdG8sIG9yIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kXG4gKiBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gLSBUaGUgaW5wdXQgaXRlcmFibGUsIHNvcnRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRlZCAoIGNvbXBhcmUgLCBpdGVyYWJsZSApIHtcblxuXHRyZXR1cm4gbGlzdCggaXRlcmFibGUgKS5zb3J0KCBjb21wYXJlICkgO1xuXG59XG4iXX0=