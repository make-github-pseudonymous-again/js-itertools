'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ziplongest = _ziplongest;

var _ = require('..');

/**
 * Same as _zip, but continues to yield zipped tuples until the last iterable is
 * exhausted.
 *
 * @example
 * // returns [['A','x'],['B','y'],['C','-'],['D','-']]
 * list( _ziplongest( '-' , [ 'ABCD', 'xy' ] ) ) ;
 *
 * @param fillvalue - The value to yield for iterators that are exhausted.
 * @param {Iterable[]} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
function* _ziplongest(fillvalue, iterables) {

  let counter = iterables.length;

  if (counter === 0) return;

  const filler = (0, _.repeat)(fillvalue);

  const iterators = (0, _.list)((0, _.map)(_.iter, iterables));

  while (true) {

    const buffer = [];

    for (const [i, e] of (0, _.enumerate)((0, _.map)(_._next, iterators))) {
      if (e.done) {
        --counter;
        if (counter === 0) return;
        iterators[i] = filler;
        buffer.push(fillvalue);
      } else {
        buffer.push(e.value);
      }
    }

    yield buffer;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcGxvbmdlc3QuanMiXSwibmFtZXMiOlsiX3ppcGxvbmdlc3QiLCJmaWxsdmFsdWUiLCJpdGVyYWJsZXMiLCJjb3VudGVyIiwibGVuZ3RoIiwiZmlsbGVyIiwiaXRlcmF0b3JzIiwiYnVmZmVyIiwiaSIsImUiLCJkb25lIiwicHVzaCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztRQWVpQkEsVyxHQUFBQSxXOztBQWZqQjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFPLFVBQVVBLFdBQVYsQ0FBd0JDLFNBQXhCLEVBQW1DQyxTQUFuQyxFQUErQzs7QUFFbEQsTUFBSUMsVUFBVUQsVUFBVUUsTUFBeEI7O0FBRUEsTUFBS0QsWUFBWSxDQUFqQixFQUFxQjs7QUFFckIsUUFBTUUsU0FBUyxjQUFRSixTQUFSLENBQWY7O0FBRUEsUUFBTUssWUFBWSxZQUFNLG1CQUFZSixTQUFaLENBQU4sQ0FBbEI7O0FBRUEsU0FBUSxJQUFSLEVBQWU7O0FBRWxCLFVBQU1LLFNBQVMsRUFBZjs7QUFFQSxTQUFNLE1BQU0sQ0FBRUMsQ0FBRixFQUFNQyxDQUFOLENBQVosSUFBeUIsaUJBQVcsb0JBQWFILFNBQWIsQ0FBWCxDQUF6QixFQUFpRTtBQUM3RCxVQUFLRyxFQUFFQyxJQUFQLEVBQWM7QUFDakIsVUFBRVAsT0FBRjtBQUNBLFlBQUtBLFlBQVksQ0FBakIsRUFBcUI7QUFDckJHLGtCQUFVRSxDQUFWLElBQWVILE1BQWY7QUFDQUUsZUFBT0ksSUFBUCxDQUFhVixTQUFiO0FBQ0ksT0FMRCxNQU1LO0FBQ1JNLGVBQU9JLElBQVAsQ0FBYUYsRUFBRUcsS0FBZjtBQUNJO0FBQ0o7O0FBRUQsVUFBTUwsTUFBTjtBQUVJO0FBRUoiLCJmaWxlIjoiX3ppcGxvbmdlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwICwgaXRlciAsIF9uZXh0ICwgcmVwZWF0ICwgZW51bWVyYXRlIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBTYW1lIGFzIF96aXAsIGJ1dCBjb250aW51ZXMgdG8geWllbGQgemlwcGVkIHR1cGxlcyB1bnRpbCB0aGUgbGFzdCBpdGVyYWJsZSBpc1xuICogZXhoYXVzdGVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFtbJ0EnLCd4J10sWydCJywneSddLFsnQycsJy0nXSxbJ0QnLCctJ11dXG4gKiBsaXN0KCBfemlwbG9uZ2VzdCggJy0nICwgWyAnQUJDRCcsICd4eScgXSApICkgO1xuICpcbiAqIEBwYXJhbSBmaWxsdmFsdWUgLSBUaGUgdmFsdWUgdG8geWllbGQgZm9yIGl0ZXJhdG9ycyB0aGF0IGFyZSBleGhhdXN0ZWQuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlW119IGl0ZXJhYmxlcyAtIFRoZSBpdGVyYWJsZXMgdG8gemlwLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBfemlwbG9uZ2VzdCAoIGZpbGx2YWx1ZSwgaXRlcmFibGVzICkge1xuXG4gICAgbGV0IGNvdW50ZXIgPSBpdGVyYWJsZXMubGVuZ3RoIDtcblxuICAgIGlmICggY291bnRlciA9PT0gMCApIHJldHVybiA7XG5cbiAgICBjb25zdCBmaWxsZXIgPSByZXBlYXQoIGZpbGx2YWx1ZSApIDtcblxuICAgIGNvbnN0IGl0ZXJhdG9ycyA9IGxpc3QoIG1hcCggaXRlciAsIGl0ZXJhYmxlcyApICkgO1xuXG4gICAgd2hpbGUgKCB0cnVlICkge1xuXG5cdGNvbnN0IGJ1ZmZlciA9IFsgXSA7XG5cblx0Zm9yICggY29uc3QgWyBpICwgZSBdIG9mIGVudW1lcmF0ZSggbWFwKCBfbmV4dCAsIGl0ZXJhdG9ycyApICkgKSB7XG5cdCAgICBpZiAoIGUuZG9uZSApIHtcblx0XHQtLWNvdW50ZXIgO1xuXHRcdGlmICggY291bnRlciA9PT0gMCApIHJldHVybiA7XG5cdFx0aXRlcmF0b3JzW2ldID0gZmlsbGVyIDtcblx0XHRidWZmZXIucHVzaCggZmlsbHZhbHVlICkgO1xuXHQgICAgfVxuXHQgICAgZWxzZSB7XG5cdFx0YnVmZmVyLnB1c2goIGUudmFsdWUgKSA7XG5cdCAgICB9XG5cdH1cblxuXHR5aWVsZCBidWZmZXIgO1xuXG4gICAgfVxuXG59XG4iXX0=