'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.compress = compress;

var _ = require('..');

var _marked = [compress].map(regeneratorRuntime.mark);

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
  }, _marked[0], this, [[3, 15, 19, 27], [20,, 22, 26]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY29tcHJlc3MuanMiXSwibmFtZXMiOlsiY29tcHJlc3MiLCJpdGVyYWJsZSIsInNlbGVjdG9yIiwidGFrZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBWWlCQSxRLEdBQUFBLFE7O0FBWmpCOztlQVlpQkEsUTs7QUFWakI7Ozs7Ozs7Ozs7QUFVTyxTQUFVQSxRQUFWLENBQXFCQyxRQUFyQixFQUFnQ0MsUUFBaEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRXVCLGFBQU9BLFFBQVAsRUFBa0JELFFBQWxCLENBRnZCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0RBRU1FLElBRk4sbUJBRWFDLElBRmI7O0FBQUEsZUFJQUQsSUFKQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUlhQyxJQUpiOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY29tcHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfemlwMiB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogRmlsdGVycyB0aGUgZmlyc3QgaW5wdXQgaXRlcmFibGUgYWNjb3JkaW5nIHRvIHRydXRoeSBhbmQgZmxhc3kgdmFsdWVzIGZyb20gYVxuICogc2Vjb25kIGlucHV0IGl0ZXJhYmxlLiBUaGUgaXRoIGVsZW1lbnQgb2YgdGhlIGZpcnN0IGlucHV0IGl0ZXJhYmxlIGlzIG91dHB1dFxuICogaWYgYW5kIG9ubHkgaWYgdGhlIGl0aCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgaW5wdXQgaXRlcmFibGUgaXMgdHJ1dGh5LlxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGZpcnN0IGlucHV0IGl0ZXJhYmxlIHRvIGZpbHRlci5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IHNlbGVjdG9yIC0gVGhlIHNlY29uZCBpbnB1dCBpdGVyYWJsZSBjb250YWluaW5nIHRoZSB0cnV0aHkgYW5kIGZhbHN5XG4gKiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogY29tcHJlc3MgKCBpdGVyYWJsZSAsIHNlbGVjdG9yICkge1xuXG5cdGZvciAoIGxldCBbIHRha2UgLCBpdGVtIF0gb2YgX3ppcDIoIHNlbGVjdG9yICwgaXRlcmFibGUgKSApIHtcblxuXHRcdGlmICggdGFrZSApIHlpZWxkIGl0ZW0gO1xuXG5cdH1cblxufVxuIl19