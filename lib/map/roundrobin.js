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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcm91bmRyb2Jpbi5qcyJdLCJuYW1lcyI6WyJyb3VuZHJvYmluIiwiaXRlcmFibGVzIiwicGVuZGluZyIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yIiwibmV4dCIsInZhbHVlIiwiaXQiLCJkb25lIl0sIm1hcHBpbmdzIjoiOzs7OztRQWlCaUJBLFUsR0FBQUEsVTs7QUFqQmpCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFlTyxVQUFVQSxVQUFWLENBQXVCQyxTQUF2QixFQUFtQzs7QUFFekMsTUFBSUMsVUFBVSxXQUFLRCxTQUFMLENBQWQ7O0FBRUEsTUFBSUUsWUFBWSxhQUFPLG1CQUFZRixTQUFaLENBQVAsQ0FBaEI7O0FBRUEsU0FBUUMsT0FBUixFQUFrQjs7QUFFakIsV0FBUSxJQUFSLEVBQWU7O0FBRWQsVUFBSUUsV0FBV0QsVUFBVUUsSUFBVixHQUFpQkMsS0FBaEM7O0FBRUEsVUFBSUMsS0FBS0gsU0FBU0MsSUFBVCxFQUFUOztBQUVBLFVBQUtFLEdBQUdDLElBQVIsRUFBZTs7QUFFZixZQUFNRCxHQUFHRCxLQUFUO0FBRUE7O0FBRUQsTUFBRUosT0FBRjs7QUFFQUMsZ0JBQVksYUFBTyxhQUFPQSxTQUFQLEVBQW1CLENBQW5CLEVBQXVCRCxPQUF2QixFQUFpQyxDQUFqQyxDQUFQLENBQVo7QUFFQTtBQUVEIiwiZmlsZSI6InJvdW5kcm9iaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyICwgbGVuICwgY3ljbGUgLCBtYXAgLCBzbGljZSB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWWllbGRzIHRoZSBmaXJzdCBpdGVtIG9mIHRoZSBmaXJzdCBpbnB1dCBpdGVyYWJsZSwgdGhlbiB0aGUgZmlyc3QgaXRlbSBvZlxuICogdGhlIHNlY29uZCBpbnB1dCBpdGVyYWJsZSwgZXRjLiwgdW50aWwgdGhlIGxhc3QgaW5wdXQgaXRlcmFibGUuIFRoZW4gc3RhcnRcbiAqIGFnYWluIHdpdGggdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBmaXJzdCBpbnB1dCBpdGVyYWJsZSwgZXRjLiBJZiBvbmUgb2YgdGhlXG4gKiBpbnB1dCBpdGVyYWJsZSBpcyBleGhhdXN0ZWQsIGl0IGlzIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCBvZiBpbnB1dCBpdGVyYWJsZXNcbiAqIGFuZCB0aGUgYWxnb3JpdGhtIGNvbnRpbnVlcyB1bnRpbCBhbGwgaW5wdXQgaXRlcmFibGVzIGhhdmUgYmVlbiBleGhhdXN0ZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWydBJywnRCcsJ0UnLCdCJywnRicsJ0NdXG4gKiBsaXN0KCByb3VuZHJvYmluKFsnQUJDJywgJ0QnLCAnRUYnXSkgKVxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGVbXX0gaXRlcmFibGVzIC0gVGhlIGlucHV0IGl0ZXJhYmxlcy5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogcm91bmRyb2JpbiAoIGl0ZXJhYmxlcyApIHtcblxuXHRsZXQgcGVuZGluZyA9IGxlbiggaXRlcmFibGVzICkgO1xuXG5cdGxldCBpdGVyYXRvcnMgPSBjeWNsZSggbWFwKCBpdGVyICwgaXRlcmFibGVzICkgKSA7XG5cblx0d2hpbGUgKCBwZW5kaW5nICkge1xuXG5cdFx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0XHRsZXQgaXRlcmF0b3IgPSBpdGVyYXRvcnMubmV4dCgpLnZhbHVlIDtcblxuXHRcdFx0bGV0IGl0ID0gaXRlcmF0b3IubmV4dCgpIDtcblxuXHRcdFx0aWYgKCBpdC5kb25lICkgYnJlYWsgO1xuXG5cdFx0XHR5aWVsZCBpdC52YWx1ZSA7XG5cblx0XHR9XG5cblx0XHQtLXBlbmRpbmcgO1xuXG5cdFx0aXRlcmF0b3JzID0gY3ljbGUoIHNsaWNlKCBpdGVyYXRvcnMgLCAwICwgcGVuZGluZyAsIDEgKSApIDtcblxuXHR9XG5cbn1cbiJdfQ==