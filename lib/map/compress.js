'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.compress = compress;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(compress);

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
function compress(iterable, selector) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, take, item;

  return regeneratorRuntime.wrap(function compress$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = (0, _._zip2)(selector, iterable)[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 13;
            break;
          }

          _step$value = _slicedToArray(_step.value, 2), take = _step$value[0], item = _step$value[1];

          if (!take) {
            _context.next = 10;
            break;
          }

          _context.next = 10;
          return item;

        case 10:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context['catch'](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 19:
          _context.prev = 19;
          _context.prev = 20;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 22:
          _context.prev = 22;

          if (!_didIteratorError) {
            _context.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context.finish(22);

        case 26:
          return _context.finish(19);

        case 27:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 15, 19, 27], [20,, 22, 26]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY29tcHJlc3MuanMiXSwibmFtZXMiOlsiY29tcHJlc3MiLCJpdGVyYWJsZSIsInNlbGVjdG9yIiwidGFrZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBWWlCQSxRLEdBQUFBLFE7O0FBWmpCOzttREFZaUJBLFE7O0FBVmpCOzs7Ozs7Ozs7O0FBVU8sU0FBVUEsUUFBVixDQUFxQkMsUUFBckIsRUFBZ0NDLFFBQWhDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUV1QixhQUFPQSxRQUFQLEVBQWtCRCxRQUFsQixDQUZ2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHdEQUVNRSxJQUZOLG1CQUVhQyxJQUZiOztBQUFBLGVBSUFELElBSkE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFJYUMsSUFKYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNvbXByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3ppcDIgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIEZpbHRlcnMgdGhlIGZpcnN0IGlucHV0IGl0ZXJhYmxlIGFjY29yZGluZyB0byB0cnV0aHkgYW5kIGZsYXN5IHZhbHVlcyBmcm9tIGFcbiAqIHNlY29uZCBpbnB1dCBpdGVyYWJsZS4gVGhlIGl0aCBlbGVtZW50IG9mIHRoZSBmaXJzdCBpbnB1dCBpdGVyYWJsZSBpcyBvdXRwdXRcbiAqIGlmIGFuZCBvbmx5IGlmIHRoZSBpdGggZWxlbWVudCBvZiB0aGUgc2Vjb25kIGlucHV0IGl0ZXJhYmxlIGlzIHRydXRoeS5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBmaXJzdCBpbnB1dCBpdGVyYWJsZSB0byBmaWx0ZXIuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBzZWxlY3RvciAtIFRoZSBzZWNvbmQgaW5wdXQgaXRlcmFibGUgY29udGFpbmluZyB0aGUgdHJ1dGh5IGFuZCBmYWxzeVxuICogdmFsdWVzLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIGNvbXByZXNzICggaXRlcmFibGUgLCBzZWxlY3RvciApIHtcblxuXHRmb3IgKCBsZXQgWyB0YWtlICwgaXRlbSBdIG9mIF96aXAyKCBzZWxlY3RvciAsIGl0ZXJhYmxlICkgKSB7XG5cblx0XHRpZiAoIHRha2UgKSB5aWVsZCBpdGVtIDtcblxuXHR9XG5cbn1cbiJdfQ==