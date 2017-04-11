"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consume = consume;
/**
 * Consumes a given number of iterations of the input iterator.
 *
 * @param {Iterator} iterator - The input iterator.
 * @param {Number} n - The number of iterations to consume.
 *
 */
function consume(iterator, n) {

  while (n-- > 0 && !iterator.next().done) {}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2NvbnN1bWUuanMiXSwibmFtZXMiOlsiY29uc3VtZSIsIml0ZXJhdG9yIiwibiIsIm5leHQiLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsTyxHQUFBQSxPO0FBUGhCOzs7Ozs7O0FBT08sU0FBU0EsT0FBVCxDQUFtQkMsUUFBbkIsRUFBOEJDLENBQTlCLEVBQWtDOztBQUV4QyxTQUFRQSxNQUFNLENBQU4sSUFBVyxDQUFDRCxTQUFTRSxJQUFULEdBQWdCQyxJQUFwQztBQUVBIiwiZmlsZSI6ImNvbnN1bWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnN1bWVzIGEgZ2l2ZW4gbnVtYmVyIG9mIGl0ZXJhdGlvbnMgb2YgdGhlIGlucHV0IGl0ZXJhdG9yLlxuICpcbiAqIEBwYXJhbSB7SXRlcmF0b3J9IGl0ZXJhdG9yIC0gVGhlIGlucHV0IGl0ZXJhdG9yLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gY29uc3VtZS5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdW1lICggaXRlcmF0b3IgLCBuICkge1xuXG5cdHdoaWxlICggbiAtLT4gMCAmJiAhaXRlcmF0b3IubmV4dCgpLmRvbmUgKSA7XG5cbn1cbiJdfQ==