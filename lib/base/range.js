'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;

var _range2 = require('./_range');

/**
 * Yields values in a range, separated by a fixed constant called step. If this
 * step is negative, the range has to be given in reverse order, that is,
 * largest value first, smallest value second. Both the starting value and the
 * step value are optional. By default the starting value is <code>0</code>.
 * The default for the step value is <code>1</code>.
 *
 * @param {Number} [start=0] - The starting value.
 * @param {Number} stop - The stopping value.
 * @param {Number} [step=1] - The step value.
 * @returns {Iterator}
 */
function range(start, stop, step) {

  if (stop === undefined) return (0, _range2._range)(0, start, 1);

  if (step === undefined) return (0, _range2._range)(start, stop, 1);

  return (0, _range2._range)(start, stop, step);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3JhbmdlLmpzIl0sIm5hbWVzIjpbInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFjZ0JBLEssR0FBQUEsSzs7QUFkaEI7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLEtBQVQsQ0FBaUJDLEtBQWpCLEVBQXlCQyxJQUF6QixFQUFnQ0MsSUFBaEMsRUFBdUM7O0FBRTdDLE1BQUtELFNBQVNFLFNBQWQsRUFBMEIsT0FBTyxvQkFBUSxDQUFSLEVBQVlILEtBQVosRUFBb0IsQ0FBcEIsQ0FBUDs7QUFFMUIsTUFBS0UsU0FBU0MsU0FBZCxFQUEwQixPQUFPLG9CQUFRSCxLQUFSLEVBQWdCQyxJQUFoQixFQUF1QixDQUF2QixDQUFQOztBQUUxQixTQUFPLG9CQUFRRCxLQUFSLEVBQWdCQyxJQUFoQixFQUF1QkMsSUFBdkIsQ0FBUDtBQUVBIiwiZmlsZSI6InJhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3JhbmdlIH0gZnJvbSAnLi9fcmFuZ2UnIDtcblxuLyoqXG4gKiBZaWVsZHMgdmFsdWVzIGluIGEgcmFuZ2UsIHNlcGFyYXRlZCBieSBhIGZpeGVkIGNvbnN0YW50IGNhbGxlZCBzdGVwLiBJZiB0aGlzXG4gKiBzdGVwIGlzIG5lZ2F0aXZlLCB0aGUgcmFuZ2UgaGFzIHRvIGJlIGdpdmVuIGluIHJldmVyc2Ugb3JkZXIsIHRoYXQgaXMsXG4gKiBsYXJnZXN0IHZhbHVlIGZpcnN0LCBzbWFsbGVzdCB2YWx1ZSBzZWNvbmQuIEJvdGggdGhlIHN0YXJ0aW5nIHZhbHVlIGFuZCB0aGVcbiAqIHN0ZXAgdmFsdWUgYXJlIG9wdGlvbmFsLiBCeSBkZWZhdWx0IHRoZSBzdGFydGluZyB2YWx1ZSBpcyA8Y29kZT4wPC9jb2RlPi5cbiAqIFRoZSBkZWZhdWx0IGZvciB0aGUgc3RlcCB2YWx1ZSBpcyA8Y29kZT4xPC9jb2RlPi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0PTBdIC0gVGhlIHN0YXJ0aW5nIHZhbHVlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0b3AgLSBUaGUgc3RvcHBpbmcgdmFsdWUuXG4gKiBAcGFyYW0ge051bWJlcn0gW3N0ZXA9MV0gLSBUaGUgc3RlcCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlICggc3RhcnQgLCBzdG9wICwgc3RlcCApIHtcblxuXHRpZiAoIHN0b3AgPT09IHVuZGVmaW5lZCApIHJldHVybiBfcmFuZ2UoIDAgLCBzdGFydCAsIDEgKSA7XG5cblx0aWYgKCBzdGVwID09PSB1bmRlZmluZWQgKSByZXR1cm4gX3JhbmdlKCBzdGFydCAsIHN0b3AgLCAxICkgO1xuXG5cdHJldHVybiBfcmFuZ2UoIHN0YXJ0ICwgc3RvcCAsIHN0ZXAgKSA7XG5cbn1cbiJdfQ==