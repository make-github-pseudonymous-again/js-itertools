'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dropwhile = dropwhile;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(dropwhile);

/**
 * Drop elements of the input iterable while the current element satisfies the
 * input predicate.
 *
 * @param {Function} predicate - The input predicate.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function dropwhile(predicate, iterable) {
	var iterator, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

	return regeneratorRuntime.wrap(function dropwhile$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					iterator = (0, _.iter)(iterable);
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 4;
					_iterator = iterator[Symbol.iterator]();

				case 6:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 17;
						break;
					}

					item = _step.value;

					if (!predicate(item)) {
						_context.next = 10;
						break;
					}

					return _context.abrupt('continue', 14);

				case 10:
					_context.next = 12;
					return item;

				case 12:
					return _context.delegateYield(iterator, 't0', 13);

				case 13:
					return _context.abrupt('return');

				case 14:
					_iteratorNormalCompletion = true;
					_context.next = 6;
					break;

				case 17:
					_context.next = 23;
					break;

				case 19:
					_context.prev = 19;
					_context.t1 = _context['catch'](4);
					_didIteratorError = true;
					_iteratorError = _context.t1;

				case 23:
					_context.prev = 23;
					_context.prev = 24;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 26:
					_context.prev = 26;

					if (!_didIteratorError) {
						_context.next = 29;
						break;
					}

					throw _iteratorError;

				case 29:
					return _context.finish(26);

				case 30:
					return _context.finish(23);

				case 31:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[4, 19, 23, 31], [24,, 26, 30]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZHJvcHdoaWxlLmpzIl0sIm5hbWVzIjpbImRyb3B3aGlsZSIsInByZWRpY2F0ZSIsIml0ZXJhYmxlIiwiaXRlcmF0b3IiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVpQkEsUyxHQUFBQSxTOztBQVZqQjs7bURBVWlCQSxTOztBQVJqQjs7Ozs7Ozs7QUFRTyxTQUFVQSxTQUFWLENBQXNCQyxTQUF0QixFQUFrQ0MsUUFBbEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxhQUZFLEdBRVMsWUFBTUQsUUFBTixDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFJWUMsUUFKWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlJQyxTQUpKOztBQUFBLFVBTUFILFVBQVdHLElBQVgsQ0FOQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUEsWUFVQ0EsSUFWRDs7QUFBQTtBQUFBLG1DQVlFRCxRQVpGOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkcm9wd2hpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBEcm9wIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSB3aGlsZSB0aGUgY3VycmVudCBlbGVtZW50IHNhdGlzZmllcyB0aGVcbiAqIGlucHV0IHByZWRpY2F0ZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgLSBUaGUgaW5wdXQgcHJlZGljYXRlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZHJvcHdoaWxlICggcHJlZGljYXRlICwgaXRlcmFibGUgKSB7XG5cblx0bGV0IGl0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0Zm9yICggbGV0IGl0ZW0gb2YgaXRlcmF0b3IgKSB7XG5cblx0XHRpZiAoIHByZWRpY2F0ZSggaXRlbSApICkgY29udGludWUgO1xuXG5cdFx0Ly8gZXF1aXZhbGVudCB0byByZXR1cm4gY2hhaW4oIFsgWyBpdGVtIF0gLCBpdGVyYXRvciBdICkgO1xuXG5cdFx0eWllbGQgaXRlbSA7XG5cblx0XHR5aWVsZCogaXRlcmF0b3IgO1xuXG5cdFx0cmV0dXJuIDtcblxuXHR9XG5cbn1cbiJdfQ==