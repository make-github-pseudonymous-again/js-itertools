'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._ziplongest = _ziplongest;

var _ = require('..');

var _marked = [_ziplongest].map(regeneratorRuntime.mark);

/**
 * Same as _zip, but continues to yield zipped tuples until the last iterable is
 * exhausted.
 *
 * @example
 * // returns [['A','x'],['B','y'],['C','-'],['D','-']]
 * list( _ziplongest( '-' , [ 'ABCD', 'xy' ] ) ) ;
 *
 * @param fillvalue - The value to yield for iterators that are exhausted.
 * @param {Iterable[]} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
function _ziplongest(fillvalue, iterables) {
  var counter, filler, iterators, buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, i, e;

  return regeneratorRuntime.wrap(function _ziplongest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          counter = iterables.length;

          if (!(counter === 0)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt('return');

        case 3:
          filler = (0, _.repeat)(fillvalue);
          iterators = (0, _.list)((0, _.map)(_.iter, iterables));

        case 5:
          if (!true) {
            _context.next = 44;
            break;
          }

          buffer = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 10;
          _iterator = (0, _.enumerate)((0, _.map)(_._next, iterators))[Symbol.iterator]();

        case 12:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 26;
            break;
          }

          _step$value = _slicedToArray(_step.value, 2), i = _step$value[0], e = _step$value[1];

          if (!e.done) {
            _context.next = 22;
            break;
          }

          --counter;

          if (!(counter === 0)) {
            _context.next = 18;
            break;
          }

          return _context.abrupt('return');

        case 18:
          iterators[i] = filler;
          buffer.push(fillvalue);
          _context.next = 23;
          break;

        case 22:
          buffer.push(e.value);

        case 23:
          _iteratorNormalCompletion = true;
          _context.next = 12;
          break;

        case 26:
          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context['catch'](10);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 32:
          _context.prev = 32;
          _context.prev = 33;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 35:
          _context.prev = 35;

          if (!_didIteratorError) {
            _context.next = 38;
            break;
          }

          throw _iteratorError;

        case 38:
          return _context.finish(35);

        case 39:
          return _context.finish(32);

        case 40:
          _context.next = 42;
          return buffer;

        case 42:
          _context.next = 5;
          break;

        case 44:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[10, 28, 32, 40], [33,, 35, 39]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcGxvbmdlc3QuanMiXSwibmFtZXMiOlsiX3ppcGxvbmdlc3QiLCJmaWxsdmFsdWUiLCJpdGVyYWJsZXMiLCJjb3VudGVyIiwibGVuZ3RoIiwiZmlsbGVyIiwiaXRlcmF0b3JzIiwiYnVmZmVyIiwiaSIsImUiLCJkb25lIiwicHVzaCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQWVpQkEsVyxHQUFBQSxXOztBQWZqQjs7ZUFlaUJBLFc7O0FBYmpCOzs7Ozs7Ozs7Ozs7O0FBYU8sU0FBVUEsV0FBVixDQUF3QkMsU0FBeEIsRUFBbUNDLFNBQW5DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQ0MsaUJBRkQsR0FFV0QsVUFBVUUsTUFGckI7O0FBQUEsZ0JBSUVELFlBQVksQ0FKZDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQU1HRSxnQkFOSCxHQU1ZLGNBQVFKLFNBQVIsQ0FOWjtBQVFHSyxtQkFSSCxHQVFlLFlBQU0sbUJBQVlKLFNBQVosQ0FBTixDQVJmOztBQUFBO0FBQUEsZUFVSyxJQVZMO0FBQUE7QUFBQTtBQUFBOztBQVlBSyxnQkFaQSxHQVlTLEVBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWNtQixpQkFBVyxvQkFBYUQsU0FBYixDQUFYLENBZG5COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0RBY1FFLENBZFIsbUJBY1lDLENBZFo7O0FBQUEsZUFlR0EsRUFBRUMsSUFmTDtBQUFBO0FBQUE7QUFBQTs7QUFnQkwsWUFBRVAsT0FBRjs7QUFoQkssZ0JBaUJBQSxZQUFZLENBakJaO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBa0JMRyxvQkFBVUUsQ0FBVixJQUFlSCxNQUFmO0FBQ0FFLGlCQUFPSSxJQUFQLENBQWFWLFNBQWI7QUFuQks7QUFBQTs7QUFBQTtBQXNCTE0saUJBQU9JLElBQVAsQ0FBYUYsRUFBRUcsS0FBZjs7QUF0Qks7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsaUJBMEJBTCxNQTFCQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX3ppcGxvbmdlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwICwgaXRlciAsIF9uZXh0ICwgcmVwZWF0ICwgZW51bWVyYXRlIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBTYW1lIGFzIF96aXAsIGJ1dCBjb250aW51ZXMgdG8geWllbGQgemlwcGVkIHR1cGxlcyB1bnRpbCB0aGUgbGFzdCBpdGVyYWJsZSBpc1xuICogZXhoYXVzdGVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFtbJ0EnLCd4J10sWydCJywneSddLFsnQycsJy0nXSxbJ0QnLCctJ11dXG4gKiBsaXN0KCBfemlwbG9uZ2VzdCggJy0nICwgWyAnQUJDRCcsICd4eScgXSApICkgO1xuICpcbiAqIEBwYXJhbSBmaWxsdmFsdWUgLSBUaGUgdmFsdWUgdG8geWllbGQgZm9yIGl0ZXJhdG9ycyB0aGF0IGFyZSBleGhhdXN0ZWQuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlW119IGl0ZXJhYmxlcyAtIFRoZSBpdGVyYWJsZXMgdG8gemlwLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBfemlwbG9uZ2VzdCAoIGZpbGx2YWx1ZSwgaXRlcmFibGVzICkge1xuXG4gICAgbGV0IGNvdW50ZXIgPSBpdGVyYWJsZXMubGVuZ3RoIDtcblxuICAgIGlmICggY291bnRlciA9PT0gMCApIHJldHVybiA7XG5cbiAgICBjb25zdCBmaWxsZXIgPSByZXBlYXQoIGZpbGx2YWx1ZSApIDtcblxuICAgIGNvbnN0IGl0ZXJhdG9ycyA9IGxpc3QoIG1hcCggaXRlciAsIGl0ZXJhYmxlcyApICkgO1xuXG4gICAgd2hpbGUgKCB0cnVlICkge1xuXG5cdGNvbnN0IGJ1ZmZlciA9IFsgXSA7XG5cblx0Zm9yICggY29uc3QgWyBpICwgZSBdIG9mIGVudW1lcmF0ZSggbWFwKCBfbmV4dCAsIGl0ZXJhdG9ycyApICkgKSB7XG5cdCAgICBpZiAoIGUuZG9uZSApIHtcblx0XHQtLWNvdW50ZXIgO1xuXHRcdGlmICggY291bnRlciA9PT0gMCApIHJldHVybiA7XG5cdFx0aXRlcmF0b3JzW2ldID0gZmlsbGVyIDtcblx0XHRidWZmZXIucHVzaCggZmlsbHZhbHVlICkgO1xuXHQgICAgfVxuXHQgICAgZWxzZSB7XG5cdFx0YnVmZmVyLnB1c2goIGUudmFsdWUgKSA7XG5cdCAgICB9XG5cdH1cblxuXHR5aWVsZCBidWZmZXIgO1xuXG4gICAgfVxuXG59XG4iXX0=