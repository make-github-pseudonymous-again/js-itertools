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

var _marked = /*#__PURE__*/regeneratorRuntime.mark(trunc);

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
	}, _marked, this, [[18, 30, 34, 42], [35,, 37, 41]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RydW5jLmpzIl0sIm5hbWVzIjpbInRydW5jIiwiaXRlcmFibGUiLCJuIiwiaXRlcmF0b3IiLCJidWZmZXIiLCJlIiwibmV4dCIsImRvbmUiLCJhcHBlbmQiLCJ2YWx1ZSIsInBvcGxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBa0JpQkEsSyxHQUFBQSxLOztBQWxCakI7Ozs7QUFFQTs7QUFDQTs7OzttREFlaUJBLEs7O0FBYmpCOzs7Ozs7Ozs7Ozs7O0FBYU8sU0FBVUEsS0FBVixDQUFrQkMsUUFBbEIsRUFBNkJDLENBQTdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVEQSxJQUFJLENBRkg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUNBR0UsZ0JBQU1ELFFBQU4sRUFBaUIsQ0FBQ0MsQ0FBbEIsQ0FIRjs7QUFBQTtBQUFBOztBQUFBO0FBQUEsV0FPREEsTUFBTSxDQVBMO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1DQVFFRCxRQVJGOztBQUFBO0FBQUE7O0FBQUE7QUFZQUUsYUFaQSxHQVlXLGdCQUFNRixRQUFOLENBWlg7QUFjQUcsV0FkQSxHQWNTLGtDQUFPLElBQVAsRUFBY0YsQ0FBZCxDQWRUOztBQUFBO0FBQUEsV0FnQkVBLE1BQU0sQ0FoQlI7QUFBQTtBQUFBO0FBQUE7O0FBaUJDRyxNQWpCRCxHQWlCS0YsU0FBU0csSUFBVCxFQWpCTDs7QUFBQSxVQWtCQUQsRUFBRUUsSUFsQkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFtQkxILFlBQU9JLE1BQVAsQ0FBZUgsRUFBRUksS0FBakI7QUFuQks7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBc0JlTixRQXRCZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXNCTU0sVUF0Qk47QUFBQTtBQUFBLFlBdUJDTCxPQUFPTSxPQUFQLEVBdkJEOztBQUFBO0FBd0JMTixZQUFPSSxNQUFQLENBQWVDLEtBQWY7O0FBeEJLO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoidHJ1bmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVxdWUgZnJvbSAnQGF1cmVvb21zL2pzLWNvbGxlY3Rpb25zLWRlcXVlJyA7XG5cbmltcG9ydCB7IGl0ZXIgfSBmcm9tICcuL2l0ZXInIDtcbmltcG9ydCB7IHRha2UgfSBmcm9tICcuL3Rha2UnIDtcblxuLyoqXG4gKiBZaWVsZHMgYWxsIGVsZW1lbnRzIG9mIHRoZSBpdGVyYWJsZSBleGNlcHQgdGhlIGxhc3QgPGNvZGU+bjwvY29kZT4gb25lcy4gSWZcbiAqIDxjb2RlPm48L2NvZGU+IGlzIG5lZ2F0aXZlLCBiZWhhdmVzIGxpa2UgPGNvZGU+e0BsaW5rIHRha2V9KCBpdGVyYWJsZSwgLW5cbiAqICk8L2NvZGU+LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsgMCAsIDEgLCAyIF1cbiAqIGxpc3QoIHRydW5jKCByYW5nZSggNSApICwgMiApICkgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgb3V0cHV0LlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHRydW5jICggaXRlcmFibGUgLCBuICkge1xuXG5cdGlmICggbiA8IDAgKSB7XG5cdFx0eWllbGQqIHRha2UoIGl0ZXJhYmxlICwgLW4gKSA7XG5cdFx0cmV0dXJuIDtcblx0fVxuXG5cdGlmICggbiA9PT0gMCApIHtcblx0XHR5aWVsZCogaXRlcmFibGUgO1xuXHRcdHJldHVybiA7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdGNvbnN0IGJ1ZmZlciA9IGRlcXVlKCBudWxsICwgbiApIDtcblxuXHR3aGlsZSAoIG4gLS0+IDAgKSB7XG5cdFx0Y29uc3QgZSA9IGl0ZXJhdG9yLm5leHQoICkgO1xuXHRcdGlmICggZS5kb25lICkgcmV0dXJuIDtcblx0XHRidWZmZXIuYXBwZW5kKCBlLnZhbHVlICkgO1xuXHR9XG5cblx0Zm9yICggY29uc3QgdmFsdWUgb2YgaXRlcmF0b3IgKSB7XG5cdFx0eWllbGQgYnVmZmVyLnBvcGxlZnQoKSA7XG5cdFx0YnVmZmVyLmFwcGVuZCggdmFsdWUgKSA7XG5cdH1cblxufVxuIl19