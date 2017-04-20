'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

var _next = require('./next');

/**
 * Returns the last value of the input iterator. If there the iterator is
 * exhausted, throws a {@link StopIteration}.
 *
 * @param {Iterator} iterator - The input iterator.
 * @returns {Object}
 */
function last(iterator) {

  return (0, _next.next)(tail(iterator, 1));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2xhc3QuanMiXSwibmFtZXMiOlsibGFzdCIsIml0ZXJhdG9yIiwidGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLEksR0FBQUEsSTs7QUFUaEI7O0FBRUE7Ozs7Ozs7QUFPTyxTQUFTQSxJQUFULENBQWdCQyxRQUFoQixFQUEyQjs7QUFFakMsU0FBTyxnQkFBTUMsS0FBTUQsUUFBTixFQUFpQixDQUFqQixDQUFOLENBQVA7QUFFQSIsImZpbGUiOiJsYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmV4dCB9IGZyb20gJy4vbmV4dCcgO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGxhc3QgdmFsdWUgb2YgdGhlIGlucHV0IGl0ZXJhdG9yLiBJZiB0aGVyZSB0aGUgaXRlcmF0b3IgaXNcbiAqIGV4aGF1c3RlZCwgdGhyb3dzIGEge0BsaW5rIFN0b3BJdGVyYXRpb259LlxuICpcbiAqIEBwYXJhbSB7SXRlcmF0b3J9IGl0ZXJhdG9yIC0gVGhlIGlucHV0IGl0ZXJhdG9yLlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhc3QgKCBpdGVyYXRvciApIHtcblxuXHRyZXR1cm4gbmV4dCggdGFpbCggaXRlcmF0b3IgLCAxICkgKSA7XG5cbn1cbiJdfQ==