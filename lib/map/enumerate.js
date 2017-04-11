'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enumerate = enumerate;

var _ = require('..');

/**
 * Yields (index,element) tuples where the elements are taken from the input
 * iterable. You can choose the starting index. The starting index is
 * <code>0</code> by default.
 *
 * @example
 * // returns [ [ 0 , 'a' ] , [ 1 , 'b' ] , [ 2 , 'c' ] ]
 * list( enumerate( 'abc' ) ) ;
 *
 * @example
 * // returns [ [ 1 , 'a' ] , [ 2 , 'b' ] , [ 3 , 'c' ] ]
 * list( enumerate( 'abc' , 1 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} [start=0] - The starting index.
 * @returns {Iterator}
 */
function enumerate(iterable) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


  return (0, _._zip2)((0, _._count)(start, 1), iterable);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZW51bWVyYXRlLmpzIl0sIm5hbWVzIjpbImVudW1lcmF0ZSIsIml0ZXJhYmxlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBbUJnQkEsUyxHQUFBQSxTOztBQW5CaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFNBQVNBLFNBQVQsQ0FBcUJDLFFBQXJCLEVBQTJDO0FBQUEsTUFBWkMsS0FBWSx1RUFBSixDQUFJOzs7QUFFakQsU0FBTyxhQUFPLGNBQVFBLEtBQVIsRUFBZ0IsQ0FBaEIsQ0FBUCxFQUE2QkQsUUFBN0IsQ0FBUDtBQUVBIiwiZmlsZSI6ImVudW1lcmF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF96aXAyICwgX2NvdW50IH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBZaWVsZHMgKGluZGV4LGVsZW1lbnQpIHR1cGxlcyB3aGVyZSB0aGUgZWxlbWVudHMgYXJlIHRha2VuIGZyb20gdGhlIGlucHV0XG4gKiBpdGVyYWJsZS4gWW91IGNhbiBjaG9vc2UgdGhlIHN0YXJ0aW5nIGluZGV4LiBUaGUgc3RhcnRpbmcgaW5kZXggaXNcbiAqIDxjb2RlPjA8L2NvZGU+IGJ5IGRlZmF1bHQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyBbIDAgLCAnYScgXSAsIFsgMSAsICdiJyBdICwgWyAyICwgJ2MnIF0gXVxuICogbGlzdCggZW51bWVyYXRlKCAnYWJjJyApICkgO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgWyAxICwgJ2EnIF0gLCBbIDIgLCAnYicgXSAsIFsgMyAsICdjJyBdIF1cbiAqIGxpc3QoIGVudW1lcmF0ZSggJ2FiYycgLCAxICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0PTBdIC0gVGhlIHN0YXJ0aW5nIGluZGV4LlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW51bWVyYXRlICggaXRlcmFibGUsIHN0YXJ0ID0gMCApIHtcblxuXHRyZXR1cm4gX3ppcDIoIF9jb3VudCggc3RhcnQgLCAxICkgLCBpdGVyYWJsZSApIDtcblxufVxuIl19