'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compress = compress;

var _ = require('..');

/**
 * Filters the first input iterable according to truthy and flasy values from a
 * second input iterable. The ith element of the first input iterable is output
 * if and only if the ith element of the second input iterable is truthy.
 *
 * @param {Iterable} iterable - The first input iterable to filter.
 * @param {Iterable} selector - The second input iterable containing the truthy and falsy
 * values.
 * @returns {Iterator}
 */
function* compress(iterable, selector) {

  for (let [take, item] of (0, _._zip2)(selector, iterable)) {

    if (take) yield item;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY29tcHJlc3MuanMiXSwibmFtZXMiOlsiY29tcHJlc3MiLCJpdGVyYWJsZSIsInNlbGVjdG9yIiwidGFrZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBWWlCQSxRLEdBQUFBLFE7O0FBWmpCOztBQUVBOzs7Ozs7Ozs7O0FBVU8sVUFBVUEsUUFBVixDQUFxQkMsUUFBckIsRUFBZ0NDLFFBQWhDLEVBQTJDOztBQUVqRCxPQUFNLElBQUksQ0FBRUMsSUFBRixFQUFTQyxJQUFULENBQVYsSUFBNkIsYUFBT0YsUUFBUCxFQUFrQkQsUUFBbEIsQ0FBN0IsRUFBNEQ7O0FBRTNELFFBQUtFLElBQUwsRUFBWSxNQUFNQyxJQUFOO0FBRVo7QUFFRCIsImZpbGUiOiJjb21wcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF96aXAyIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBGaWx0ZXJzIHRoZSBmaXJzdCBpbnB1dCBpdGVyYWJsZSBhY2NvcmRpbmcgdG8gdHJ1dGh5IGFuZCBmbGFzeSB2YWx1ZXMgZnJvbSBhXG4gKiBzZWNvbmQgaW5wdXQgaXRlcmFibGUuIFRoZSBpdGggZWxlbWVudCBvZiB0aGUgZmlyc3QgaW5wdXQgaXRlcmFibGUgaXMgb3V0cHV0XG4gKiBpZiBhbmQgb25seSBpZiB0aGUgaXRoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBpbnB1dCBpdGVyYWJsZSBpcyB0cnV0aHkuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgZmlyc3QgaW5wdXQgaXRlcmFibGUgdG8gZmlsdGVyLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gc2VsZWN0b3IgLSBUaGUgc2Vjb25kIGlucHV0IGl0ZXJhYmxlIGNvbnRhaW5pbmcgdGhlIHRydXRoeSBhbmQgZmFsc3lcbiAqIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBjb21wcmVzcyAoIGl0ZXJhYmxlICwgc2VsZWN0b3IgKSB7XG5cblx0Zm9yICggbGV0IFsgdGFrZSAsIGl0ZW0gXSBvZiBfemlwMiggc2VsZWN0b3IgLCBpdGVyYWJsZSApICkge1xuXG5cdFx0aWYgKCB0YWtlICkgeWllbGQgaXRlbSA7XG5cblx0fVxuXG59XG4iXX0=