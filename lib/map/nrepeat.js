"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nrepeat = nrepeat;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(nrepeat);

/**
 * Repeats the input item a few times. Returns an iterator that yields the input
 * item a fixed number of times.
 *
 * @example
 * list( nrepeat( 6 , 3 ) ) ; // returns [ 6 , 6 , 6 ]
 *
 * @param {Object} item - The input item.
 * @param {Number} times - The number of times to yield <code>item</code>.
 * @returns {Iterator}
 */
function nrepeat(item, times) {
  return regeneratorRuntime.wrap(function nrepeat$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(times-- > 0)) {
            _context.next = 5;
            break;
          }

          _context.next = 3;
          return item;

        case 3:
          _context.next = 0;
          break;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvbnJlcGVhdC5qcyJdLCJuYW1lcyI6WyJucmVwZWF0IiwiaXRlbSIsInRpbWVzIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsTyxHQUFBQSxPOzttREFBQUEsTzs7QUFYakI7Ozs7Ozs7Ozs7O0FBV08sU0FBVUEsT0FBVixDQUFvQkMsSUFBcEIsRUFBMkJDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFRUEsVUFBVSxDQUZaO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBRXNCRCxJQUZ0Qjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoibnJlcGVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVwZWF0cyB0aGUgaW5wdXQgaXRlbSBhIGZldyB0aW1lcy4gUmV0dXJucyBhbiBpdGVyYXRvciB0aGF0IHlpZWxkcyB0aGUgaW5wdXRcbiAqIGl0ZW0gYSBmaXhlZCBudW1iZXIgb2YgdGltZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGxpc3QoIG5yZXBlYXQoIDYgLCAzICkgKSA7IC8vIHJldHVybnMgWyA2ICwgNiAsIDYgXVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gVGhlIGlucHV0IGl0ZW0uXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZXMgLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHlpZWxkIDxjb2RlPml0ZW08L2NvZGU+LlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIG5yZXBlYXQgKCBpdGVtICwgdGltZXMgKSB7XG5cblx0d2hpbGUgKCB0aW1lcyAtLT4gMCApIHlpZWxkIGl0ZW0gO1xuXG59XG4iXX0=