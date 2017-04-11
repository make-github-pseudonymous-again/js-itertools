'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;

var _zip2 = require('./_zip');

/**
 * Zips iterables together. Yields a tuple containing the first element of each
 * iterable, then a tupe containing the second element of each iterable, etc.
 * Stops when one of the iterables runs out of elements.
 *
 * @example
 * // returns [ [ 'a' , 1 ] , [ 'b' , 2 ] , [ 'c' , 3 ] ]
 * list( zip( 'abcd' , range(3) ) ) ;
 *
 * @param {...Iterable} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
function zip() {
  for (var _len = arguments.length, iterables = Array(_len), _key = 0; _key < _len; _key++) {
    iterables[_key] = arguments[_key];
  }

  return (0, _zip2._zip)(iterables);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvemlwLmpzIl0sIm5hbWVzIjpbInppcCIsIml0ZXJhYmxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlZ0JBLEcsR0FBQUEsRzs7QUFmaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTQSxHQUFULEdBQThCO0FBQUEsb0NBQVpDLFNBQVk7QUFBWkEsYUFBWTtBQUFBOztBQUVwQyxTQUFPLGdCQUFNQSxTQUFOLENBQVA7QUFFQSIsImZpbGUiOiJ6aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfemlwIH0gZnJvbSAnLi9femlwJyA7XG5cbi8qKlxuICogWmlwcyBpdGVyYWJsZXMgdG9nZXRoZXIuIFlpZWxkcyBhIHR1cGxlIGNvbnRhaW5pbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgZWFjaFxuICogaXRlcmFibGUsIHRoZW4gYSB0dXBlIGNvbnRhaW5pbmcgdGhlIHNlY29uZCBlbGVtZW50IG9mIGVhY2ggaXRlcmFibGUsIGV0Yy5cbiAqIFN0b3BzIHdoZW4gb25lIG9mIHRoZSBpdGVyYWJsZXMgcnVucyBvdXQgb2YgZWxlbWVudHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyBbICdhJyAsIDEgXSAsIFsgJ2InICwgMiBdICwgWyAnYycgLCAzIF0gXVxuICogbGlzdCggemlwKCAnYWJjZCcgLCByYW5nZSgzKSApICkgO1xuICpcbiAqIEBwYXJhbSB7Li4uSXRlcmFibGV9IGl0ZXJhYmxlcyAtIFRoZSBpdGVyYWJsZXMgdG8gemlwLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHppcCAoIC4uLml0ZXJhYmxlcyApIHtcblxuXHRyZXR1cm4gX3ppcCggaXRlcmFibGVzICkgO1xuXG59XG4iXX0=