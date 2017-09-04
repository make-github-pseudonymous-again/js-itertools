'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.frame = frame;

var _iter = require('./iter');

var _range = require('./range');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(frame);

/**
 * Yields tuples that contain the current element of the input iterable and the
 * next <code>n-1</code> elements of the input iterable.
 *
 * @example
 * frame( range( 100 ) , 2 ) ;
 * // is equivalent to
 * zip( range( 100 ) , range( 1 , 100 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The frame size.
 * @returns {Iterator}
 *
 */
function frame(iterable, n) {
	var iterator, tuple, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i, current, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, value;

	return regeneratorRuntime.wrap(function frame$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:

					// Could have an implementation using a deque
					// that doesn't slice (and thus allocate a new
					// vector everytime). Though the yield object
					// could not be modified by the caller in that case.

					iterator = (0, _iter.iter)(iterable);
					tuple = [];
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 5;
					_iterator = (0, _range.range)(n)[Symbol.iterator]();

				case 7:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 16;
						break;
					}

					i = _step.value;
					current = iterator.next();

					if (!current.done) {
						_context.next = 12;
						break;
					}

					return _context.abrupt('return');

				case 12:

					tuple.push(current.value);

				case 13:
					_iteratorNormalCompletion = true;
					_context.next = 7;
					break;

				case 16:
					_context.next = 22;
					break;

				case 18:
					_context.prev = 18;
					_context.t0 = _context['catch'](5);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 22:
					_context.prev = 22;
					_context.prev = 23;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 25:
					_context.prev = 25;

					if (!_didIteratorError) {
						_context.next = 28;
						break;
					}

					throw _iteratorError;

				case 28:
					return _context.finish(25);

				case 29:
					return _context.finish(22);

				case 30:
					_context.next = 32;
					return tuple;

				case 32:
					_iteratorNormalCompletion2 = true;
					_didIteratorError2 = false;
					_iteratorError2 = undefined;
					_context.prev = 35;
					_iterator2 = iterator[Symbol.iterator]();

				case 37:
					if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
						_context.next = 46;
						break;
					}

					value = _step2.value;


					tuple = tuple.slice(1);
					tuple.push(value);
					_context.next = 43;
					return tuple;

				case 43:
					_iteratorNormalCompletion2 = true;
					_context.next = 37;
					break;

				case 46:
					_context.next = 52;
					break;

				case 48:
					_context.prev = 48;
					_context.t1 = _context['catch'](35);
					_didIteratorError2 = true;
					_iteratorError2 = _context.t1;

				case 52:
					_context.prev = 52;
					_context.prev = 53;

					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}

				case 55:
					_context.prev = 55;

					if (!_didIteratorError2) {
						_context.next = 58;
						break;
					}

					throw _iteratorError2;

				case 58:
					return _context.finish(55);

				case 59:
					return _context.finish(52);

				case 60:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[5, 18, 22, 30], [23,, 25, 29], [35, 48, 52, 60], [53,, 55, 59]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2ZyYW1lLmpzIl0sIm5hbWVzIjpbImZyYW1lIiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJ0dXBsZSIsImkiLCJjdXJyZW50IiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmlCQSxLLEdBQUFBLEs7O0FBakJqQjs7QUFDQTs7bURBZ0JpQkEsSzs7QUFkakI7Ozs7Ozs7Ozs7Ozs7O0FBY08sU0FBVUEsS0FBVixDQUFrQkMsUUFBbEIsRUFBNkJDLENBQTdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRU1DLGFBUEEsR0FPVyxnQkFBTUYsUUFBTixDQVBYO0FBU0ZHLFVBVEUsR0FTTSxFQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFXVyxrQkFBT0YsQ0FBUCxDQVhYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV01HLE1BWE47QUFhQ0MsWUFiRCxHQWFXSCxTQUFTSSxJQUFULEVBYlg7O0FBQUEsVUFlQUQsUUFBUUUsSUFmUjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFpQkxKLFdBQU1LLElBQU4sQ0FBWUgsUUFBUUksS0FBcEI7O0FBakJLO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBcUJBTixLQXJCQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdUJlRCxRQXZCZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCTU8sVUF2Qk47OztBQXlCTE4sYUFBUUEsTUFBTU8sS0FBTixDQUFhLENBQWIsQ0FBUjtBQUNBUCxXQUFNSyxJQUFOLENBQVlDLEtBQVo7QUExQks7QUFBQSxZQTJCQ04sS0EzQkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJmcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgfSBmcm9tICcuL2l0ZXInIDtcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnLi9yYW5nZScgO1xuXG4vKipcbiAqIFlpZWxkcyB0dXBsZXMgdGhhdCBjb250YWluIHRoZSBjdXJyZW50IGVsZW1lbnQgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGFuZCB0aGVcbiAqIG5leHQgPGNvZGU+bi0xPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGZyYW1lKCByYW5nZSggMTAwICkgLCAyICkgO1xuICogLy8gaXMgZXF1aXZhbGVudCB0b1xuICogemlwKCByYW5nZSggMTAwICkgLCByYW5nZSggMSAsIDEwMCApICkgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgZnJhbWUgc2l6ZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZnJhbWUgKCBpdGVyYWJsZSAsIG4gKSB7XG5cblx0Ly8gQ291bGQgaGF2ZSBhbiBpbXBsZW1lbnRhdGlvbiB1c2luZyBhIGRlcXVlXG5cdC8vIHRoYXQgZG9lc24ndCBzbGljZSAoYW5kIHRodXMgYWxsb2NhdGUgYSBuZXdcblx0Ly8gdmVjdG9yIGV2ZXJ5dGltZSkuIFRob3VnaCB0aGUgeWllbGQgb2JqZWN0XG5cdC8vIGNvdWxkIG5vdCBiZSBtb2RpZmllZCBieSB0aGUgY2FsbGVyIGluIHRoYXQgY2FzZS5cblxuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdGxldCB0dXBsZSA9IFsgXSA7XG5cblx0Zm9yICggY29uc3QgaSBvZiByYW5nZSggbiApICkge1xuXG5cdFx0Y29uc3QgY3VycmVudCA9IGl0ZXJhdG9yLm5leHQoICkgO1xuXG5cdFx0aWYgKCBjdXJyZW50LmRvbmUgKSByZXR1cm4gO1xuXG5cdFx0dHVwbGUucHVzaCggY3VycmVudC52YWx1ZSApIDtcblxuXHR9XG5cblx0eWllbGQgdHVwbGUgO1xuXG5cdGZvciAoIGNvbnN0IHZhbHVlIG9mIGl0ZXJhdG9yICkge1xuXG5cdFx0dHVwbGUgPSB0dXBsZS5zbGljZSggMSApIDtcblx0XHR0dXBsZS5wdXNoKCB2YWx1ZSApIDtcblx0XHR5aWVsZCB0dXBsZSA7XG5cblx0fVxuXG59XG4iXX0=