'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.tee = tee;

var _iter = require('./iter');

var _list = require('./list');

var _map = require('../map/map');

var _aureoomsJsCollectionsDeque = require('aureooms-js-collections-deque');

var _aureoomsJsCollectionsDeque2 = _interopRequireDefault(_aureoomsJsCollectionsDeque);

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
		copies.push((0, _aureoomsJsCollectionsDeque2.default)());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RlZS5qcyJdLCJuYW1lcyI6WyJ0ZWUiLCJpdGVyYWJsZSIsIm4iLCJpdGVyYXRvciIsImNvcGllcyIsInB1c2giLCJnZW4iLCJteWNvcHkiLCJsZW5ndGgiLCJjdXJyZW50IiwibmV4dCIsImRvbmUiLCJjb3B5IiwiYXBwZW5kIiwidmFsdWUiLCJwb3BsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQWVnQkEsRyxHQUFBQSxHOztBQWZoQjs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQkMsQ0FBMUIsRUFBOEI7O0FBRXBDLEtBQUlDLFdBQVcsZ0JBQU1GLFFBQU4sQ0FBZjs7QUFFQSxLQUFJRyxTQUFTLEVBQWI7O0FBRUEsUUFBUUYsTUFBTSxDQUFkO0FBQWtCRSxTQUFPQyxJQUFQLENBQWEsMkNBQWI7QUFBbEIsRUFFQSxJQUFJQyw4QkFBTSxTQUFOQSxHQUFNLENBQVlDLE1BQVo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUQsSUFGQztBQUFBO0FBQUE7QUFBQTs7QUFBQSxZQUlIQSxPQUFPQyxNQUFQLEtBQWtCLENBSmY7QUFBQTtBQUFBO0FBQUE7O0FBTUhDLGFBTkcsR0FNT04sU0FBU08sSUFBVCxFQU5QOztBQUFBLFdBUUZELFFBQVFFLElBUk47QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBVVAsdUJBQWtCUCxNQUFsQjtBQUFVUSxXQUFWO0FBQTJCQSxZQUFLQyxNQUFMLENBQWFKLFFBQVFLLEtBQXJCO0FBQTNCLE9BVk87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBY0ZQLE9BQU9RLE9BQVAsRUFkRTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU5ULEdBQU07QUFBQSxFQUFOLENBQUo7O0FBb0JBLFFBQU8sZ0JBQU0sY0FBS0EsR0FBTCxFQUFXRixNQUFYLENBQU4sQ0FBUDtBQUVBIiwiZmlsZSI6InRlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgfSBmcm9tICcuL2l0ZXInIDtcbmltcG9ydCB7IGxpc3QgfSBmcm9tICcuL2xpc3QnIDtcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL21hcC9tYXAnIDtcblxuaW1wb3J0IGRlcXVlIGZyb20gJ2F1cmVvb21zLWpzLWNvbGxlY3Rpb25zLWRlcXVlJyA7XG5cbi8qKlxuICogUmV0dXJucyA8Y29kZT5uPC9jb2RlPiBjb3BpZXMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlLiBOb3RlIHRoYXQgaWYgdGhlIGlucHV0XG4gKiBpdGVyYWJsZSBpcyBhbiBpdGVyYXRvciwgdGhlbiBpdCBtdXN0IGJlIGRpc2NhcmRlZCBieSB0aGUgY2FsbGVyIGFmdGVyXG4gKiBjYWxsaW5nIHRlZS5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiBjb3BpZXMgdG8gbWFrZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcltdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVlICggaXRlcmFibGUgLCBuICkge1xuXG5cdGxldCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdGxldCBjb3BpZXMgPSBbIF0gO1xuXG5cdHdoaWxlICggbiAtLT4gMCApIGNvcGllcy5wdXNoKCBkZXF1ZSggKSApIDtcblxuXHRsZXQgZ2VuID0gZnVuY3Rpb24qICggbXljb3B5ICkge1xuXG5cdFx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0XHRpZiAoIG15Y29weS5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRcdFx0bGV0IGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCkgO1xuXG5cdFx0XHRcdGlmICggY3VycmVudC5kb25lICkgcmV0dXJuIDtcblxuXHRcdFx0XHRmb3IgKCBsZXQgY29weSBvZiBjb3BpZXMgKSBjb3B5LmFwcGVuZCggY3VycmVudC52YWx1ZSApIDtcblxuXHRcdFx0fVxuXG5cdFx0XHR5aWVsZCBteWNvcHkucG9wbGVmdCggKSA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0cmV0dXJuIGxpc3QoIG1hcCggZ2VuICwgY29waWVzICkgKSA7XG5cbn1cbiJdfQ==