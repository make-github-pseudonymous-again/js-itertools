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

function product(iterables) {
  var repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


  var pools = (0, _.list)((0, _.ncycle)((0, _.reversed)((0, _.map)(_.list, iterables)), repeat));

  return (0, _.map)(_.list, (0, _._product)(pools, 0, pools.length));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0IiwiaXRlcmFibGVzIiwicmVwZWF0IiwicG9vbHMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBc0JnQkEsTyxHQUFBQSxPOztBQXRCaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JPLFNBQVNBLE9BQVQsQ0FBbUJDLFNBQW5CLEVBQTRDO0FBQUEsTUFBYkMsTUFBYSx1RUFBSixDQUFJOzs7QUFFbEQsTUFBSUMsUUFBUSxZQUFNLGNBQVEsZ0JBQVUsbUJBQVlGLFNBQVosQ0FBVixDQUFSLEVBQThDQyxNQUE5QyxDQUFOLENBQVo7O0FBRUEsU0FBTyxtQkFBWSxnQkFBVUMsS0FBVixFQUFrQixDQUFsQixFQUFzQkEsTUFBTUMsTUFBNUIsQ0FBWixDQUFQO0FBRUEiLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCBtYXAgLCBfcHJvZHVjdCAsIG5jeWNsZSAsIHJldmVyc2VkIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgcHJvZHVjdCBvZiB0aGUgaXRlcmFibGVzIGdpdmVuIGFzIGZpcnN0IHBhcmFtZXRlci4gVGhlIHNlY29uZFxuICogcGFyYW1ldGVyIGlzIGFuIGludGVnZXIgdGhhdCB0ZWxscyBob3cgbWFueSB0aW1lcyB0aGUgbGlzdCBvZiBpdGVyYWJsZXNcbiAqIGdpdmVuIGFzIGlucHV0IHNob3VsZCBiZSBjb25jYXRlbmF0ZWQgdG8gaXRzZWxmIGJlZm9yZSBjb21wdXRpbmcgdGhlXG4gKiBwcm9kdWN0LiBUaGlzIHNlY29uZCBwYXJhbWV0ZXIgaXMgb3B0aW9uYWwgYW5kIGl0cyBkZWZhdWx0IHZhbHVlIGlzXG4gKiA8Y29kZT4xPC9jb2RlPi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXggQXkgQnggQnkgQ3ggQ3kgRHggRHlcbiAqIHByb2R1Y3QoWydBQkNEJywgJ3h5J10pIDtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gMDAwIDAwMSAwMTAgMDExIDEwMCAxMDEgMTEwIDExMVxuICogcHJvZHVjdChbcmFuZ2UoMildLCAzKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGVzIC0gVGhlIGlucHV0IGl0ZXJhYmxlcy5cbiAqIEBwYXJhbSB7TnVtYmVyfSByZXBlYXQgLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGN5Y2xlIHRocm91Z2ggdGhlIGlucHV0IGl0ZXJhYmxlcy5cbiAqIEByZXR1cm4ge0l0ZXJhdG9yfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0ICggaXRlcmFibGVzICwgcmVwZWF0ID0gMSApIHtcblxuXHRsZXQgcG9vbHMgPSBsaXN0KCBuY3ljbGUoIHJldmVyc2VkKCBtYXAoIGxpc3QgLCBpdGVyYWJsZXMgKSApICwgcmVwZWF0ICkgKSA7XG5cblx0cmV0dXJuIG1hcCggbGlzdCAsIF9wcm9kdWN0KCBwb29scyAsIDAgLCBwb29scy5sZW5ndGggKSApIDtcblxufVxuIl19