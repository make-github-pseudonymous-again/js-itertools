"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._range = _range;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_range);

/**
 * Yields values in a range, separated by a fixed constant called step. If
 * this step is negative, the range has to be given in reverse order, that is,
 * largest value first, smallest value second.
 *
 * @param {Number} start - The starting value.
 * @param {Number} stop - The stopping value.
 * @param {Number} step - The step value.
 * @returns {Iterator}
 */
function _range(start, stop, step) {
  return regeneratorRuntime.wrap(function _range$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(step < 0)) {
            _context.next = 9;
            break;
          }

        case 1:
          if (!(start > stop)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return start;

        case 4:
          start += step;
          _context.next = 1;
          break;

        case 7:
          _context.next = 15;
          break;

        case 9:
          if (!(start < stop)) {
            _context.next = 15;
            break;
          }

          _context.next = 12;
          return start;

        case 12:
          start += step;
          _context.next = 9;
          break;

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL19yYW5nZS5qcyJdLCJuYW1lcyI6WyJfcmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVpQkEsTSxHQUFBQSxNOzttREFBQUEsTTs7QUFWakI7Ozs7Ozs7Ozs7QUFVTyxTQUFVQSxNQUFWLENBQW1CQyxLQUFuQixFQUEyQkMsSUFBM0IsRUFBa0NDLElBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFREEsT0FBTyxDQUZOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ0JBR0dGLFFBQVFDLElBSFg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFHd0NELEtBSHhDOztBQUFBO0FBR2tCQSxtQkFBU0UsSUFIM0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdCQU9HRixRQUFRQyxJQVBYO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBT3dDRCxLQVB4Qzs7QUFBQTtBQU9rQkEsbUJBQVNFLElBUDNCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfcmFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFlpZWxkcyB2YWx1ZXMgaW4gYSByYW5nZSwgc2VwYXJhdGVkIGJ5IGEgZml4ZWQgY29uc3RhbnQgY2FsbGVkIHN0ZXAuIElmXG4gKiB0aGlzIHN0ZXAgaXMgbmVnYXRpdmUsIHRoZSByYW5nZSBoYXMgdG8gYmUgZ2l2ZW4gaW4gcmV2ZXJzZSBvcmRlciwgdGhhdCBpcyxcbiAqIGxhcmdlc3QgdmFsdWUgZmlyc3QsIHNtYWxsZXN0IHZhbHVlIHNlY29uZC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgLSBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gKiBAcGFyYW0ge051bWJlcn0gc3RvcCAtIFRoZSBzdG9wcGluZyB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIC0gVGhlIHN0ZXAgdmFsdWUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX3JhbmdlICggc3RhcnQgLCBzdG9wICwgc3RlcCApIHtcblxuXHRpZiAoIHN0ZXAgPCAwICkge1xuXHRcdGZvciAoIDsgc3RhcnQgPiBzdG9wIDsgc3RhcnQgKz0gc3RlcCApIHlpZWxkIHN0YXJ0IDtcblx0fVxuXG5cdGVsc2Uge1xuXHRcdGZvciAoIDsgc3RhcnQgPCBzdG9wIDsgc3RhcnQgKz0gc3RlcCApIHlpZWxkIHN0YXJ0IDtcblx0fVxuXG59XG4iXX0=