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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcGxvbmdlc3QuanMiXSwibmFtZXMiOlsiX3ppcGxvbmdlc3QiLCJmaWxsdmFsdWUiLCJpdGVyYWJsZXMiLCJjb3VudGVyIiwibGVuZ3RoIiwiZmlsbGVyIiwiaXRlcmF0b3JzIiwiaXRlciIsImJ1ZmZlciIsImkiLCJlIiwiX25leHQiLCJkb25lIiwicHVzaCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztRQWVpQkEsVyxHQUFBQSxXOztBQWZqQjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFPLFVBQVVBLFdBQVYsQ0FBd0JDLFNBQXhCLEVBQW1DQyxTQUFuQyxFQUErQzs7QUFFbEQsTUFBSUMsVUFBVUQsVUFBVUUsTUFBeEI7O0FBRUEsTUFBS0QsWUFBWSxDQUFqQixFQUFxQjs7QUFFckIsUUFBTUUsU0FBUyxjQUFRSixTQUFSLENBQWY7O0FBRUEsUUFBTUssWUFBWSxZQUFNLFdBQUtDLE1BQUwsRUFBWUwsU0FBWixDQUFOLENBQWxCOztBQUVBLFNBQVEsSUFBUixFQUFlOztBQUVsQixVQUFNTSxTQUFTLEVBQWY7O0FBRUEsU0FBTSxNQUFNLENBQUVDLENBQUYsRUFBTUMsQ0FBTixDQUFaLElBQXlCLGlCQUFXLFdBQUtDLE9BQUwsRUFBYUwsU0FBYixDQUFYLENBQXpCLEVBQWlFO0FBQzdELFVBQUtJLEVBQUVFLElBQVAsRUFBYztBQUNqQixVQUFFVCxPQUFGO0FBQ0EsWUFBS0EsWUFBWSxDQUFqQixFQUFxQjtBQUNyQkcsa0JBQVVHLENBQVYsSUFBZUosTUFBZjtBQUNBRyxlQUFPSyxJQUFQLENBQWFaLFNBQWI7QUFDSSxPQUxELE1BTUs7QUFDUk8sZUFBT0ssSUFBUCxDQUFhSCxFQUFFSSxLQUFmO0FBQ0k7QUFDSjs7QUFFRCxVQUFNTixNQUFOO0FBRUk7QUFFSiIsImZpbGUiOiJfemlwbG9uZ2VzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCBtYXAgLCBpdGVyICwgX25leHQgLCByZXBlYXQgLCBlbnVtZXJhdGUgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIFNhbWUgYXMgX3ppcCwgYnV0IGNvbnRpbnVlcyB0byB5aWVsZCB6aXBwZWQgdHVwbGVzIHVudGlsIHRoZSBsYXN0IGl0ZXJhYmxlIGlzXG4gKiBleGhhdXN0ZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW1snQScsJ3gnXSxbJ0InLCd5J10sWydDJywnLSddLFsnRCcsJy0nXV1cbiAqIGxpc3QoIF96aXBsb25nZXN0KCAnLScgLCBbICdBQkNEJywgJ3h5JyBdICkgKSA7XG4gKlxuICogQHBhcmFtIGZpbGx2YWx1ZSAtIFRoZSB2YWx1ZSB0byB5aWVsZCBmb3IgaXRlcmF0b3JzIHRoYXQgYXJlIGV4aGF1c3RlZC5cbiAqIEBwYXJhbSB7SXRlcmFibGVbXX0gaXRlcmFibGVzIC0gVGhlIGl0ZXJhYmxlcyB0byB6aXAuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIF96aXBsb25nZXN0ICggZmlsbHZhbHVlLCBpdGVyYWJsZXMgKSB7XG5cbiAgICBsZXQgY291bnRlciA9IGl0ZXJhYmxlcy5sZW5ndGggO1xuXG4gICAgaWYgKCBjb3VudGVyID09PSAwICkgcmV0dXJuIDtcblxuICAgIGNvbnN0IGZpbGxlciA9IHJlcGVhdCggZmlsbHZhbHVlICkgO1xuXG4gICAgY29uc3QgaXRlcmF0b3JzID0gbGlzdCggbWFwKCBpdGVyICwgaXRlcmFibGVzICkgKSA7XG5cbiAgICB3aGlsZSAoIHRydWUgKSB7XG5cblx0Y29uc3QgYnVmZmVyID0gWyBdIDtcblxuXHRmb3IgKCBjb25zdCBbIGkgLCBlIF0gb2YgZW51bWVyYXRlKCBtYXAoIF9uZXh0ICwgaXRlcmF0b3JzICkgKSApIHtcblx0ICAgIGlmICggZS5kb25lICkge1xuXHRcdC0tY291bnRlciA7XG5cdFx0aWYgKCBjb3VudGVyID09PSAwICkgcmV0dXJuIDtcblx0XHRpdGVyYXRvcnNbaV0gPSBmaWxsZXIgO1xuXHRcdGJ1ZmZlci5wdXNoKCBmaWxsdmFsdWUgKSA7XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0XHRidWZmZXIucHVzaCggZS52YWx1ZSApIDtcblx0ICAgIH1cblx0fVxuXG5cdHlpZWxkIGJ1ZmZlciA7XG5cbiAgICB9XG5cbn1cbiJdfQ==