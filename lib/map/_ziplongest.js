'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._ziplongest = _ziplongest;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_ziplongest);

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
  }, _marked, this, [[10, 28, 32, 40], [33,, 35, 39]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvX3ppcGxvbmdlc3QuanMiXSwibmFtZXMiOlsiX3ppcGxvbmdlc3QiLCJmaWxsdmFsdWUiLCJpdGVyYWJsZXMiLCJjb3VudGVyIiwibGVuZ3RoIiwiZmlsbGVyIiwiaXRlcmF0b3JzIiwiYnVmZmVyIiwiaSIsImUiLCJkb25lIiwicHVzaCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQWVpQkEsVyxHQUFBQSxXOztBQWZqQjs7bURBZWlCQSxXOztBQWJqQjs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVVBLFdBQVYsQ0FBd0JDLFNBQXhCLEVBQW1DQyxTQUFuQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUNDLGlCQUZELEdBRVdELFVBQVVFLE1BRnJCOztBQUFBLGdCQUlFRCxZQUFZLENBSmQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFNR0UsZ0JBTkgsR0FNWSxjQUFRSixTQUFSLENBTlo7QUFRR0ssbUJBUkgsR0FRZSxZQUFNLG1CQUFZSixTQUFaLENBQU4sQ0FSZjs7QUFBQTtBQUFBLGVBVUssSUFWTDtBQUFBO0FBQUE7QUFBQTs7QUFZQUssZ0JBWkEsR0FZUyxFQVpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFjbUIsaUJBQVcsb0JBQWFELFNBQWIsQ0FBWCxDQWRuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHdEQWNRRSxDQWRSLG1CQWNZQyxDQWRaOztBQUFBLGVBZUdBLEVBQUVDLElBZkw7QUFBQTtBQUFBO0FBQUE7O0FBZ0JMLFlBQUVQLE9BQUY7O0FBaEJLLGdCQWlCQUEsWUFBWSxDQWpCWjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQWtCTEcsb0JBQVVFLENBQVYsSUFBZUgsTUFBZjtBQUNBRSxpQkFBT0ksSUFBUCxDQUFhVixTQUFiO0FBbkJLO0FBQUE7O0FBQUE7QUFzQkxNLGlCQUFPSSxJQUFQLENBQWFGLEVBQUVHLEtBQWY7O0FBdEJLO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlCQTBCQUwsTUExQkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il96aXBsb25nZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIG1hcCAsIGl0ZXIgLCBfbmV4dCAsIHJlcGVhdCAsIGVudW1lcmF0ZSB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogU2FtZSBhcyBfemlwLCBidXQgY29udGludWVzIHRvIHlpZWxkIHppcHBlZCB0dXBsZXMgdW50aWwgdGhlIGxhc3QgaXRlcmFibGUgaXNcbiAqIGV4aGF1c3RlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbWydBJywneCddLFsnQicsJ3knXSxbJ0MnLCctJ10sWydEJywnLSddXVxuICogbGlzdCggX3ppcGxvbmdlc3QoICctJyAsIFsgJ0FCQ0QnLCAneHknIF0gKSApIDtcbiAqXG4gKiBAcGFyYW0gZmlsbHZhbHVlIC0gVGhlIHZhbHVlIHRvIHlpZWxkIGZvciBpdGVyYXRvcnMgdGhhdCBhcmUgZXhoYXVzdGVkLlxuICogQHBhcmFtIHtJdGVyYWJsZVtdfSBpdGVyYWJsZXMgLSBUaGUgaXRlcmFibGVzIHRvIHppcC5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX3ppcGxvbmdlc3QgKCBmaWxsdmFsdWUsIGl0ZXJhYmxlcyApIHtcblxuICAgIGxldCBjb3VudGVyID0gaXRlcmFibGVzLmxlbmd0aCA7XG5cbiAgICBpZiAoIGNvdW50ZXIgPT09IDAgKSByZXR1cm4gO1xuXG4gICAgY29uc3QgZmlsbGVyID0gcmVwZWF0KCBmaWxsdmFsdWUgKSA7XG5cbiAgICBjb25zdCBpdGVyYXRvcnMgPSBsaXN0KCBtYXAoIGl0ZXIgLCBpdGVyYWJsZXMgKSApIDtcblxuICAgIHdoaWxlICggdHJ1ZSApIHtcblxuXHRjb25zdCBidWZmZXIgPSBbIF0gO1xuXG5cdGZvciAoIGNvbnN0IFsgaSAsIGUgXSBvZiBlbnVtZXJhdGUoIG1hcCggX25leHQgLCBpdGVyYXRvcnMgKSApICkge1xuXHQgICAgaWYgKCBlLmRvbmUgKSB7XG5cdFx0LS1jb3VudGVyIDtcblx0XHRpZiAoIGNvdW50ZXIgPT09IDAgKSByZXR1cm4gO1xuXHRcdGl0ZXJhdG9yc1tpXSA9IGZpbGxlciA7XG5cdFx0YnVmZmVyLnB1c2goIGZpbGx2YWx1ZSApIDtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHRcdGJ1ZmZlci5wdXNoKCBlLnZhbHVlICkgO1xuXHQgICAgfVxuXHR9XG5cblx0eWllbGQgYnVmZmVyIDtcblxuICAgIH1cblxufVxuIl19