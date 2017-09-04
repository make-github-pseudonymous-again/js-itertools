'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.by = by;

var _iter = require('./iter');

var _range = require('./range');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(by);

/**
 * Yields elements of the input iterable by grouping them into tuples of a
 * given size.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The size of the yielded tuples.
 * @returns {Iterator}
 */
function by(iterable, n) {
	var iterator, tuple, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i, current, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, j;

	return regeneratorRuntime.wrap(function by$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					iterator = (0, _iter.iter)(iterable);

				case 1:
					if (!true) {
						_context.next = 58;
						break;
					}

					tuple = [];
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 6;
					_iterator = (0, _range.range)(n)[Symbol.iterator]();

				case 8:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 40;
						break;
					}

					i = _step.value;
					current = iterator.next();

					if (!current.done) {
						_context.next = 36;
						break;
					}

					if (!(i === 0)) {
						_context.next = 14;
						break;
					}

					return _context.abrupt('return');

				case 14:
					_iteratorNormalCompletion2 = true;
					_didIteratorError2 = false;
					_iteratorError2 = undefined;
					_context.prev = 17;


					for (_iterator2 = (0, _range.range)(n - i)[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						j = _step2.value;
						tuple.push(undefined);
					}_context.next = 25;
					break;

				case 21:
					_context.prev = 21;
					_context.t0 = _context['catch'](17);
					_didIteratorError2 = true;
					_iteratorError2 = _context.t0;

				case 25:
					_context.prev = 25;
					_context.prev = 26;

					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}

				case 28:
					_context.prev = 28;

					if (!_didIteratorError2) {
						_context.next = 31;
						break;
					}

					throw _iteratorError2;

				case 31:
					return _context.finish(28);

				case 32:
					return _context.finish(25);

				case 33:
					_context.next = 35;
					return tuple;

				case 35:
					return _context.abrupt('return');

				case 36:

					tuple.push(current.value);

				case 37:
					_iteratorNormalCompletion = true;
					_context.next = 8;
					break;

				case 40:
					_context.next = 46;
					break;

				case 42:
					_context.prev = 42;
					_context.t1 = _context['catch'](6);
					_didIteratorError = true;
					_iteratorError = _context.t1;

				case 46:
					_context.prev = 46;
					_context.prev = 47;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 49:
					_context.prev = 49;

					if (!_didIteratorError) {
						_context.next = 52;
						break;
					}

					throw _iteratorError;

				case 52:
					return _context.finish(49);

				case 53:
					return _context.finish(46);

				case 54:
					_context.next = 56;
					return tuple;

				case 56:
					_context.next = 1;
					break;

				case 58:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[6, 42, 46, 54], [17, 21, 25, 33], [26,, 28, 32], [47,, 49, 53]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2J5LmpzIl0sIm5hbWVzIjpbImJ5IiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJ0dXBsZSIsImkiLCJjdXJyZW50IiwibmV4dCIsImRvbmUiLCJqIiwicHVzaCIsInVuZGVmaW5lZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsRSxHQUFBQSxFOztBQVhqQjs7QUFDQTs7bURBVWlCQSxFOztBQVJqQjs7Ozs7Ozs7QUFRTyxTQUFVQSxFQUFWLENBQWVDLFFBQWYsRUFBMEJDLENBQTFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUMsYUFGQSxHQUVXLGdCQUFNRixRQUFOLENBRlg7O0FBQUE7QUFBQSxVQUlFLElBSkY7QUFBQTtBQUFBO0FBQUE7O0FBTUNHLFVBTkQsR0FNUyxFQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFRWSxrQkFBT0YsQ0FBUCxDQVJaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUU9HLE1BUlA7QUFVRUMsWUFWRixHQVVZSCxTQUFTSSxJQUFULEVBVlo7O0FBQUEsVUFZQ0QsUUFBUUUsSUFaVDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxXQWNFSCxNQUFNLENBZFI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBZ0JILHVCQUFpQixrQkFBT0gsSUFBSUcsQ0FBWCxDQUFqQjtBQUFZSSxPQUFaO0FBQWtDTCxZQUFNTSxJQUFOLENBQVlDLFNBQVo7QUFBbEMsTUFoQkc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBa0JHUCxLQWxCSDs7QUFBQTtBQUFBOztBQUFBOztBQXdCSkEsV0FBTU0sSUFBTixDQUFZSixRQUFRTSxLQUFwQjs7QUF4Qkk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsWUE0QkNSLEtBNUJEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJieS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgfSBmcm9tICcuL2l0ZXInIDtcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnLi9yYW5nZScgO1xuXG4vKipcbiAqIFlpZWxkcyBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUgYnkgZ3JvdXBpbmcgdGhlbSBpbnRvIHR1cGxlcyBvZiBhXG4gKiBnaXZlbiBzaXplLlxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgc2l6ZSBvZiB0aGUgeWllbGRlZCB0dXBsZXMuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogYnkgKCBpdGVyYWJsZSAsIG4gKSB7XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCB0dXBsZSA9IFsgXSA7XG5cblx0XHRmb3IgKCBjb25zdCBpIG9mIHJhbmdlKCBuICkgKSB7XG5cblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCApIDtcblxuXHRcdFx0aWYgKCBjdXJyZW50LmRvbmUgKSB7XG5cblx0XHRcdFx0aWYgKCBpID09PSAwICkgcmV0dXJuIDtcblxuXHRcdFx0XHRmb3IgKCBjb25zdCBqIG9mIHJhbmdlKCBuIC0gaSApICkgdHVwbGUucHVzaCggdW5kZWZpbmVkICkgO1xuXG5cdFx0XHRcdHlpZWxkIHR1cGxlIDtcblxuXHRcdFx0XHRyZXR1cm4gO1xuXG5cdFx0XHR9XG5cblx0XHRcdHR1cGxlLnB1c2goIGN1cnJlbnQudmFsdWUgKSA7XG5cblx0XHR9XG5cblx0XHR5aWVsZCB0dXBsZSA7XG5cblx0fVxuXG59XG4iXX0=