'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.next = next;

var _StopIteration = require('./StopIteration');

/**
 * Returns the next value of the input iterator. If there the iterator is
 * exhausted, throws a {@link StopIteration}.
 *
 * @param {Iterator} iterator - The input iterator.
 * @returns {Object}
 */
function next(iterator) {

  var x = iterator.next();

  if (x.done) throw new _StopIteration.StopIteration();

  return x.value;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL25leHQuanMiXSwibmFtZXMiOlsibmV4dCIsIml0ZXJhdG9yIiwieCIsImRvbmUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLEksR0FBQUEsSTs7QUFUaEI7O0FBRUE7Ozs7Ozs7QUFPTyxTQUFTQSxJQUFULENBQWdCQyxRQUFoQixFQUEyQjs7QUFFakMsTUFBTUMsSUFBSUQsU0FBU0QsSUFBVCxFQUFWOztBQUVBLE1BQUtFLEVBQUVDLElBQVAsRUFBYyxNQUFNLGtDQUFOOztBQUVkLFNBQU9ELEVBQUVFLEtBQVQ7QUFFQSIsImZpbGUiOiJuZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcEl0ZXJhdGlvbiB9IGZyb20gJy4vU3RvcEl0ZXJhdGlvbicgO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgdmFsdWUgb2YgdGhlIGlucHV0IGl0ZXJhdG9yLiBJZiB0aGVyZSB0aGUgaXRlcmF0b3IgaXNcbiAqIGV4aGF1c3RlZCwgdGhyb3dzIGEge0BsaW5rIFN0b3BJdGVyYXRpb259LlxuICpcbiAqIEBwYXJhbSB7SXRlcmF0b3J9IGl0ZXJhdG9yIC0gVGhlIGlucHV0IGl0ZXJhdG9yLlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHQgKCBpdGVyYXRvciApIHtcblxuXHRjb25zdCB4ID0gaXRlcmF0b3IubmV4dCggKSA7XG5cblx0aWYgKCB4LmRvbmUgKSB0aHJvdyBuZXcgU3RvcEl0ZXJhdGlvbigpO1xuXG5cdHJldHVybiB4LnZhbHVlIDtcblxufVxuIl19