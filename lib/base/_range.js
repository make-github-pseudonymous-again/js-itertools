"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._range = _range;

var _marked = [_range].map(regeneratorRuntime.mark);

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
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL19yYW5nZS5qcyJdLCJuYW1lcyI6WyJfcmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVpQkEsTSxHQUFBQSxNOztlQUFBQSxNOztBQVZqQjs7Ozs7Ozs7OztBQVVPLFNBQVVBLE1BQVYsQ0FBbUJDLEtBQW5CLEVBQTJCQyxJQUEzQixFQUFrQ0MsSUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUVEQSxPQUFPLENBRk47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnQkFHR0YsUUFBUUMsSUFIWDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUd3Q0QsS0FIeEM7O0FBQUE7QUFHa0JBLG1CQUFTRSxJQUgzQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ0JBT0dGLFFBQVFDLElBUFg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFPd0NELEtBUHhDOztBQUFBO0FBT2tCQSxtQkFBU0UsSUFQM0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il9yYW5nZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogWWllbGRzIHZhbHVlcyBpbiBhIHJhbmdlLCBzZXBhcmF0ZWQgYnkgYSBmaXhlZCBjb25zdGFudCBjYWxsZWQgc3RlcC4gSWZcbiAqIHRoaXMgc3RlcCBpcyBuZWdhdGl2ZSwgdGhlIHJhbmdlIGhhcyB0byBiZSBnaXZlbiBpbiByZXZlcnNlIG9yZGVyLCB0aGF0IGlzLFxuICogbGFyZ2VzdCB2YWx1ZSBmaXJzdCwgc21hbGxlc3QgdmFsdWUgc2Vjb25kLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydGluZyB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzdG9wIC0gVGhlIHN0b3BwaW5nIHZhbHVlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgc3RlcCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBfcmFuZ2UgKCBzdGFydCAsIHN0b3AgLCBzdGVwICkge1xuXG5cdGlmICggc3RlcCA8IDAgKSB7XG5cdFx0Zm9yICggOyBzdGFydCA+IHN0b3AgOyBzdGFydCArPSBzdGVwICkgeWllbGQgc3RhcnQgO1xuXHR9XG5cblx0ZWxzZSB7XG5cdFx0Zm9yICggOyBzdGFydCA8IHN0b3AgOyBzdGFydCArPSBzdGVwICkgeWllbGQgc3RhcnQgO1xuXHR9XG5cbn1cbiJdfQ==