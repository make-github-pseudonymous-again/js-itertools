"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterfalse = filterfalse;
/**
 * Yields all elements from input iterable that do not verify a given predicate.
 *
 * @example
 * // returns [ 0 , 2 , 4 , 6 , 8 ]
 * list( filter( x => x % 2 , range( 10 ) ) ) ;
 *
 * @param {Function} predicate - A unary function that returns a truthy or
 * falsy value.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
function* filterfalse(predicate, iterable) {

  for (let item of iterable) {

    if (!predicate(item)) yield item;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZmlsdGVyZmFsc2UuanMiXSwibmFtZXMiOlsiZmlsdGVyZmFsc2UiLCJwcmVkaWNhdGUiLCJpdGVyYWJsZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWlCQSxXLEdBQUFBLFc7QUFiakI7Ozs7Ozs7Ozs7Ozs7QUFhTyxVQUFVQSxXQUFWLENBQXdCQyxTQUF4QixFQUFvQ0MsUUFBcEMsRUFBK0M7O0FBRXJELE9BQU0sSUFBSUMsSUFBVixJQUFrQkQsUUFBbEIsRUFBNkI7O0FBRTVCLFFBQUssQ0FBRUQsVUFBV0UsSUFBWCxDQUFQLEVBQTJCLE1BQU1BLElBQU47QUFFM0I7QUFFRCIsImZpbGUiOiJmaWx0ZXJmYWxzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogWWllbGRzIGFsbCBlbGVtZW50cyBmcm9tIGlucHV0IGl0ZXJhYmxlIHRoYXQgZG8gbm90IHZlcmlmeSBhIGdpdmVuIHByZWRpY2F0ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIDAgLCAyICwgNCAsIDYgLCA4IF1cbiAqIGxpc3QoIGZpbHRlciggeCA9PiB4ICUgMiAsIHJhbmdlKCAxMCApICkgKSA7XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIC0gQSB1bmFyeSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB0cnV0aHkgb3JcbiAqIGZhbHN5IHZhbHVlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIGZpbHRlcmZhbHNlICggcHJlZGljYXRlICwgaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmFibGUgKSB7XG5cblx0XHRpZiAoICEgcHJlZGljYXRlKCBpdGVtICkgKSB5aWVsZCBpdGVtIDtcblxuXHR9XG5cbn1cbiJdfQ==