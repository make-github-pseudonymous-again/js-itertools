"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._product = _product;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_product);

/**
 * Algorithm used by {@link product} to compute the product of one or more
 * iterables from pools of symbols.
 *
 * @example
 * // Ax Ay Bx By Cx Cy Dx Dy
 * _product(['xy', 'ABCD'], 0 , 2) ;
 *
 * @example
 * // 000 001 010 011 100 101 110 111
 * _product([[0,1],[0,1],[0,1]], 0 , 3) ;
 *
 * @param {Array[]} pools - The pools of symbols in reverse order.
 * @param {Number} i - Index of the pool to draw the next symbol from
 * @param {Number} n - Number of pools in total.
 * @returns {Iterator}
 */
function _product(pools, i, n) {
  var iterable, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, buffer, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;

  return regeneratorRuntime.wrap(function _product$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(i === n)) {
            _context.next = 4;
            break;
          }

          _context.next = 3;
          return [];

        case 3:
          return _context.abrupt("return");

        case 4:
          iterable = pools[i];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 8;
          _iterator = _product(pools, i + 1, n)[Symbol.iterator]();

        case 10:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 43;
            break;
          }

          buffer = _step.value;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 15;
          _iterator2 = iterable[Symbol.iterator]();

        case 17:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context.next = 26;
            break;
          }

          item = _step2.value;


          buffer.push(item);

          _context.next = 22;
          return buffer;

        case 22:

          buffer.pop(item);

        case 23:
          _iteratorNormalCompletion2 = true;
          _context.next = 17;
          break;

        case 26:
          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](15);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t0;

        case 32:
          _context.prev = 32;
          _context.prev = 33;

          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }

        case 35:
          _context.prev = 35;

          if (!_didIteratorError2) {
            _context.next = 38;
            break;
          }

          throw _iteratorError2;

        case 38:
          return _context.finish(35);

        case 39:
          return _context.finish(32);

        case 40:
          _iteratorNormalCompletion = true;
          _context.next = 10;
          break;

        case 43:
          _context.next = 49;
          break;

        case 45:
          _context.prev = 45;
          _context.t1 = _context["catch"](8);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 49:
          _context.prev = 49;
          _context.prev = 50;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 52:
          _context.prev = 52;

          if (!_didIteratorError) {
            _context.next = 55;
            break;
          }

          throw _iteratorError;

        case 55:
          return _context.finish(52);

        case 56:
          return _context.finish(49);

        case 57:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[8, 45, 49, 57], [15, 28, 32, 40], [33,, 35, 39], [50,, 52, 56]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3Byb2R1Y3QuanMiXSwibmFtZXMiOlsiX3Byb2R1Y3QiLCJwb29scyIsImkiLCJuIiwiaXRlcmFibGUiLCJidWZmZXIiLCJpdGVtIiwicHVzaCIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmlCQSxRLEdBQUFBLFE7O21EQUFBQSxROztBQWpCakI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFNBQVVBLFFBQVYsQ0FBcUJDLEtBQXJCLEVBQTZCQyxDQUE3QixFQUFpQ0MsQ0FBakM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUVERCxNQUFNQyxDQUZMO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBRWlCLEVBRmpCOztBQUFBO0FBQUE7O0FBQUE7QUFJRkMsa0JBSkUsR0FJU0gsTUFBTUMsQ0FBTixDQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFNY0YsU0FBVUMsS0FBVixFQUFrQkMsSUFBSSxDQUF0QixFQUEwQkMsQ0FBMUIsQ0FOZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1JRSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUWFELFFBUmI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRS0UsY0FSTDs7O0FBVUpELGlCQUFPRSxJQUFQLENBQWFELElBQWI7O0FBVkk7QUFBQSxpQkFZRUQsTUFaRjs7QUFBQTs7QUFjSkEsaUJBQU9HLEdBQVAsQ0FBWUYsSUFBWjs7QUFkSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFsZ29yaXRobSB1c2VkIGJ5IHtAbGluayBwcm9kdWN0fSB0byBjb21wdXRlIHRoZSBwcm9kdWN0IG9mIG9uZSBvciBtb3JlXG4gKiBpdGVyYWJsZXMgZnJvbSBwb29scyBvZiBzeW1ib2xzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBeCBBeSBCeCBCeSBDeCBDeSBEeCBEeVxuICogX3Byb2R1Y3QoWyd4eScsICdBQkNEJ10sIDAgLCAyKSA7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIDAwMCAwMDEgMDEwIDAxMSAxMDAgMTAxIDExMCAxMTFcbiAqIF9wcm9kdWN0KFtbMCwxXSxbMCwxXSxbMCwxXV0sIDAgLCAzKSA7XG4gKlxuICogQHBhcmFtIHtBcnJheVtdfSBwb29scyAtIFRoZSBwb29scyBvZiBzeW1ib2xzIGluIHJldmVyc2Ugb3JkZXIuXG4gKiBAcGFyYW0ge051bWJlcn0gaSAtIEluZGV4IG9mIHRoZSBwb29sIHRvIGRyYXcgdGhlIG5leHQgc3ltYm9sIGZyb21cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gTnVtYmVyIG9mIHBvb2xzIGluIHRvdGFsLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIF9wcm9kdWN0ICggcG9vbHMgLCBpICwgbiApIHtcblxuXHRpZiAoIGkgPT09IG4gKSB7IHlpZWxkIFsgXSA7IHJldHVybiA7IH1cblxuXHRsZXQgaXRlcmFibGUgPSBwb29sc1tpXSA7XG5cblx0Zm9yICggbGV0IGJ1ZmZlciBvZiBfcHJvZHVjdCggcG9vbHMgLCBpICsgMSAsIG4gKSApIHtcblxuXHRcdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkge1xuXG5cdFx0XHRidWZmZXIucHVzaCggaXRlbSApIDtcblxuXHRcdFx0eWllbGQgYnVmZmVyIDtcblxuXHRcdFx0YnVmZmVyLnBvcCggaXRlbSApIDtcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==