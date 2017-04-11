'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.trunc = trunc;

var _jsCollectionsDeque = require('@aureooms/js-collections-deque');

var _jsCollectionsDeque2 = _interopRequireDefault(_jsCollectionsDeque);

var _iter = require('./iter');

var _take = require('./take');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [trunc].map(regeneratorRuntime.mark);

/**
 * Yields all elements of the iterable except the last <code>n</code> ones. If
 * <code>n</code> is negative, behaves like <code>{@link take}( iterable, -n
 * )</code>.
 *
 * @example
 * // returns [ 0 , 1 , 2 ]
 * list( trunc( range( 5 ) , 2 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to exclude from the output.
 * @returns {Iterator}
 */
function trunc(iterable, n) {
	var iterator, buffer, e, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

	return regeneratorRuntime.wrap(function trunc$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(n < 0)) {
						_context.next = 3;
						break;
					}

					return _context.delegateYield((0, _take.take)(iterable, -n), 't0', 2);

				case 2:
					return _context.abrupt('return');

				case 3:
					if (!(n === 0)) {
						_context.next = 6;
						break;
					}

					return _context.delegateYield(iterable, 't1', 5);

				case 5:
					return _context.abrupt('return');

				case 6:
					iterator = (0, _iter.iter)(iterable);
					buffer = (0, _jsCollectionsDeque2.default)(null, n);

				case 8:
					if (!(n-- > 0)) {
						_context.next = 15;
						break;
					}

					e = iterator.next();

					if (!e.done) {
						_context.next = 12;
						break;
					}

					return _context.abrupt('return');

				case 12:
					buffer.append(e.value);
					_context.next = 8;
					break;

				case 15:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 18;
					_iterator = iterator[Symbol.iterator]();

				case 20:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 28;
						break;
					}

					value = _step.value;
					_context.next = 24;
					return buffer.popleft();

				case 24:
					buffer.append(value);

				case 25:
					_iteratorNormalCompletion = true;
					_context.next = 20;
					break;

				case 28:
					_context.next = 34;
					break;

				case 30:
					_context.prev = 30;
					_context.t2 = _context['catch'](18);
					_didIteratorError = true;
					_iteratorError = _context.t2;

				case 34:
					_context.prev = 34;
					_context.prev = 35;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 37:
					_context.prev = 37;

					if (!_didIteratorError) {
						_context.next = 40;
						break;
					}

					throw _iteratorError;

				case 40:
					return _context.finish(37);

				case 41:
					return _context.finish(34);

				case 42:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[18, 30, 34, 42], [35,, 37, 41]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RydW5jLmpzIl0sIm5hbWVzIjpbInRydW5jIiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJidWZmZXIiLCJlIiwibmV4dCIsImRvbmUiLCJhcHBlbmQiLCJ2YWx1ZSIsInBvcGxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBa0JpQkEsSyxHQUFBQSxLOztBQWxCakI7Ozs7QUFFQTs7QUFDQTs7OztlQWVpQkEsSzs7QUFiakI7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFVQSxLQUFWLENBQWtCQyxRQUFsQixFQUE2QkMsQ0FBN0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRURBLElBQUksQ0FGSDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxtQ0FHRSxnQkFBTUQsUUFBTixFQUFpQixDQUFDQyxDQUFsQixDQUhGOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQU9EQSxNQUFNLENBUEw7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUNBUUVELFFBUkY7O0FBQUE7QUFBQTs7QUFBQTtBQVlBRSxhQVpBLEdBWVcsZ0JBQU1GLFFBQU4sQ0FaWDtBQWNBRyxXQWRBLEdBY1Msa0NBQU8sSUFBUCxFQUFjRixDQUFkLENBZFQ7O0FBQUE7QUFBQSxXQWdCRUEsTUFBTSxDQWhCUjtBQUFBO0FBQUE7QUFBQTs7QUFpQkNHLE1BakJELEdBaUJLRixTQUFTRyxJQUFULEVBakJMOztBQUFBLFVBa0JBRCxFQUFFRSxJQWxCRjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQW1CTEgsWUFBT0ksTUFBUCxDQUFlSCxFQUFFSSxLQUFqQjtBQW5CSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFzQmVOLFFBdEJmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBc0JNTSxVQXRCTjtBQUFBO0FBQUEsWUF1QkNMLE9BQU9NLE9BQVAsRUF2QkQ7O0FBQUE7QUF3QkxOLFlBQU9JLE1BQVAsQ0FBZUMsS0FBZjs7QUF4Qks7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJ0cnVuYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZXF1ZSBmcm9tICdAYXVyZW9vbXMvanMtY29sbGVjdGlvbnMtZGVxdWUnIDtcblxuaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJy4vdGFrZScgO1xuXG4vKipcbiAqIFlpZWxkcyBhbGwgZWxlbWVudHMgb2YgdGhlIGl0ZXJhYmxlIGV4Y2VwdCB0aGUgbGFzdCA8Y29kZT5uPC9jb2RlPiBvbmVzLiBJZlxuICogPGNvZGU+bjwvY29kZT4gaXMgbmVnYXRpdmUsIGJlaGF2ZXMgbGlrZSA8Y29kZT57QGxpbmsgdGFrZX0oIGl0ZXJhYmxlLCAtblxuICogKTwvY29kZT4uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyAwICwgMSAsIDIgXVxuICogbGlzdCggdHJ1bmMoIHJhbmdlKCA1ICkgLCAyICkgKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gZXhjbHVkZSBmcm9tIHRoZSBvdXRwdXQuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogdHJ1bmMgKCBpdGVyYWJsZSAsIG4gKSB7XG5cblx0aWYgKCBuIDwgMCApIHtcblx0XHR5aWVsZCogdGFrZSggaXRlcmFibGUgLCAtbiApIDtcblx0XHRyZXR1cm4gO1xuXHR9XG5cblx0aWYgKCBuID09PSAwICkge1xuXHRcdHlpZWxkKiBpdGVyYWJsZSA7XG5cdFx0cmV0dXJuIDtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0Y29uc3QgYnVmZmVyID0gZGVxdWUoIG51bGwgLCBuICkgO1xuXG5cdHdoaWxlICggbiAtLT4gMCApIHtcblx0XHRjb25zdCBlID0gaXRlcmF0b3IubmV4dCggKSA7XG5cdFx0aWYgKCBlLmRvbmUgKSByZXR1cm4gO1xuXHRcdGJ1ZmZlci5hcHBlbmQoIGUudmFsdWUgKSA7XG5cdH1cblxuXHRmb3IgKCBjb25zdCB2YWx1ZSBvZiBpdGVyYXRvciApIHtcblx0XHR5aWVsZCBidWZmZXIucG9wbGVmdCgpIDtcblx0XHRidWZmZXIuYXBwZW5kKCB2YWx1ZSApIDtcblx0fVxuXG59XG4iXX0=