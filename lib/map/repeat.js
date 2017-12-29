"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;
/**
 * Repeats the input item endlessly. Returns an iterator that yields the input
 * item over and over again.
 *
 * @example
 * list( take( repeat( 6 ) , 3 ) ) ; // returns [ 6 , 6 , 6 ]
 *
 * @param {Object} item - The input item.
 * @returns {Iterator}
 */
function* repeat(item) {

  while (true) yield item;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcmVwZWF0LmpzIl0sIm5hbWVzIjpbInJlcGVhdCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWlCQSxNLEdBQUFBLE07QUFWakI7Ozs7Ozs7Ozs7QUFVTyxVQUFVQSxNQUFWLENBQW1CQyxJQUFuQixFQUEwQjs7QUFFaEMsU0FBUSxJQUFSLEVBQWUsTUFBTUEsSUFBTjtBQUVmIiwiZmlsZSI6InJlcGVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVwZWF0cyB0aGUgaW5wdXQgaXRlbSBlbmRsZXNzbHkuIFJldHVybnMgYW4gaXRlcmF0b3IgdGhhdCB5aWVsZHMgdGhlIGlucHV0XG4gKiBpdGVtIG92ZXIgYW5kIG92ZXIgYWdhaW4uXG4gKlxuICogQGV4YW1wbGVcbiAqIGxpc3QoIHRha2UoIHJlcGVhdCggNiApICwgMyApICkgOyAvLyByZXR1cm5zIFsgNiAsIDYgLCA2IF1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIFRoZSBpbnB1dCBpdGVtLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJlcGVhdCAoIGl0ZW0gKSB7XG5cblx0d2hpbGUgKCB0cnVlICkgeWllbGQgaXRlbSA7XG5cbn1cbiJdfQ==