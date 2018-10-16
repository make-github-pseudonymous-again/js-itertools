'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._zip = _zip;

var _ = require('..');

/**
 * Zips iterables together. Yields a tuple containing the first element of each
 * iterable, then a tupe containing the second element of each iterable, etc.
 * Stops when one of the iterables runs out of elements.
 *
 * @example
 * // returns [ [ 'a' , 1 ] , [ 'b' , 2 ] , [ 'c' , 3 ] ]
 * list( _zip( [ 'abcd' , range(3) ] ) ) ;
 *
 * @param {Iterable[]} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
function* _zip(iterables) {

  let iterators = (0, _.list)((0, _.map)(_.iter, iterables));

  if (iterators.length === 0) return;

  while (true) {

    let buffer = [];

    for (let result of (0, _.map)(_._next, iterators)) {

      if (result.done) return;

      buffer.push(result.value);
    }

    yield buffer;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcC5qcyJdLCJuYW1lcyI6WyJfemlwIiwiaXRlcmFibGVzIiwiaXRlcmF0b3JzIiwiaXRlciIsImxlbmd0aCIsImJ1ZmZlciIsInJlc3VsdCIsIl9uZXh0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlaUJBLEksR0FBQUEsSTs7QUFmakI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhTyxVQUFVQSxJQUFWLENBQWlCQyxTQUFqQixFQUE2Qjs7QUFFbkMsTUFBSUMsWUFBWSxZQUFNLFdBQUtDLE1BQUwsRUFBWUYsU0FBWixDQUFOLENBQWhCOztBQUVBLE1BQUtDLFVBQVVFLE1BQVYsS0FBcUIsQ0FBMUIsRUFBOEI7O0FBRTlCLFNBQVEsSUFBUixFQUFlOztBQUVkLFFBQUlDLFNBQVMsRUFBYjs7QUFFQSxTQUFNLElBQUlDLE1BQVYsSUFBb0IsV0FBS0MsT0FBTCxFQUFhTCxTQUFiLENBQXBCLEVBQStDOztBQUU5QyxVQUFLSSxPQUFPRSxJQUFaLEVBQW1COztBQUVuQkgsYUFBT0ksSUFBUCxDQUFhSCxPQUFPSSxLQUFwQjtBQUVBOztBQUVELFVBQU1MLE1BQU47QUFFQTtBQUVEIiwiZmlsZSI6Il96aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwICwgaXRlciAsIF9uZXh0IH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBaaXBzIGl0ZXJhYmxlcyB0b2dldGhlci4gWWllbGRzIGEgdHVwbGUgY29udGFpbmluZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBlYWNoXG4gKiBpdGVyYWJsZSwgdGhlbiBhIHR1cGUgY29udGFpbmluZyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgZWFjaCBpdGVyYWJsZSwgZXRjLlxuICogU3RvcHMgd2hlbiBvbmUgb2YgdGhlIGl0ZXJhYmxlcyBydW5zIG91dCBvZiBlbGVtZW50cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIFsgJ2EnICwgMSBdICwgWyAnYicgLCAyIF0gLCBbICdjJyAsIDMgXSBdXG4gKiBsaXN0KCBfemlwKCBbICdhYmNkJyAsIHJhbmdlKDMpIF0gKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlW119IGl0ZXJhYmxlcyAtIFRoZSBpdGVyYWJsZXMgdG8gemlwLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBfemlwICggaXRlcmFibGVzICkge1xuXG5cdGxldCBpdGVyYXRvcnMgPSBsaXN0KCBtYXAoIGl0ZXIgLCBpdGVyYWJsZXMgKSApIDtcblxuXHRpZiAoIGl0ZXJhdG9ycy5sZW5ndGggPT09IDAgKSByZXR1cm4gO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGxldCBidWZmZXIgPSBbIF0gO1xuXG5cdFx0Zm9yICggbGV0IHJlc3VsdCBvZiBtYXAoIF9uZXh0ICwgaXRlcmF0b3JzICkgKSB7XG5cblx0XHRcdGlmICggcmVzdWx0LmRvbmUgKSByZXR1cm4gO1xuXG5cdFx0XHRidWZmZXIucHVzaCggcmVzdWx0LnZhbHVlICkgO1xuXG5cdFx0fVxuXG5cdFx0eWllbGQgYnVmZmVyIDtcblxuXHR9XG5cbn1cbiJdfQ==