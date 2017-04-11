'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.tee = tee;

var _iter = require('./iter');

var _list = require('./list');

var _map = require('../map/map');

var _jsCollectionsDeque = require('@aureooms/js-collections-deque');

var _jsCollectionsDeque2 = _interopRequireDefault(_jsCollectionsDeque);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns <code>n</code> copies of the input iterable. Note that if the input
 * iterable is an iterator, then it must be discarded by the caller after
 * calling tee.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of copies to make.
 * @returns {Iterator[]}
 */
function tee(iterable, n) {

	var iterator = (0, _iter.iter)(iterable);

	var copies = [];

	while (n-- > 0) {
		copies.push((0, _jsCollectionsDeque2.default)());
	}var gen = regeneratorRuntime.mark(function gen(mycopy) {
		var current, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, copy;

		return regeneratorRuntime.wrap(function gen$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (!true) {
							_context.next = 28;
							break;
						}

						if (!(mycopy.length === 0)) {
							_context.next = 24;
							break;
						}

						current = iterator.next();

						if (!current.done) {
							_context.next = 5;
							break;
						}

						return _context.abrupt('return');

					case 5:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context.prev = 8;


						for (_iterator = copies[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							copy = _step.value;
							copy.append(current.value);
						}_context.next = 16;
						break;

					case 12:
						_context.prev = 12;
						_context.t0 = _context['catch'](8);
						_didIteratorError = true;
						_iteratorError = _context.t0;

					case 16:
						_context.prev = 16;
						_context.prev = 17;

						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}

					case 19:
						_context.prev = 19;

						if (!_didIteratorError) {
							_context.next = 22;
							break;
						}

						throw _iteratorError;

					case 22:
						return _context.finish(19);

					case 23:
						return _context.finish(16);

					case 24:
						_context.next = 26;
						return mycopy.popleft();

					case 26:
						_context.next = 0;
						break;

					case 28:
					case 'end':
						return _context.stop();
				}
			}
		}, gen, this, [[8, 12, 16, 24], [17,, 19, 23]]);
	});

	return (0, _list.list)((0, _map.map)(gen, copies));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RlZS5qcyJdLCJuYW1lcyI6WyJ0ZWUiLCJpdGVyYWJsZSIsIm4iLCJpdGVyYXRvciIsImNvcGllcyIsInB1c2giLCJnZW4iLCJteWNvcHkiLCJsZW5ndGgiLCJjdXJyZW50IiwibmV4dCIsImRvbmUiLCJjb3B5IiwiYXBwZW5kIiwidmFsdWUiLCJwb3BsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQWVnQkEsRyxHQUFBQSxHOztBQWZoQjs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQkMsQ0FBMUIsRUFBOEI7O0FBRXBDLEtBQUlDLFdBQVcsZ0JBQU1GLFFBQU4sQ0FBZjs7QUFFQSxLQUFJRyxTQUFTLEVBQWI7O0FBRUEsUUFBUUYsTUFBTSxDQUFkO0FBQWtCRSxTQUFPQyxJQUFQLENBQWEsbUNBQWI7QUFBbEIsRUFFQSxJQUFJQyw4QkFBTSxTQUFOQSxHQUFNLENBQVlDLE1BQVo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUQsSUFGQztBQUFBO0FBQUE7QUFBQTs7QUFBQSxZQUlIQSxPQUFPQyxNQUFQLEtBQWtCLENBSmY7QUFBQTtBQUFBO0FBQUE7O0FBTUhDLGFBTkcsR0FNT04sU0FBU08sSUFBVCxFQU5QOztBQUFBLFdBUUZELFFBQVFFLElBUk47QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBVVAsdUJBQWtCUCxNQUFsQjtBQUFVUSxXQUFWO0FBQTJCQSxZQUFLQyxNQUFMLENBQWFKLFFBQVFLLEtBQXJCO0FBQTNCLE9BVk87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBY0ZQLE9BQU9RLE9BQVAsRUFkRTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU5ULEdBQU07QUFBQSxFQUFOLENBQUo7O0FBb0JBLFFBQU8sZ0JBQU0sY0FBS0EsR0FBTCxFQUFXRixNQUFYLENBQU4sQ0FBUDtBQUVBIiwiZmlsZSI6InRlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgfSBmcm9tICcuL2l0ZXInIDtcbmltcG9ydCB7IGxpc3QgfSBmcm9tICcuL2xpc3QnIDtcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL21hcC9tYXAnIDtcblxuaW1wb3J0IGRlcXVlIGZyb20gJ0BhdXJlb29tcy9qcy1jb2xsZWN0aW9ucy1kZXF1ZScgO1xuXG4vKipcbiAqIFJldHVybnMgPGNvZGU+bjwvY29kZT4gY29waWVzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS4gTm90ZSB0aGF0IGlmIHRoZSBpbnB1dFxuICogaXRlcmFibGUgaXMgYW4gaXRlcmF0b3IsIHRoZW4gaXQgbXVzdCBiZSBkaXNjYXJkZWQgYnkgdGhlIGNhbGxlciBhZnRlclxuICogY2FsbGluZyB0ZWUuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgY29waWVzIHRvIG1ha2UuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3JbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlZSAoIGl0ZXJhYmxlICwgbiApIHtcblxuXHRsZXQgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRsZXQgY29waWVzID0gWyBdIDtcblxuXHR3aGlsZSAoIG4gLS0+IDAgKSBjb3BpZXMucHVzaCggZGVxdWUoICkgKSA7XG5cblx0bGV0IGdlbiA9IGZ1bmN0aW9uKiAoIG15Y29weSApIHtcblxuXHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0aWYgKCBteWNvcHkubGVuZ3RoID09PSAwICkge1xuXG5cdFx0XHRcdGxldCBjdXJyZW50ID0gaXRlcmF0b3IubmV4dCgpIDtcblxuXHRcdFx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHJldHVybiA7XG5cblx0XHRcdFx0Zm9yICggbGV0IGNvcHkgb2YgY29waWVzICkgY29weS5hcHBlbmQoIGN1cnJlbnQudmFsdWUgKSA7XG5cblx0XHRcdH1cblxuXHRcdFx0eWllbGQgbXljb3B5LnBvcGxlZnQoICkgO1xuXG5cdFx0fVxuXG5cdH0gO1xuXG5cdHJldHVybiBsaXN0KCBtYXAoIGdlbiAsIGNvcGllcyApICkgO1xuXG59XG4iXX0=