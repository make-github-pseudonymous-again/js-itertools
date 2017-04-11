'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.frame = frame;

var _iter = require('./iter');

var _range = require('./range');

var _marked = [frame].map(regeneratorRuntime.mark);

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
	}, _marked[0], this, [[5, 18, 22, 30], [23,, 25, 29], [35, 48, 52, 60], [53,, 55, 59]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2ZyYW1lLmpzIl0sIm5hbWVzIjpbImZyYW1lIiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJ0dXBsZSIsImkiLCJjdXJyZW50IiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmlCQSxLLEdBQUFBLEs7O0FBakJqQjs7QUFDQTs7ZUFnQmlCQSxLOztBQWRqQjs7Ozs7Ozs7Ozs7Ozs7QUFjTyxTQUFVQSxLQUFWLENBQWtCQyxRQUFsQixFQUE2QkMsQ0FBN0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7QUFFTUMsYUFQQSxHQU9XLGdCQUFNRixRQUFOLENBUFg7QUFTRkcsVUFURSxHQVNNLEVBVE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVdXLGtCQUFPRixDQUFQLENBWFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXTUcsTUFYTjtBQWFDQyxZQWJELEdBYVdILFNBQVNJLElBQVQsRUFiWDs7QUFBQSxVQWVBRCxRQUFRRSxJQWZSO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQWlCTEosV0FBTUssSUFBTixDQUFZSCxRQUFRSSxLQUFwQjs7QUFqQks7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsWUFxQkFOLEtBckJBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF1QmVELFFBdkJmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBdUJNTyxVQXZCTjs7O0FBeUJMTixhQUFRQSxNQUFNTyxLQUFOLENBQWEsQ0FBYixDQUFSO0FBQ0FQLFdBQU1LLElBQU4sQ0FBWUMsS0FBWjtBQTFCSztBQUFBLFlBMkJDTixLQTNCRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImZyYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuL3JhbmdlJyA7XG5cbi8qKlxuICogWWllbGRzIHR1cGxlcyB0aGF0IGNvbnRhaW4gdGhlIGN1cnJlbnQgZWxlbWVudCBvZiB0aGUgaW5wdXQgaXRlcmFibGUgYW5kIHRoZVxuICogbmV4dCA8Y29kZT5uLTE8L2NvZGU+IGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogZnJhbWUoIHJhbmdlKCAxMDAgKSAsIDIgKSA7XG4gKiAvLyBpcyBlcXVpdmFsZW50IHRvXG4gKiB6aXAoIHJhbmdlKCAxMDAgKSAsIHJhbmdlKCAxICwgMTAwICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBmcmFtZSBzaXplLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBmcmFtZSAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHQvLyBDb3VsZCBoYXZlIGFuIGltcGxlbWVudGF0aW9uIHVzaW5nIGEgZGVxdWVcblx0Ly8gdGhhdCBkb2Vzbid0IHNsaWNlIChhbmQgdGh1cyBhbGxvY2F0ZSBhIG5ld1xuXHQvLyB2ZWN0b3IgZXZlcnl0aW1lKS4gVGhvdWdoIHRoZSB5aWVsZCBvYmplY3Rcblx0Ly8gY291bGQgbm90IGJlIG1vZGlmaWVkIGJ5IHRoZSBjYWxsZXIgaW4gdGhhdCBjYXNlLlxuXG5cdGNvbnN0IGl0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0bGV0IHR1cGxlID0gWyBdIDtcblxuXHRmb3IgKCBjb25zdCBpIG9mIHJhbmdlKCBuICkgKSB7XG5cblx0XHRjb25zdCBjdXJyZW50ID0gaXRlcmF0b3IubmV4dCggKSA7XG5cblx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHJldHVybiA7XG5cblx0XHR0dXBsZS5wdXNoKCBjdXJyZW50LnZhbHVlICkgO1xuXG5cdH1cblxuXHR5aWVsZCB0dXBsZSA7XG5cblx0Zm9yICggY29uc3QgdmFsdWUgb2YgaXRlcmF0b3IgKSB7XG5cblx0XHR0dXBsZSA9IHR1cGxlLnNsaWNlKCAxICkgO1xuXHRcdHR1cGxlLnB1c2goIHZhbHVlICkgO1xuXHRcdHlpZWxkIHR1cGxlIDtcblxuXHR9XG5cbn1cbiJdfQ==