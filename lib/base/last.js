'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

var _next = require('./next');

var _tail = require('./tail');

/**
 * Returns the last value of the input iterator. If there the iterator is
 * exhausted, throws a {@link StopIteration}.
 *
 * @param {Iterator} iterator - The input iterator.
 * @returns {Object}
 */
function last(iterator) {

  return (0, _next.next)((0, _tail.tail)(iterator, 1));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2xhc3QuanMiXSwibmFtZXMiOlsibGFzdCIsIml0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVnQkEsSSxHQUFBQSxJOztBQVZoQjs7QUFDQTs7QUFFQTs7Ozs7OztBQU9PLFNBQVNBLElBQVQsQ0FBZ0JDLFFBQWhCLEVBQTJCOztBQUVqQyxTQUFPLGdCQUFNLGdCQUFNQSxRQUFOLEVBQWlCLENBQWpCLENBQU4sQ0FBUDtBQUVBIiwiZmlsZSI6Imxhc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi9uZXh0JyA7XG5pbXBvcnQgeyB0YWlsIH0gZnJvbSAnLi90YWlsJyA7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCB2YWx1ZSBvZiB0aGUgaW5wdXQgaXRlcmF0b3IuIElmIHRoZXJlIHRoZSBpdGVyYXRvciBpc1xuICogZXhoYXVzdGVkLCB0aHJvd3MgYSB7QGxpbmsgU3RvcEl0ZXJhdGlvbn0uXG4gKlxuICogQHBhcmFtIHtJdGVyYXRvcn0gaXRlcmF0b3IgLSBUaGUgaW5wdXQgaXRlcmF0b3IuXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGFzdCAoIGl0ZXJhdG9yICkge1xuXG5cdHJldHVybiBuZXh0KCB0YWlsKCBpdGVyYXRvciAsIDEgKSApIDtcblxufVxuIl19