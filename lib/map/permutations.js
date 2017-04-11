'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.permutations = permutations;

var _ = require('..');

var _marked = [permutations].map(regeneratorRuntime.mark);

/**
 * Yields all permutations of each possible choice of <code>r</code> elements
 * of the input iterable.
 *
 * @example
 * // AB AC AD BA BC BD CA CB CD DA DB DC
 * permutations('ABCD', 2) ;
 *
 * @example
 * // 012 021 102 120 201 210
 * permutations(range(3), 3) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} r - The size of the permutations to generate.
 * @returns {Iterator}
 */
function permutations(iterable, r) {
	var pool, len, indices, cycles, i, j, _ref;

	return regeneratorRuntime.wrap(function permutations$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					pool = (0, _.list)(iterable);
					len = pool.length;

					if (!(r > len)) {
						_context.next = 4;
						break;
					}

					return _context.abrupt('return');

				case 4:
					indices = (0, _.list)((0, _.range)(0, len, 1));
					cycles = (0, _.list)((0, _.range)(len, len - r, -1));
					_context.next = 8;
					return (0, _.list)((0, _.pick)(pool, (0, _.head)(indices, r)));

				case 8:
					if (!(r === 0 || len === 0)) {
						_context.next = 10;
						break;
					}

					return _context.abrupt('return');

				case 10:
					if (!true) {
						_context.next = 32;
						break;
					}

					i = r;

				case 12:
					if (!i--) {
						_context.next = 28;
						break;
					}

					--cycles[i];

					if (!(cycles[i] === 0)) {
						_context.next = 19;
						break;
					}

					// could be costly
					indices.push(indices.splice(i, 1)[0]);

					cycles[i] = len - i;

					_context.next = 26;
					break;

				case 19:
					j = cycles[i];
					_ref = [indices[len - j], indices[i]];
					indices[i] = _ref[0];
					indices[len - j] = _ref[1];
					_context.next = 25;
					return (0, _.list)((0, _.pick)(pool, (0, _.head)(indices, r)));

				case 25:
					return _context.abrupt('break', 28);

				case 26:
					_context.next = 12;
					break;

				case 28:
					if (!(i === -1)) {
						_context.next = 30;
						break;
					}

					return _context.abrupt('return');

				case 30:
					_context.next = 10;
					break;

				case 32:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcGVybXV0YXRpb25zLmpzIl0sIm5hbWVzIjpbInBlcm11dGF0aW9ucyIsIml0ZXJhYmxlIiwiciIsInBvb2wiLCJsZW4iLCJsZW5ndGgiLCJpbmRpY2VzIiwiY3ljbGVzIiwiaSIsInB1c2giLCJzcGxpY2UiLCJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQWtCaUJBLFksR0FBQUEsWTs7QUFsQmpCOztlQWtCaUJBLFk7O0FBaEJqQjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxTQUFVQSxZQUFWLENBQXlCQyxRQUF6QixFQUFvQ0MsQ0FBcEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxTQUZFLEdBRUssWUFBTUYsUUFBTixDQUZMO0FBSUZHLFFBSkUsR0FJSUQsS0FBS0UsTUFKVDs7QUFBQSxXQU1ESCxJQUFJRSxHQU5IO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBUUZFLFlBUkUsR0FRUSxZQUFNLGFBQU8sQ0FBUCxFQUFXRixHQUFYLEVBQWlCLENBQWpCLENBQU4sQ0FSUjtBQVNGRyxXQVRFLEdBU08sWUFBTSxhQUFPSCxHQUFQLEVBQWFBLE1BQU1GLENBQW5CLEVBQXVCLENBQUMsQ0FBeEIsQ0FBTixDQVRQO0FBQUE7QUFBQSxZQVdBLFlBQU0sWUFBTUMsSUFBTixFQUFhLFlBQU1HLE9BQU4sRUFBZ0JKLENBQWhCLENBQWIsQ0FBTixDQVhBOztBQUFBO0FBQUEsV0FhREEsTUFBTSxDQUFOLElBQVdFLFFBQVEsQ0FibEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxVQWVFLElBZkY7QUFBQTtBQUFBO0FBQUE7O0FBaUJESSxNQWpCQyxHQWlCR04sQ0FqQkg7O0FBQUE7QUFBQSxVQW1CR00sR0FuQkg7QUFBQTtBQUFBO0FBQUE7O0FBcUJKLE9BQUVELE9BQU9DLENBQVAsQ0FBRjs7QUFyQkksV0F1QkNELE9BQU9DLENBQVAsTUFBYyxDQXZCZjtBQUFBO0FBQUE7QUFBQTs7QUF5Qkg7QUFDQUYsYUFBUUcsSUFBUixDQUFjSCxRQUFRSSxNQUFSLENBQWdCRixDQUFoQixFQUFvQixDQUFwQixFQUF3QixDQUF4QixDQUFkOztBQUVBRCxZQUFPQyxDQUFQLElBQVlKLE1BQU1JLENBQWxCOztBQTVCRztBQUFBOztBQUFBO0FBa0NDRyxNQWxDRCxHQWtDS0osT0FBT0MsQ0FBUCxDQWxDTDtBQUFBLFlBb0NpQyxDQUFFRixRQUFRRixNQUFNTyxDQUFkLENBQUYsRUFBcUJMLFFBQVFFLENBQVIsQ0FBckIsQ0FwQ2pDO0FBb0NERixhQUFRRSxDQUFSLENBcENDO0FBb0NZRixhQUFRRixNQUFNTyxDQUFkLENBcENaO0FBQUE7QUFBQSxZQXNDRyxZQUFNLFlBQU1SLElBQU4sRUFBYSxZQUFNRyxPQUFOLEVBQWdCSixDQUFoQixDQUFiLENBQU4sQ0F0Q0g7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQTZDQU0sTUFBTSxDQUFDLENBN0NQO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJwZXJtdXRhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgcmFuZ2UgLCBoZWFkICwgcGljayB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWWllbGRzIGFsbCBwZXJtdXRhdGlvbnMgb2YgZWFjaCBwb3NzaWJsZSBjaG9pY2Ugb2YgPGNvZGU+cjwvY29kZT4gZWxlbWVudHNcbiAqIG9mIHRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQUIgQUMgQUQgQkEgQkMgQkQgQ0EgQ0IgQ0QgREEgREIgRENcbiAqIHBlcm11dGF0aW9ucygnQUJDRCcsIDIpIDtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gMDEyIDAyMSAxMDIgMTIwIDIwMSAyMTBcbiAqIHBlcm11dGF0aW9ucyhyYW5nZSgzKSwgMykgO1xuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgLSBUaGUgc2l6ZSBvZiB0aGUgcGVybXV0YXRpb25zIHRvIGdlbmVyYXRlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHBlcm11dGF0aW9ucyAoIGl0ZXJhYmxlICwgciApIHtcblxuXHRsZXQgcG9vbCA9IGxpc3QoIGl0ZXJhYmxlICkgO1xuXG5cdGxldCBsZW4gPSBwb29sLmxlbmd0aCA7XG5cblx0aWYgKCByID4gbGVuICkgcmV0dXJuIDtcblxuXHRsZXQgaW5kaWNlcyA9IGxpc3QoIHJhbmdlKCAwICwgbGVuICwgMSApICkgO1xuXHRsZXQgY3ljbGVzID0gbGlzdCggcmFuZ2UoIGxlbiAsIGxlbiAtIHIgLCAtMSApICkgO1xuXG5cdHlpZWxkIGxpc3QoIHBpY2soIHBvb2wgLCBoZWFkKCBpbmRpY2VzICwgciApICkgKSA7XG5cblx0aWYgKCByID09PSAwIHx8IGxlbiA9PT0gMCApIHJldHVybiA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0bGV0IGkgPSByIDtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXG5cdFx0XHQtLWN5Y2xlc1tpXSA7XG5cblx0XHRcdGlmICggY3ljbGVzW2ldID09PSAwICkge1xuXG5cdFx0XHRcdC8vIGNvdWxkIGJlIGNvc3RseVxuXHRcdFx0XHRpbmRpY2VzLnB1c2goIGluZGljZXMuc3BsaWNlKCBpICwgMSApWzBdICkgO1xuXG5cdFx0XHRcdGN5Y2xlc1tpXSA9IGxlbiAtIGkgO1xuXG5cdFx0XHR9XG5cblx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdGxldCBqID0gY3ljbGVzW2ldIDtcblxuXHRcdFx0XHRbIGluZGljZXNbaV0gLCBpbmRpY2VzW2xlbiAtIGpdIF0gPSBbIGluZGljZXNbbGVuIC0gal0gLCBpbmRpY2VzW2ldIF0gO1xuXG5cdFx0XHRcdHlpZWxkIGxpc3QoIHBpY2soIHBvb2wgLCBoZWFkKCBpbmRpY2VzICwgciApICkgKSA7XG5cdFx0XHRcdGJyZWFrIDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBpID09PSAtMSApIHJldHVybiA7XG5cblx0fVxuXG59XG4iXX0=