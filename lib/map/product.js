'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.product = product;

var _ = require('..');

/**
 * Computes the product of the iterables given as first parameter. The second
 * parameter is an integer that tells how many times the list of iterables
 * given as input should be concatenated to itself before computing the
 * product. This second parameter is optional and its default value is
 * <code>1</code>.
 *
 * @example
 * // Ax Ay Bx By Cx Cy Dx Dy
 * product(['ABCD', 'xy']) ;
 *
 * @example
 * // 000 001 010 011 100 101 110 111
 * product([range(2)], 3) ;
 *
 * @param {Iterable} iterables - The input iterables.
 * @param {Number} repeat - The number of times to cycle through the input iterables.
 * @return {Iterator}
 */

function product(iterables, repeat = 1) {

  let pools = (0, _.list)((0, _.ncycle)((0, _.reversed)((0, _.map)(_.list, iterables)), repeat));

  return (0, _.map)(_.list, (0, _._product)(pools, 0, pools.length));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0IiwiaXRlcmFibGVzIiwicmVwZWF0IiwicG9vbHMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBc0JnQkEsTyxHQUFBQSxPOztBQXRCaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JPLFNBQVNBLE9BQVQsQ0FBbUJDLFNBQW5CLEVBQStCQyxTQUFTLENBQXhDLEVBQTRDOztBQUVsRCxNQUFJQyxRQUFRLFlBQU0sY0FBUSxnQkFBVSxtQkFBWUYsU0FBWixDQUFWLENBQVIsRUFBOENDLE1BQTlDLENBQU4sQ0FBWjs7QUFFQSxTQUFPLG1CQUFZLGdCQUFVQyxLQUFWLEVBQWtCLENBQWxCLEVBQXNCQSxNQUFNQyxNQUE1QixDQUFaLENBQVA7QUFFQSIsImZpbGUiOiJwcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIG1hcCAsIF9wcm9kdWN0ICwgbmN5Y2xlICwgcmV2ZXJzZWQgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBwcm9kdWN0IG9mIHRoZSBpdGVyYWJsZXMgZ2l2ZW4gYXMgZmlyc3QgcGFyYW1ldGVyLiBUaGUgc2Vjb25kXG4gKiBwYXJhbWV0ZXIgaXMgYW4gaW50ZWdlciB0aGF0IHRlbGxzIGhvdyBtYW55IHRpbWVzIHRoZSBsaXN0IG9mIGl0ZXJhYmxlc1xuICogZ2l2ZW4gYXMgaW5wdXQgc2hvdWxkIGJlIGNvbmNhdGVuYXRlZCB0byBpdHNlbGYgYmVmb3JlIGNvbXB1dGluZyB0aGVcbiAqIHByb2R1Y3QuIFRoaXMgc2Vjb25kIHBhcmFtZXRlciBpcyBvcHRpb25hbCBhbmQgaXRzIGRlZmF1bHQgdmFsdWUgaXNcbiAqIDxjb2RlPjE8L2NvZGU+LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBeCBBeSBCeCBCeSBDeCBDeSBEeCBEeVxuICogcHJvZHVjdChbJ0FCQ0QnLCAneHknXSkgO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyAwMDAgMDAxIDAxMCAwMTEgMTAwIDEwMSAxMTAgMTExXG4gKiBwcm9kdWN0KFtyYW5nZSgyKV0sIDMpIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZXMgLSBUaGUgaW5wdXQgaXRlcmFibGVzLlxuICogQHBhcmFtIHtOdW1iZXJ9IHJlcGVhdCAtIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gY3ljbGUgdGhyb3VnaCB0aGUgaW5wdXQgaXRlcmFibGVzLlxuICogQHJldHVybiB7SXRlcmF0b3J9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3QgKCBpdGVyYWJsZXMgLCByZXBlYXQgPSAxICkge1xuXG5cdGxldCBwb29scyA9IGxpc3QoIG5jeWNsZSggcmV2ZXJzZWQoIG1hcCggbGlzdCAsIGl0ZXJhYmxlcyApICkgLCByZXBlYXQgKSApIDtcblxuXHRyZXR1cm4gbWFwKCBsaXN0ICwgX3Byb2R1Y3QoIHBvb2xzICwgMCAsIHBvb2xzLmxlbmd0aCApICkgO1xuXG59XG4iXX0=