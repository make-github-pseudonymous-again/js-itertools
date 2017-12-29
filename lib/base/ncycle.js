"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ncycle = ncycle;
/**
 * Same as {@link cycle} but only cycles a limited number of times.
 *
 * @example
 * // returns [0,1,0,1,0,1,0,1]
 * list(ncycle(range(2),4)) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of times to cycle through the input iterable.
 * @returns {Iterator}
 *
 */
function* ncycle(iterable, n) {

  let buffer = [];

  for (let item of iterable) {

    yield item;
    buffer.push(item);
  }

  if (buffer.length === 0) return;

  while (--n > 0) yield* buffer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL25jeWNsZS5qcyJdLCJuYW1lcyI6WyJuY3ljbGUiLCJpdGVyYWJsZSIsIm4iLCJidWZmZXIiLCJpdGVtIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZaUJBLE0sR0FBQUEsTTtBQVpqQjs7Ozs7Ozs7Ozs7O0FBWU8sVUFBVUEsTUFBVixDQUFtQkMsUUFBbkIsRUFBOEJDLENBQTlCLEVBQWtDOztBQUV4QyxNQUFJQyxTQUFTLEVBQWI7O0FBRUEsT0FBTSxJQUFJQyxJQUFWLElBQWtCSCxRQUFsQixFQUE2Qjs7QUFFNUIsVUFBTUcsSUFBTjtBQUNBRCxXQUFPRSxJQUFQLENBQWFELElBQWI7QUFFQTs7QUFFRCxNQUFLRCxPQUFPRyxNQUFQLEtBQWtCLENBQXZCLEVBQTJCOztBQUUzQixTQUFRLEVBQUVKLENBQUYsR0FBTSxDQUFkLEVBQWtCLE9BQU9DLE1BQVA7QUFFbEIiLCJmaWxlIjoibmN5Y2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTYW1lIGFzIHtAbGluayBjeWNsZX0gYnV0IG9ubHkgY3ljbGVzIGEgbGltaXRlZCBudW1iZXIgb2YgdGltZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzAsMSwwLDEsMCwxLDAsMV1cbiAqIGxpc3QobmN5Y2xlKHJhbmdlKDIpLDQpKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gY3ljbGUgdGhyb3VnaCB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIG5jeWNsZSAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRsZXQgYnVmZmVyID0gWyBdIDtcblxuXHRmb3IgKCBsZXQgaXRlbSBvZiBpdGVyYWJsZSApIHtcblxuXHRcdHlpZWxkIGl0ZW0gO1xuXHRcdGJ1ZmZlci5wdXNoKCBpdGVtICkgO1xuXG5cdH1cblxuXHRpZiAoIGJ1ZmZlci5sZW5ndGggPT09IDAgKSByZXR1cm4gO1xuXG5cdHdoaWxlICggLS1uID4gMCApIHlpZWxkKiBidWZmZXIgO1xuXG59XG4iXX0=