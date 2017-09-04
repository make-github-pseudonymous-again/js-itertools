'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.permutations = permutations;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(permutations);

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
	}, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcGVybXV0YXRpb25zLmpzIl0sIm5hbWVzIjpbInBlcm11dGF0aW9ucyIsIml0ZXJhYmxlIiwiciIsInBvb2wiLCJsZW4iLCJsZW5ndGgiLCJpbmRpY2VzIiwiY3ljbGVzIiwiaSIsInB1c2giLCJzcGxpY2UiLCJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQWtCaUJBLFksR0FBQUEsWTs7QUFsQmpCOzttREFrQmlCQSxZOztBQWhCakI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sU0FBVUEsWUFBVixDQUF5QkMsUUFBekIsRUFBb0NDLENBQXBDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRkMsU0FGRSxHQUVLLFlBQU1GLFFBQU4sQ0FGTDtBQUlGRyxRQUpFLEdBSUlELEtBQUtFLE1BSlQ7O0FBQUEsV0FNREgsSUFBSUUsR0FOSDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVFGRSxZQVJFLEdBUVEsWUFBTSxhQUFPLENBQVAsRUFBV0YsR0FBWCxFQUFpQixDQUFqQixDQUFOLENBUlI7QUFTRkcsV0FURSxHQVNPLFlBQU0sYUFBT0gsR0FBUCxFQUFhQSxNQUFNRixDQUFuQixFQUF1QixDQUFDLENBQXhCLENBQU4sQ0FUUDtBQUFBO0FBQUEsWUFXQSxZQUFNLFlBQU1DLElBQU4sRUFBYSxZQUFNRyxPQUFOLEVBQWdCSixDQUFoQixDQUFiLENBQU4sQ0FYQTs7QUFBQTtBQUFBLFdBYURBLE1BQU0sQ0FBTixJQUFXRSxRQUFRLENBYmxCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsVUFlRSxJQWZGO0FBQUE7QUFBQTtBQUFBOztBQWlCREksTUFqQkMsR0FpQkdOLENBakJIOztBQUFBO0FBQUEsVUFtQkdNLEdBbkJIO0FBQUE7QUFBQTtBQUFBOztBQXFCSixPQUFFRCxPQUFPQyxDQUFQLENBQUY7O0FBckJJLFdBdUJDRCxPQUFPQyxDQUFQLE1BQWMsQ0F2QmY7QUFBQTtBQUFBO0FBQUE7O0FBeUJIO0FBQ0FGLGFBQVFHLElBQVIsQ0FBY0gsUUFBUUksTUFBUixDQUFnQkYsQ0FBaEIsRUFBb0IsQ0FBcEIsRUFBd0IsQ0FBeEIsQ0FBZDs7QUFFQUQsWUFBT0MsQ0FBUCxJQUFZSixNQUFNSSxDQUFsQjs7QUE1Qkc7QUFBQTs7QUFBQTtBQWtDQ0csTUFsQ0QsR0FrQ0tKLE9BQU9DLENBQVAsQ0FsQ0w7QUFBQSxZQW9DaUMsQ0FBRUYsUUFBUUYsTUFBTU8sQ0FBZCxDQUFGLEVBQXFCTCxRQUFRRSxDQUFSLENBQXJCLENBcENqQztBQW9DREYsYUFBUUUsQ0FBUixDQXBDQztBQW9DWUYsYUFBUUYsTUFBTU8sQ0FBZCxDQXBDWjtBQUFBO0FBQUEsWUFzQ0csWUFBTSxZQUFNUixJQUFOLEVBQWEsWUFBTUcsT0FBTixFQUFnQkosQ0FBaEIsQ0FBYixDQUFOLENBdENIOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsV0E2Q0FNLE1BQU0sQ0FBQyxDQTdDUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicGVybXV0YXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIHJhbmdlICwgaGVhZCAsIHBpY2sgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIFlpZWxkcyBhbGwgcGVybXV0YXRpb25zIG9mIGVhY2ggcG9zc2libGUgY2hvaWNlIG9mIDxjb2RlPnI8L2NvZGU+IGVsZW1lbnRzXG4gKiBvZiB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFCIEFDIEFEIEJBIEJDIEJEIENBIENCIENEIERBIERCIERDXG4gKiBwZXJtdXRhdGlvbnMoJ0FCQ0QnLCAyKSA7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIDAxMiAwMjEgMTAyIDEyMCAyMDEgMjEwXG4gKiBwZXJtdXRhdGlvbnMocmFuZ2UoMyksIDMpIDtcbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSByIC0gVGhlIHNpemUgb2YgdGhlIHBlcm11dGF0aW9ucyB0byBnZW5lcmF0ZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBwZXJtdXRhdGlvbnMgKCBpdGVyYWJsZSAsIHIgKSB7XG5cblx0bGV0IHBvb2wgPSBsaXN0KCBpdGVyYWJsZSApIDtcblxuXHRsZXQgbGVuID0gcG9vbC5sZW5ndGggO1xuXG5cdGlmICggciA+IGxlbiApIHJldHVybiA7XG5cblx0bGV0IGluZGljZXMgPSBsaXN0KCByYW5nZSggMCAsIGxlbiAsIDEgKSApIDtcblx0bGV0IGN5Y2xlcyA9IGxpc3QoIHJhbmdlKCBsZW4gLCBsZW4gLSByICwgLTEgKSApIDtcblxuXHR5aWVsZCBsaXN0KCBwaWNrKCBwb29sICwgaGVhZCggaW5kaWNlcyAsIHIgKSApICkgO1xuXG5cdGlmICggciA9PT0gMCB8fCBsZW4gPT09IDAgKSByZXR1cm4gO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGxldCBpID0gciA7XG5cblx0XHR3aGlsZSAoIGktLSApIHtcblxuXHRcdFx0LS1jeWNsZXNbaV0gO1xuXG5cdFx0XHRpZiAoIGN5Y2xlc1tpXSA9PT0gMCApIHtcblxuXHRcdFx0XHQvLyBjb3VsZCBiZSBjb3N0bHlcblx0XHRcdFx0aW5kaWNlcy5wdXNoKCBpbmRpY2VzLnNwbGljZSggaSAsIDEgKVswXSApIDtcblxuXHRcdFx0XHRjeWNsZXNbaV0gPSBsZW4gLSBpIDtcblxuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRsZXQgaiA9IGN5Y2xlc1tpXSA7XG5cblx0XHRcdFx0WyBpbmRpY2VzW2ldICwgaW5kaWNlc1tsZW4gLSBqXSBdID0gWyBpbmRpY2VzW2xlbiAtIGpdICwgaW5kaWNlc1tpXSBdIDtcblxuXHRcdFx0XHR5aWVsZCBsaXN0KCBwaWNrKCBwb29sICwgaGVhZCggaW5kaWNlcyAsIHIgKSApICkgO1xuXHRcdFx0XHRicmVhayA7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggaSA9PT0gLTEgKSByZXR1cm4gO1xuXG5cdH1cblxufVxuIl19