'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.by = by;

var _iter = require('./iter');

var _range = require('./range');

var _marked = [by].map(regeneratorRuntime.mark);

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
	}, _marked[0], this, [[6, 42, 46, 54], [17, 21, 25, 33], [26,, 28, 32], [47,, 49, 53]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2J5LmpzIl0sIm5hbWVzIjpbImJ5IiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJ0dXBsZSIsImkiLCJjdXJyZW50IiwibmV4dCIsImRvbmUiLCJqIiwicHVzaCIsInVuZGVmaW5lZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdpQkEsRSxHQUFBQSxFOztBQVhqQjs7QUFDQTs7ZUFVaUJBLEU7O0FBUmpCOzs7Ozs7OztBQVFPLFNBQVVBLEVBQVYsQ0FBZUMsUUFBZixFQUEwQkMsQ0FBMUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQyxhQUZBLEdBRVcsZ0JBQU1GLFFBQU4sQ0FGWDs7QUFBQTtBQUFBLFVBSUUsSUFKRjtBQUFBO0FBQUE7QUFBQTs7QUFNQ0csVUFORCxHQU1TLEVBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVFZLGtCQUFPRixDQUFQLENBUlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRT0csTUFSUDtBQVVFQyxZQVZGLEdBVVlILFNBQVNJLElBQVQsRUFWWjs7QUFBQSxVQVlDRCxRQUFRRSxJQVpUO0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBY0VILE1BQU0sQ0FkUjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFnQkgsdUJBQWlCLGtCQUFPSCxJQUFJRyxDQUFYLENBQWpCO0FBQVlJLE9BQVo7QUFBa0NMLFlBQU1NLElBQU4sQ0FBWUMsU0FBWjtBQUFsQyxNQWhCRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsWUFrQkdQLEtBbEJIOztBQUFBO0FBQUE7O0FBQUE7O0FBd0JKQSxXQUFNTSxJQUFOLENBQVlKLFFBQVFNLEtBQXBCOztBQXhCSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxZQTRCQ1IsS0E1QkQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuL3JhbmdlJyA7XG5cbi8qKlxuICogWWllbGRzIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBieSBncm91cGluZyB0aGVtIGludG8gdHVwbGVzIG9mIGFcbiAqIGdpdmVuIHNpemUuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBzaXplIG9mIHRoZSB5aWVsZGVkIHR1cGxlcy5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBieSAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IHR1cGxlID0gWyBdIDtcblxuXHRcdGZvciAoIGNvbnN0IGkgb2YgcmFuZ2UoIG4gKSApIHtcblxuXHRcdFx0Y29uc3QgY3VycmVudCA9IGl0ZXJhdG9yLm5leHQoICkgO1xuXG5cdFx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHtcblxuXHRcdFx0XHRpZiAoIGkgPT09IDAgKSByZXR1cm4gO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IGogb2YgcmFuZ2UoIG4gLSBpICkgKSB0dXBsZS5wdXNoKCB1bmRlZmluZWQgKSA7XG5cblx0XHRcdFx0eWllbGQgdHVwbGUgO1xuXG5cdFx0XHRcdHJldHVybiA7XG5cblx0XHRcdH1cblxuXHRcdFx0dHVwbGUucHVzaCggY3VycmVudC52YWx1ZSApIDtcblxuXHRcdH1cblxuXHRcdHlpZWxkIHR1cGxlIDtcblxuXHR9XG5cbn1cbiJdfQ==