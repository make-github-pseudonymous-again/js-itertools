'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.permutations = permutations;

var _ = require('..');

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
function* permutations(iterable, r) {

	let pool = (0, _.list)(iterable);

	let len = pool.length;

	if (r > len) return;

	let indices = (0, _.list)((0, _.range)(0, len, 1));
	let cycles = (0, _.list)((0, _.range)(len, len - r, -1));

	yield (0, _.list)((0, _.pick)(pool, (0, _.head)(indices, r)));

	if (r === 0 || len === 0) return;

	while (true) {

		let i = r;

		while (i--) {

			--cycles[i];

			if (cycles[i] === 0) {

				// could be costly
				indices.push(indices.splice(i, 1)[0]);

				cycles[i] = len - i;
			} else {

				let j = cycles[i];

				[indices[i], indices[len - j]] = [indices[len - j], indices[i]];

				yield (0, _.list)((0, _.pick)(pool, (0, _.head)(indices, r)));
				break;
			}
		}

		if (i === -1) return;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvcGVybXV0YXRpb25zLmpzIl0sIm5hbWVzIjpbInBlcm11dGF0aW9ucyIsIml0ZXJhYmxlIiwiciIsInBvb2wiLCJsZW4iLCJsZW5ndGgiLCJpbmRpY2VzIiwiY3ljbGVzIiwiaSIsInB1c2giLCJzcGxpY2UiLCJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQWtCaUJBLFksR0FBQUEsWTs7QUFsQmpCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFVBQVVBLFlBQVYsQ0FBeUJDLFFBQXpCLEVBQW9DQyxDQUFwQyxFQUF3Qzs7QUFFOUMsS0FBSUMsT0FBTyxZQUFNRixRQUFOLENBQVg7O0FBRUEsS0FBSUcsTUFBTUQsS0FBS0UsTUFBZjs7QUFFQSxLQUFLSCxJQUFJRSxHQUFULEVBQWU7O0FBRWYsS0FBSUUsVUFBVSxZQUFNLGFBQU8sQ0FBUCxFQUFXRixHQUFYLEVBQWlCLENBQWpCLENBQU4sQ0FBZDtBQUNBLEtBQUlHLFNBQVMsWUFBTSxhQUFPSCxHQUFQLEVBQWFBLE1BQU1GLENBQW5CLEVBQXVCLENBQUMsQ0FBeEIsQ0FBTixDQUFiOztBQUVBLE9BQU0sWUFBTSxZQUFNQyxJQUFOLEVBQWEsWUFBTUcsT0FBTixFQUFnQkosQ0FBaEIsQ0FBYixDQUFOLENBQU47O0FBRUEsS0FBS0EsTUFBTSxDQUFOLElBQVdFLFFBQVEsQ0FBeEIsRUFBNEI7O0FBRTVCLFFBQVEsSUFBUixFQUFlOztBQUVkLE1BQUlJLElBQUlOLENBQVI7O0FBRUEsU0FBUU0sR0FBUixFQUFjOztBQUViLEtBQUVELE9BQU9DLENBQVAsQ0FBRjs7QUFFQSxPQUFLRCxPQUFPQyxDQUFQLE1BQWMsQ0FBbkIsRUFBdUI7O0FBRXRCO0FBQ0FGLFlBQVFHLElBQVIsQ0FBY0gsUUFBUUksTUFBUixDQUFnQkYsQ0FBaEIsRUFBb0IsQ0FBcEIsRUFBd0IsQ0FBeEIsQ0FBZDs7QUFFQUQsV0FBT0MsQ0FBUCxJQUFZSixNQUFNSSxDQUFsQjtBQUVBLElBUEQsTUFTSzs7QUFFSixRQUFJRyxJQUFJSixPQUFPQyxDQUFQLENBQVI7O0FBRUEsS0FBRUYsUUFBUUUsQ0FBUixDQUFGLEVBQWVGLFFBQVFGLE1BQU1PLENBQWQsQ0FBZixJQUFvQyxDQUFFTCxRQUFRRixNQUFNTyxDQUFkLENBQUYsRUFBcUJMLFFBQVFFLENBQVIsQ0FBckIsQ0FBcEM7O0FBRUEsVUFBTSxZQUFNLFlBQU1MLElBQU4sRUFBYSxZQUFNRyxPQUFOLEVBQWdCSixDQUFoQixDQUFiLENBQU4sQ0FBTjtBQUNBO0FBRUE7QUFFRDs7QUFFRCxNQUFLTSxNQUFNLENBQUMsQ0FBWixFQUFnQjtBQUVoQjtBQUVEIiwiZmlsZSI6InBlcm11dGF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCByYW5nZSAsIGhlYWQgLCBwaWNrIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBZaWVsZHMgYWxsIHBlcm11dGF0aW9ucyBvZiBlYWNoIHBvc3NpYmxlIGNob2ljZSBvZiA8Y29kZT5yPC9jb2RlPiBlbGVtZW50c1xuICogb2YgdGhlIGlucHV0IGl0ZXJhYmxlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBQiBBQyBBRCBCQSBCQyBCRCBDQSBDQiBDRCBEQSBEQiBEQ1xuICogcGVybXV0YXRpb25zKCdBQkNEJywgMikgO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyAwMTIgMDIxIDEwMiAxMjAgMjAxIDIxMFxuICogcGVybXV0YXRpb25zKHJhbmdlKDMpLCAzKSA7XG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcGFyYW0ge051bWJlcn0gciAtIFRoZSBzaXplIG9mIHRoZSBwZXJtdXRhdGlvbnMgdG8gZ2VuZXJhdGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogcGVybXV0YXRpb25zICggaXRlcmFibGUgLCByICkge1xuXG5cdGxldCBwb29sID0gbGlzdCggaXRlcmFibGUgKSA7XG5cblx0bGV0IGxlbiA9IHBvb2wubGVuZ3RoIDtcblxuXHRpZiAoIHIgPiBsZW4gKSByZXR1cm4gO1xuXG5cdGxldCBpbmRpY2VzID0gbGlzdCggcmFuZ2UoIDAgLCBsZW4gLCAxICkgKSA7XG5cdGxldCBjeWNsZXMgPSBsaXN0KCByYW5nZSggbGVuICwgbGVuIC0gciAsIC0xICkgKSA7XG5cblx0eWllbGQgbGlzdCggcGljayggcG9vbCAsIGhlYWQoIGluZGljZXMgLCByICkgKSApIDtcblxuXHRpZiAoIHIgPT09IDAgfHwgbGVuID09PSAwICkgcmV0dXJuIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgaSA9IHIgO1xuXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cblx0XHRcdC0tY3ljbGVzW2ldIDtcblxuXHRcdFx0aWYgKCBjeWNsZXNbaV0gPT09IDAgKSB7XG5cblx0XHRcdFx0Ly8gY291bGQgYmUgY29zdGx5XG5cdFx0XHRcdGluZGljZXMucHVzaCggaW5kaWNlcy5zcGxpY2UoIGkgLCAxIClbMF0gKSA7XG5cblx0XHRcdFx0Y3ljbGVzW2ldID0gbGVuIC0gaSA7XG5cblx0XHRcdH1cblxuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0bGV0IGogPSBjeWNsZXNbaV0gO1xuXG5cdFx0XHRcdFsgaW5kaWNlc1tpXSAsIGluZGljZXNbbGVuIC0gal0gXSA9IFsgaW5kaWNlc1tsZW4gLSBqXSAsIGluZGljZXNbaV0gXSA7XG5cblx0XHRcdFx0eWllbGQgbGlzdCggcGljayggcG9vbCAsIGhlYWQoIGluZGljZXMgLCByICkgKSApIDtcblx0XHRcdFx0YnJlYWsgO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIGkgPT09IC0xICkgcmV0dXJuIDtcblxuXHR9XG5cbn1cbiJdfQ==