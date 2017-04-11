"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chain = chain;

var _marked = [chain].map(regeneratorRuntime.mark);

/**
 * Chains input iterables one after the other. Returns an iterator that yields
 * all values of the first input iterable, then all values of the second, etc.
 *
 * @example
 * // returns [ 0 , 1 , 0 , 1 , 2 ]
 * list( chain( [ range( 2 ) , range( 3 ) ] ) ) ;
 *
 * @param {Iterable[]} iterables - The input iterables to chain.
 * @returns {Iterator}
 *
 */
function chain(iterables) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, iterable;

  return regeneratorRuntime.wrap(function chain$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = iterables[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 11;
            break;
          }

          iterable = _step.value;
          return _context.delegateYield(iterable, "t0", 8);

        case 8:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t1 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 17:
          _context.prev = 17;
          _context.prev = 18;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 20:
          _context.prev = 20;

          if (!_didIteratorError) {
            _context.next = 23;
            break;
          }

          throw _iteratorError;

        case 23:
          return _context.finish(20);

        case 24:
          return _context.finish(17);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[3, 13, 17, 25], [18,, 20, 24]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY2hhaW4uanMiXSwibmFtZXMiOlsiY2hhaW4iLCJpdGVyYWJsZXMiLCJpdGVyYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZaUJBLEssR0FBQUEsSzs7ZUFBQUEsSzs7QUFaakI7Ozs7Ozs7Ozs7OztBQVlPLFNBQVVBLEtBQVYsQ0FBa0JDLFNBQWxCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVnQkEsU0FGaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFSUMsa0JBRko7QUFBQSx3Q0FFbUNBLFFBRm5DOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoYWlucyBpbnB1dCBpdGVyYWJsZXMgb25lIGFmdGVyIHRoZSBvdGhlci4gUmV0dXJucyBhbiBpdGVyYXRvciB0aGF0IHlpZWxkc1xuICogYWxsIHZhbHVlcyBvZiB0aGUgZmlyc3QgaW5wdXQgaXRlcmFibGUsIHRoZW4gYWxsIHZhbHVlcyBvZiB0aGUgc2Vjb25kLCBldGMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyAwICwgMSAsIDAgLCAxICwgMiBdXG4gKiBsaXN0KCBjaGFpbiggWyByYW5nZSggMiApICwgcmFuZ2UoIDMgKSBdICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZVtdfSBpdGVyYWJsZXMgLSBUaGUgaW5wdXQgaXRlcmFibGVzIHRvIGNoYWluLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBjaGFpbiAoIGl0ZXJhYmxlcyApIHtcblxuXHRmb3IgKCBsZXQgaXRlcmFibGUgb2YgaXRlcmFibGVzICkgeWllbGQqIGl0ZXJhYmxlIDtcblxufVxuIl19