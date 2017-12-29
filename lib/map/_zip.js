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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcC5qcyJdLCJuYW1lcyI6WyJfemlwIiwiaXRlcmFibGVzIiwiaXRlcmF0b3JzIiwibGVuZ3RoIiwiYnVmZmVyIiwicmVzdWx0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlaUJBLEksR0FBQUEsSTs7QUFmakI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhTyxVQUFVQSxJQUFWLENBQWlCQyxTQUFqQixFQUE2Qjs7QUFFbkMsTUFBSUMsWUFBWSxZQUFNLG1CQUFZRCxTQUFaLENBQU4sQ0FBaEI7O0FBRUEsTUFBS0MsVUFBVUMsTUFBVixLQUFxQixDQUExQixFQUE4Qjs7QUFFOUIsU0FBUSxJQUFSLEVBQWU7O0FBRWQsUUFBSUMsU0FBUyxFQUFiOztBQUVBLFNBQU0sSUFBSUMsTUFBVixJQUFvQixvQkFBYUgsU0FBYixDQUFwQixFQUErQzs7QUFFOUMsVUFBS0csT0FBT0MsSUFBWixFQUFtQjs7QUFFbkJGLGFBQU9HLElBQVAsQ0FBYUYsT0FBT0csS0FBcEI7QUFFQTs7QUFFRCxVQUFNSixNQUFOO0FBRUE7QUFFRCIsImZpbGUiOiJfemlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIG1hcCAsIGl0ZXIgLCBfbmV4dCB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWmlwcyBpdGVyYWJsZXMgdG9nZXRoZXIuIFlpZWxkcyBhIHR1cGxlIGNvbnRhaW5pbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgZWFjaFxuICogaXRlcmFibGUsIHRoZW4gYSB0dXBlIGNvbnRhaW5pbmcgdGhlIHNlY29uZCBlbGVtZW50IG9mIGVhY2ggaXRlcmFibGUsIGV0Yy5cbiAqIFN0b3BzIHdoZW4gb25lIG9mIHRoZSBpdGVyYWJsZXMgcnVucyBvdXQgb2YgZWxlbWVudHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyBbICdhJyAsIDEgXSAsIFsgJ2InICwgMiBdICwgWyAnYycgLCAzIF0gXVxuICogbGlzdCggX3ppcCggWyAnYWJjZCcgLCByYW5nZSgzKSBdICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZVtdfSBpdGVyYWJsZXMgLSBUaGUgaXRlcmFibGVzIHRvIHppcC5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX3ppcCAoIGl0ZXJhYmxlcyApIHtcblxuXHRsZXQgaXRlcmF0b3JzID0gbGlzdCggbWFwKCBpdGVyICwgaXRlcmFibGVzICkgKSA7XG5cblx0aWYgKCBpdGVyYXRvcnMubGVuZ3RoID09PSAwICkgcmV0dXJuIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgYnVmZmVyID0gWyBdIDtcblxuXHRcdGZvciAoIGxldCByZXN1bHQgb2YgbWFwKCBfbmV4dCAsIGl0ZXJhdG9ycyApICkge1xuXG5cdFx0XHRpZiAoIHJlc3VsdC5kb25lICkgcmV0dXJuIDtcblxuXHRcdFx0YnVmZmVyLnB1c2goIHJlc3VsdC52YWx1ZSApIDtcblxuXHRcdH1cblxuXHRcdHlpZWxkIGJ1ZmZlciA7XG5cblx0fVxuXG59XG4iXX0=