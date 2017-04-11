'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ziplongest = ziplongest;

var _ziplongest2 = require('./_ziplongest');

/**
 * Same as zip, but continues to yield zipped tuples until the last iterable is
 * exhausted.
 *
 * @example
 * // returns [['A','x'],['B','y'],['C','-'],['D','-']]
 * list( ziplongest( '-' , 'ABCD', 'xy' ) ) ;
 *
 * @param fillvalue - The value to yield for iterators that are exhausted.
 * @param {...Iterable} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
function ziplongest(fillvalue) {
  for (var _len = arguments.length, iterables = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    iterables[_key - 1] = arguments[_key];
  }

  return (0, _ziplongest2._ziplongest)(fillvalue, iterables);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvemlwbG9uZ2VzdC5qcyJdLCJuYW1lcyI6WyJ6aXBsb25nZXN0IiwiZmlsbHZhbHVlIiwiaXRlcmFibGVzIl0sIm1hcHBpbmdzIjoiOzs7OztRQWVnQkEsVSxHQUFBQSxVOztBQWZoQjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVNBLFVBQVQsQ0FBc0JDLFNBQXRCLEVBQWlEO0FBQUEsb0NBQVpDLFNBQVk7QUFBWkEsYUFBWTtBQUFBOztBQUV2RCxTQUFPLDhCQUFhRCxTQUFiLEVBQXlCQyxTQUF6QixDQUFQO0FBRUEiLCJmaWxlIjoiemlwbG9uZ2VzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF96aXBsb25nZXN0IH0gZnJvbSAnLi9femlwbG9uZ2VzdCcgO1xuXG4vKipcbiAqIFNhbWUgYXMgemlwLCBidXQgY29udGludWVzIHRvIHlpZWxkIHppcHBlZCB0dXBsZXMgdW50aWwgdGhlIGxhc3QgaXRlcmFibGUgaXNcbiAqIGV4aGF1c3RlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbWydBJywneCddLFsnQicsJ3knXSxbJ0MnLCctJ10sWydEJywnLSddXVxuICogbGlzdCggemlwbG9uZ2VzdCggJy0nICwgJ0FCQ0QnLCAneHknICkgKSA7XG4gKlxuICogQHBhcmFtIGZpbGx2YWx1ZSAtIFRoZSB2YWx1ZSB0byB5aWVsZCBmb3IgaXRlcmF0b3JzIHRoYXQgYXJlIGV4aGF1c3RlZC5cbiAqIEBwYXJhbSB7Li4uSXRlcmFibGV9IGl0ZXJhYmxlcyAtIFRoZSBpdGVyYWJsZXMgdG8gemlwLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHppcGxvbmdlc3QgKCBmaWxsdmFsdWUgLCAuLi5pdGVyYWJsZXMgKSB7XG5cblx0cmV0dXJuIF96aXBsb25nZXN0KCBmaWxsdmFsdWUgLCBpdGVyYWJsZXMgKSA7XG5cbn1cbiJdfQ==