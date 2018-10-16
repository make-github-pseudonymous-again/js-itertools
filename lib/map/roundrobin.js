'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundrobin = roundrobin;

var _ = require('..');

/**
 * Yields the first item of the first input iterable, then the first item of
 * the second input iterable, etc., until the last input iterable. Then start
 * again with the second item of the first input iterable, etc. If one of the
 * input iterable is exhausted, it is removed from the list of input iterables
 * and the algorithm continues until all input iterables have been exhausted.
 *
 * @example
 * // returns ['A','D','E','B','F','C]
 * list( roundrobin(['ABC', 'D', 'EF']) )
 *
 * @param {Iterable[]} iterables - The input iterables.
 * @returns {Iterator}
 *
 */
function* roundrobin(iterables) {

  let pending = (0, _.len)(iterables);

  let iterators = (0, _.cycle)((0, _.map)(_.iter, iterables));

  while (pending) {

    while (true) {

      let iterator = iterators.next().value;

      let it = iterator.next();

      if (it.done) break;

      yield it.value;
    }

    --pending;

    iterators = (0, _.cycle)((0, _.slice)(iterators, 0, pending, 1));
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcm91bmRyb2Jpbi5qcyJdLCJuYW1lcyI6WyJyb3VuZHJvYmluIiwiaXRlcmFibGVzIiwicGVuZGluZyIsIml0ZXJhdG9ycyIsIml0ZXIiLCJpdGVyYXRvciIsIm5leHQiLCJ2YWx1ZSIsIml0IiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmlCQSxVLEdBQUFBLFU7O0FBakJqQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sVUFBVUEsVUFBVixDQUF1QkMsU0FBdkIsRUFBbUM7O0FBRXpDLE1BQUlDLFVBQVUsV0FBS0QsU0FBTCxDQUFkOztBQUVBLE1BQUlFLFlBQVksYUFBTyxXQUFLQyxNQUFMLEVBQVlILFNBQVosQ0FBUCxDQUFoQjs7QUFFQSxTQUFRQyxPQUFSLEVBQWtCOztBQUVqQixXQUFRLElBQVIsRUFBZTs7QUFFZCxVQUFJRyxXQUFXRixVQUFVRyxJQUFWLEdBQWlCQyxLQUFoQzs7QUFFQSxVQUFJQyxLQUFLSCxTQUFTQyxJQUFULEVBQVQ7O0FBRUEsVUFBS0UsR0FBR0MsSUFBUixFQUFlOztBQUVmLFlBQU1ELEdBQUdELEtBQVQ7QUFFQTs7QUFFRCxNQUFFTCxPQUFGOztBQUVBQyxnQkFBWSxhQUFPLGFBQU9BLFNBQVAsRUFBbUIsQ0FBbkIsRUFBdUJELE9BQXZCLEVBQWlDLENBQWpDLENBQVAsQ0FBWjtBQUVBO0FBRUQiLCJmaWxlIjoicm91bmRyb2Jpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgLCBsZW4gLCBjeWNsZSAsIG1hcCAsIHNsaWNlIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBZaWVsZHMgdGhlIGZpcnN0IGl0ZW0gb2YgdGhlIGZpcnN0IGlucHV0IGl0ZXJhYmxlLCB0aGVuIHRoZSBmaXJzdCBpdGVtIG9mXG4gKiB0aGUgc2Vjb25kIGlucHV0IGl0ZXJhYmxlLCBldGMuLCB1bnRpbCB0aGUgbGFzdCBpbnB1dCBpdGVyYWJsZS4gVGhlbiBzdGFydFxuICogYWdhaW4gd2l0aCB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGZpcnN0IGlucHV0IGl0ZXJhYmxlLCBldGMuIElmIG9uZSBvZiB0aGVcbiAqIGlucHV0IGl0ZXJhYmxlIGlzIGV4aGF1c3RlZCwgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0IG9mIGlucHV0IGl0ZXJhYmxlc1xuICogYW5kIHRoZSBhbGdvcml0aG0gY29udGludWVzIHVudGlsIGFsbCBpbnB1dCBpdGVyYWJsZXMgaGF2ZSBiZWVuIGV4aGF1c3RlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbJ0EnLCdEJywnRScsJ0InLCdGJywnQ11cbiAqIGxpc3QoIHJvdW5kcm9iaW4oWydBQkMnLCAnRCcsICdFRiddKSApXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZVtdfSBpdGVyYWJsZXMgLSBUaGUgaW5wdXQgaXRlcmFibGVzLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiByb3VuZHJvYmluICggaXRlcmFibGVzICkge1xuXG5cdGxldCBwZW5kaW5nID0gbGVuKCBpdGVyYWJsZXMgKSA7XG5cblx0bGV0IGl0ZXJhdG9ycyA9IGN5Y2xlKCBtYXAoIGl0ZXIgLCBpdGVyYWJsZXMgKSApIDtcblxuXHR3aGlsZSAoIHBlbmRpbmcgKSB7XG5cblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdGxldCBpdGVyYXRvciA9IGl0ZXJhdG9ycy5uZXh0KCkudmFsdWUgO1xuXG5cdFx0XHRsZXQgaXQgPSBpdGVyYXRvci5uZXh0KCkgO1xuXG5cdFx0XHRpZiAoIGl0LmRvbmUgKSBicmVhayA7XG5cblx0XHRcdHlpZWxkIGl0LnZhbHVlIDtcblxuXHRcdH1cblxuXHRcdC0tcGVuZGluZyA7XG5cblx0XHRpdGVyYXRvcnMgPSBjeWNsZSggc2xpY2UoIGl0ZXJhdG9ycyAsIDAgLCBwZW5kaW5nICwgMSApICkgO1xuXG5cdH1cblxufVxuIl19