'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._zip = _zip;

var _ = require('..');

var _marked = [_zip].map(regeneratorRuntime.mark);

/**
 * Zips iterables together. Yields a tuple containing the first element of each
 * iterable, then a tupe containing the second element of each iterable, etc.
 * Stops when one of the iterables runs out of elements.
 *
 * @example
 * // returns [ [ 'a' , 1 ] , [ 'b' , 2 ] , [ 'c' , 3 ] ]
 * list( _zip( [ 'abcd' , range(3) ] ) ) ;
 *
 * @param {Iterable[]} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
function _zip(iterables) {
  var iterators, buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, result;

  return regeneratorRuntime.wrap(function _zip$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          iterators = (0, _.list)((0, _.map)(_.iter, iterables));

          if (!(iterators.length === 0)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt('return');

        case 3:
          if (!true) {
            _context.next = 36;
            break;
          }

          buffer = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 8;
          _iterator = (0, _.map)(_._next, iterators)[Symbol.iterator]();

        case 10:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 18;
            break;
          }

          result = _step.value;

          if (!result.done) {
            _context.next = 14;
            break;
          }

          return _context.abrupt('return');

        case 14:

          buffer.push(result.value);

        case 15:
          _iteratorNormalCompletion = true;
          _context.next = 10;
          break;

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context['catch'](8);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 24:
          _context.prev = 24;
          _context.prev = 25;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 27:
          _context.prev = 27;

          if (!_didIteratorError) {
            _context.next = 30;
            break;
          }

          throw _iteratorError;

        case 30:
          return _context.finish(27);

        case 31:
          return _context.finish(24);

        case 32:
          _context.next = 34;
          return buffer;

        case 34:
          _context.next = 3;
          break;

        case 36:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[8, 20, 24, 32], [25,, 27, 31]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcC5qcyJdLCJuYW1lcyI6WyJfemlwIiwiaXRlcmFibGVzIiwiaXRlcmF0b3JzIiwibGVuZ3RoIiwiYnVmZmVyIiwicmVzdWx0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlaUJBLEksR0FBQUEsSTs7QUFmakI7O2VBZWlCQSxJOztBQWJqQjs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVVBLElBQVYsQ0FBaUJDLFNBQWpCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRkMsbUJBRkUsR0FFVSxZQUFNLG1CQUFZRCxTQUFaLENBQU4sQ0FGVjs7QUFBQSxnQkFJREMsVUFBVUMsTUFBVixLQUFxQixDQUpwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLGVBTUUsSUFORjtBQUFBO0FBQUE7QUFBQTs7QUFRREMsZ0JBUkMsR0FRUSxFQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFVZSxvQkFBYUYsU0FBYixDQVZmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUtHLGdCQVZMOztBQUFBLGVBWUNBLE9BQU9DLElBWlI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBY0pGLGlCQUFPRyxJQUFQLENBQWFGLE9BQU9HLEtBQXBCOztBQWRJO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlCQWtCQ0osTUFsQkQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il96aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwICwgaXRlciAsIF9uZXh0IH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBaaXBzIGl0ZXJhYmxlcyB0b2dldGhlci4gWWllbGRzIGEgdHVwbGUgY29udGFpbmluZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBlYWNoXG4gKiBpdGVyYWJsZSwgdGhlbiBhIHR1cGUgY29udGFpbmluZyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgZWFjaCBpdGVyYWJsZSwgZXRjLlxuICogU3RvcHMgd2hlbiBvbmUgb2YgdGhlIGl0ZXJhYmxlcyBydW5zIG91dCBvZiBlbGVtZW50cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIFsgJ2EnICwgMSBdICwgWyAnYicgLCAyIF0gLCBbICdjJyAsIDMgXSBdXG4gKiBsaXN0KCBfemlwKCBbICdhYmNkJyAsIHJhbmdlKDMpIF0gKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlW119IGl0ZXJhYmxlcyAtIFRoZSBpdGVyYWJsZXMgdG8gemlwLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBfemlwICggaXRlcmFibGVzICkge1xuXG5cdGxldCBpdGVyYXRvcnMgPSBsaXN0KCBtYXAoIGl0ZXIgLCBpdGVyYWJsZXMgKSApIDtcblxuXHRpZiAoIGl0ZXJhdG9ycy5sZW5ndGggPT09IDAgKSByZXR1cm4gO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGxldCBidWZmZXIgPSBbIF0gO1xuXG5cdFx0Zm9yICggbGV0IHJlc3VsdCBvZiBtYXAoIF9uZXh0ICwgaXRlcmF0b3JzICkgKSB7XG5cblx0XHRcdGlmICggcmVzdWx0LmRvbmUgKSByZXR1cm4gO1xuXG5cdFx0XHRidWZmZXIucHVzaCggcmVzdWx0LnZhbHVlICkgO1xuXG5cdFx0fVxuXG5cdFx0eWllbGQgYnVmZmVyIDtcblxuXHR9XG5cbn1cbiJdfQ==