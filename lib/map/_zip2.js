'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._zip2 = _zip2;

var _ = require('..');

/**
 * Zips exactly two iterables together. Yields a tuple containing the first
 * element of each iterable, then a tupe containing the second element of each
 * iterable, etc.  Stops when one of the two iterables runs out of elements.
 *
 * @example
 * // returns [ [ 'a' , 1 ] , [ 'b' , 2 ] , [ 'c' , 3 ] ]
 * list( _zip2( 'abcd' , range(3) ) ) ;
 *
 * @param {Iterable} A - The first iterable.
 * @param {Iterable} B - The second iterable.
 * @returns {Iterator}
 *
 */
function* _zip2(A, B) {

  A = (0, _.iter)(A);
  B = (0, _.iter)(B);

  while (true) {

    const a = A.next();
    if (a.done) return;

    const b = B.next();
    if (b.done) return;

    yield [a.value, b.value];
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcDIuanMiXSwibmFtZXMiOlsiX3ppcDIiLCJBIiwiQiIsImEiLCJuZXh0IiwiZG9uZSIsImIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmlCQSxLLEdBQUFBLEs7O0FBaEJqQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFjTyxVQUFVQSxLQUFWLENBQWtCQyxDQUFsQixFQUFzQkMsQ0FBdEIsRUFBMEI7O0FBRWhDRCxNQUFJLFlBQU1BLENBQU4sQ0FBSjtBQUNBQyxNQUFJLFlBQU1BLENBQU4sQ0FBSjs7QUFFQSxTQUFRLElBQVIsRUFBZTs7QUFFZCxVQUFNQyxJQUFJRixFQUFFRyxJQUFGLEVBQVY7QUFDQSxRQUFLRCxFQUFFRSxJQUFQLEVBQWM7O0FBRWQsVUFBTUMsSUFBSUosRUFBRUUsSUFBRixFQUFWO0FBQ0EsUUFBS0UsRUFBRUQsSUFBUCxFQUFjOztBQUVkLFVBQU0sQ0FBRUYsRUFBRUksS0FBSixFQUFZRCxFQUFFQyxLQUFkLENBQU47QUFFQTtBQUVEIiwiZmlsZSI6Il96aXAyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWmlwcyBleGFjdGx5IHR3byBpdGVyYWJsZXMgdG9nZXRoZXIuIFlpZWxkcyBhIHR1cGxlIGNvbnRhaW5pbmcgdGhlIGZpcnN0XG4gKiBlbGVtZW50IG9mIGVhY2ggaXRlcmFibGUsIHRoZW4gYSB0dXBlIGNvbnRhaW5pbmcgdGhlIHNlY29uZCBlbGVtZW50IG9mIGVhY2hcbiAqIGl0ZXJhYmxlLCBldGMuICBTdG9wcyB3aGVuIG9uZSBvZiB0aGUgdHdvIGl0ZXJhYmxlcyBydW5zIG91dCBvZiBlbGVtZW50cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIFsgJ2EnICwgMSBdICwgWyAnYicgLCAyIF0gLCBbICdjJyAsIDMgXSBdXG4gKiBsaXN0KCBfemlwMiggJ2FiY2QnICwgcmFuZ2UoMykgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBBIC0gVGhlIGZpcnN0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gQiAtIFRoZSBzZWNvbmQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIF96aXAyICggQSAsIEIgKSB7XG5cblx0QSA9IGl0ZXIoIEEgKSA7XG5cdEIgPSBpdGVyKCBCICkgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IGEgPSBBLm5leHQoKSA7XG5cdFx0aWYgKCBhLmRvbmUgKSByZXR1cm4gO1xuXG5cdFx0Y29uc3QgYiA9IEIubmV4dCgpIDtcblx0XHRpZiAoIGIuZG9uZSApIHJldHVybiA7XG5cblx0XHR5aWVsZCBbIGEudmFsdWUgLCBiLnZhbHVlIF0gO1xuXG5cdH1cblxufVxuIl19