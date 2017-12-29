"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._product = _product;
/**
 * Algorithm used by {@link product} to compute the product of one or more
 * iterables from pools of symbols.
 *
 * @example
 * // Ax Ay Bx By Cx Cy Dx Dy
 * _product(['xy', 'ABCD'], 0 , 2) ;
 *
 * @example
 * // 000 001 010 011 100 101 110 111
 * _product([[0,1],[0,1],[0,1]], 0 , 3) ;
 *
 * @param {Array[]} pools - The pools of symbols in reverse order.
 * @param {Number} i - Index of the pool to draw the next symbol from
 * @param {Number} n - Number of pools in total.
 * @returns {Iterator}
 */
function* _product(pools, i, n) {

  if (i === n) {
    yield [];return;
  }

  let iterable = pools[i];

  for (let buffer of _product(pools, i + 1, n)) {

    for (let item of iterable) {

      buffer.push(item);

      yield buffer;

      buffer.pop(item);
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3Byb2R1Y3QuanMiXSwibmFtZXMiOlsiX3Byb2R1Y3QiLCJwb29scyIsImkiLCJuIiwiaXRlcmFibGUiLCJidWZmZXIiLCJpdGVtIiwicHVzaCIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmlCQSxRLEdBQUFBLFE7QUFqQmpCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxVQUFVQSxRQUFWLENBQXFCQyxLQUFyQixFQUE2QkMsQ0FBN0IsRUFBaUNDLENBQWpDLEVBQXFDOztBQUUzQyxNQUFLRCxNQUFNQyxDQUFYLEVBQWU7QUFBRSxVQUFNLEVBQU4sQ0FBWTtBQUFVOztBQUV2QyxNQUFJQyxXQUFXSCxNQUFNQyxDQUFOLENBQWY7O0FBRUEsT0FBTSxJQUFJRyxNQUFWLElBQW9CTCxTQUFVQyxLQUFWLEVBQWtCQyxJQUFJLENBQXRCLEVBQTBCQyxDQUExQixDQUFwQixFQUFvRDs7QUFFbkQsU0FBTSxJQUFJRyxJQUFWLElBQWtCRixRQUFsQixFQUE2Qjs7QUFFNUJDLGFBQU9FLElBQVAsQ0FBYUQsSUFBYjs7QUFFQSxZQUFNRCxNQUFOOztBQUVBQSxhQUFPRyxHQUFQLENBQVlGLElBQVo7QUFFQTtBQUVEO0FBRUQiLCJmaWxlIjoiX3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFsZ29yaXRobSB1c2VkIGJ5IHtAbGluayBwcm9kdWN0fSB0byBjb21wdXRlIHRoZSBwcm9kdWN0IG9mIG9uZSBvciBtb3JlXG4gKiBpdGVyYWJsZXMgZnJvbSBwb29scyBvZiBzeW1ib2xzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBeCBBeSBCeCBCeSBDeCBDeSBEeCBEeVxuICogX3Byb2R1Y3QoWyd4eScsICdBQkNEJ10sIDAgLCAyKSA7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIDAwMCAwMDEgMDEwIDAxMSAxMDAgMTAxIDExMCAxMTFcbiAqIF9wcm9kdWN0KFtbMCwxXSxbMCwxXSxbMCwxXV0sIDAgLCAzKSA7XG4gKlxuICogQHBhcmFtIHtBcnJheVtdfSBwb29scyAtIFRoZSBwb29scyBvZiBzeW1ib2xzIGluIHJldmVyc2Ugb3JkZXIuXG4gKiBAcGFyYW0ge051bWJlcn0gaSAtIEluZGV4IG9mIHRoZSBwb29sIHRvIGRyYXcgdGhlIG5leHQgc3ltYm9sIGZyb21cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gTnVtYmVyIG9mIHBvb2xzIGluIHRvdGFsLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIF9wcm9kdWN0ICggcG9vbHMgLCBpICwgbiApIHtcblxuXHRpZiAoIGkgPT09IG4gKSB7IHlpZWxkIFsgXSA7IHJldHVybiA7IH1cblxuXHRsZXQgaXRlcmFibGUgPSBwb29sc1tpXSA7XG5cblx0Zm9yICggbGV0IGJ1ZmZlciBvZiBfcHJvZHVjdCggcG9vbHMgLCBpICsgMSAsIG4gKSApIHtcblxuXHRcdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkge1xuXG5cdFx0XHRidWZmZXIucHVzaCggaXRlbSApIDtcblxuXHRcdFx0eWllbGQgYnVmZmVyIDtcblxuXHRcdFx0YnVmZmVyLnBvcCggaXRlbSApIDtcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==