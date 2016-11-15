'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.trunc = trunc;

var _aureoomsJsCollectionsDeque = require('aureooms-js-collections-deque');

var _aureoomsJsCollectionsDeque2 = _interopRequireDefault(_aureoomsJsCollectionsDeque);

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
					buffer = (0, _aureoomsJsCollectionsDeque2.default)(null, n);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RydW5jLmpzIl0sIm5hbWVzIjpbInRydW5jIiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJidWZmZXIiLCJlIiwibmV4dCIsImRvbmUiLCJhcHBlbmQiLCJ2YWx1ZSIsInBvcGxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBa0JpQkEsSyxHQUFBQSxLOztBQWxCakI7Ozs7QUFFQTs7QUFDQTs7OztlQWVpQkEsSzs7QUFiakI7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFVQSxLQUFWLENBQWtCQyxRQUFsQixFQUE2QkMsQ0FBN0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRURBLElBQUksQ0FGSDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxtQ0FHRSxnQkFBTUQsUUFBTixFQUFpQixDQUFDQyxDQUFsQixDQUhGOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQU9EQSxNQUFNLENBUEw7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUNBUUVELFFBUkY7O0FBQUE7QUFBQTs7QUFBQTtBQVlBRSxhQVpBLEdBWVcsZ0JBQU1GLFFBQU4sQ0FaWDtBQWNBRyxXQWRBLEdBY1MsMENBQU8sSUFBUCxFQUFjRixDQUFkLENBZFQ7O0FBQUE7QUFBQSxXQWdCRUEsTUFBTSxDQWhCUjtBQUFBO0FBQUE7QUFBQTs7QUFpQkNHLE1BakJELEdBaUJLRixTQUFTRyxJQUFULEVBakJMOztBQUFBLFVBa0JBRCxFQUFFRSxJQWxCRjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQW1CTEgsWUFBT0ksTUFBUCxDQUFlSCxFQUFFSSxLQUFqQjtBQW5CSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFzQmVOLFFBdEJmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBc0JNTSxVQXRCTjtBQUFBO0FBQUEsWUF1QkNMLE9BQU9NLE9BQVAsRUF2QkQ7O0FBQUE7QUF3QkxOLFlBQU9JLE1BQVAsQ0FBZUMsS0FBZjs7QUF4Qks7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJ0cnVuYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZXF1ZSBmcm9tICdhdXJlb29tcy1qcy1jb2xsZWN0aW9ucy1kZXF1ZScgO1xuXG5pbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi9pdGVyJyA7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAnLi90YWtlJyA7XG5cbi8qKlxuICogWWllbGRzIGFsbCBlbGVtZW50cyBvZiB0aGUgaXRlcmFibGUgZXhjZXB0IHRoZSBsYXN0IDxjb2RlPm48L2NvZGU+IG9uZXMuIElmXG4gKiA8Y29kZT5uPC9jb2RlPiBpcyBuZWdhdGl2ZSwgYmVoYXZlcyBsaWtlIDxjb2RlPntAbGluayB0YWtlfSggaXRlcmFibGUsIC1uXG4gKiApPC9jb2RlPi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIDAgLCAxICwgMiBdXG4gKiBsaXN0KCB0cnVuYyggcmFuZ2UoIDUgKSAsIDIgKSApIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBleGNsdWRlIGZyb20gdGhlIG91dHB1dC5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiB0cnVuYyAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRpZiAoIG4gPCAwICkge1xuXHRcdHlpZWxkKiB0YWtlKCBpdGVyYWJsZSAsIC1uICkgO1xuXHRcdHJldHVybiA7XG5cdH1cblxuXHRpZiAoIG4gPT09IDAgKSB7XG5cdFx0eWllbGQqIGl0ZXJhYmxlIDtcblx0XHRyZXR1cm4gO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRjb25zdCBidWZmZXIgPSBkZXF1ZSggbnVsbCAsIG4gKSA7XG5cblx0d2hpbGUgKCBuIC0tPiAwICkge1xuXHRcdGNvbnN0IGUgPSBpdGVyYXRvci5uZXh0KCApIDtcblx0XHRpZiAoIGUuZG9uZSApIHJldHVybiA7XG5cdFx0YnVmZmVyLmFwcGVuZCggZS52YWx1ZSApIDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHZhbHVlIG9mIGl0ZXJhdG9yICkge1xuXHRcdHlpZWxkIGJ1ZmZlci5wb3BsZWZ0KCkgO1xuXHRcdGJ1ZmZlci5hcHBlbmQoIHZhbHVlICkgO1xuXHR9XG5cbn1cbiJdfQ==