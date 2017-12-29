'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.combinationswithrepetition = combinationswithrepetition;

var _ = require('..');

/**
 * Yields all combinations, with repetitions, of each possible choice of
 * <code>r</code> elements of the input iterable.
 *
 * @example
 * // A B C
 * combinationswithrepetition('ABC', 1)
 *
 * @example
 * // 00 01 02 11 12 22
 * combinationswithrepetition(range(3), 2)
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} r - The size of the combinations to generate.
 * @returns {Iterator}
 */

function* combinationswithrepetition(iterable, r) {

	let pool = (0, _.list)(iterable);
	let len = pool.length;

	if (len === 0 && r > 0) return;

	let indices = (0, _.list)((0, _.nrepeat)(0, r));

	yield (0, _.list)((0, _.pick)(pool, indices));

	while (true) {

		let i = r - 1;

		while (true) {

			if (i < 0) return;

			if (indices[i] !== len - 1) {

				let pivot = ++indices[i];

				for (++i; i < r; ++i) indices[i] = pivot;

				break;
			}

			--i;
		}

		yield (0, _.list)((0, _.pick)(pool, indices));
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY29tYmluYXRpb25zd2l0aHJlcGV0aXRpb24uanMiXSwibmFtZXMiOlsiY29tYmluYXRpb25zd2l0aHJlcGV0aXRpb24iLCJpdGVyYWJsZSIsInIiLCJwb29sIiwibGVuIiwibGVuZ3RoIiwiaW5kaWNlcyIsImkiLCJwaXZvdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFtQmlCQSwwQixHQUFBQSwwQjs7QUFuQmpCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxVQUFVQSwwQkFBVixDQUF1Q0MsUUFBdkMsRUFBa0RDLENBQWxELEVBQXNEOztBQUU1RCxLQUFJQyxPQUFPLFlBQU1GLFFBQU4sQ0FBWDtBQUNBLEtBQUlHLE1BQU1ELEtBQUtFLE1BQWY7O0FBRUEsS0FBS0QsUUFBUSxDQUFSLElBQWFGLElBQUksQ0FBdEIsRUFBMEI7O0FBRTFCLEtBQUlJLFVBQVUsWUFBTSxlQUFTLENBQVQsRUFBYUosQ0FBYixDQUFOLENBQWQ7O0FBRUEsT0FBTSxZQUFNLFlBQU1DLElBQU4sRUFBYUcsT0FBYixDQUFOLENBQU47O0FBRUEsUUFBUSxJQUFSLEVBQWU7O0FBRWQsTUFBSUMsSUFBSUwsSUFBSSxDQUFaOztBQUVBLFNBQVEsSUFBUixFQUFlOztBQUVkLE9BQUtLLElBQUksQ0FBVCxFQUFhOztBQUViLE9BQUtELFFBQVFDLENBQVIsTUFBZUgsTUFBTSxDQUExQixFQUE4Qjs7QUFFN0IsUUFBSUksUUFBUSxFQUFFRixRQUFRQyxDQUFSLENBQWQ7O0FBRUEsU0FBTSxFQUFFQSxDQUFSLEVBQVlBLElBQUlMLENBQWhCLEVBQW9CLEVBQUVLLENBQXRCLEVBQTBCRCxRQUFRQyxDQUFSLElBQWFDLEtBQWI7O0FBRTFCO0FBRUE7O0FBRUQsS0FBRUQsQ0FBRjtBQUVBOztBQUVELFFBQU0sWUFBTSxZQUFNSixJQUFOLEVBQWFHLE9BQWIsQ0FBTixDQUFOO0FBRUE7QUFFRCIsImZpbGUiOiJjb21iaW5hdGlvbnN3aXRocmVwZXRpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCBucmVwZWF0ICwgcGljayB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWWllbGRzIGFsbCBjb21iaW5hdGlvbnMsIHdpdGggcmVwZXRpdGlvbnMsIG9mIGVhY2ggcG9zc2libGUgY2hvaWNlIG9mXG4gKiA8Y29kZT5yPC9jb2RlPiBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEEgQiBDXG4gKiBjb21iaW5hdGlvbnN3aXRocmVwZXRpdGlvbignQUJDJywgMSlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gMDAgMDEgMDIgMTEgMTIgMjJcbiAqIGNvbWJpbmF0aW9uc3dpdGhyZXBldGl0aW9uKHJhbmdlKDMpLCAyKVxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgLSBUaGUgc2l6ZSBvZiB0aGUgY29tYmluYXRpb25zIHRvIGdlbmVyYXRlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogY29tYmluYXRpb25zd2l0aHJlcGV0aXRpb24gKCBpdGVyYWJsZSAsIHIgKSB7XG5cblx0bGV0IHBvb2wgPSBsaXN0KCBpdGVyYWJsZSApIDtcblx0bGV0IGxlbiA9IHBvb2wubGVuZ3RoIDtcblxuXHRpZiAoIGxlbiA9PT0gMCAmJiByID4gMCApIHJldHVybiA7XG5cblx0bGV0IGluZGljZXMgPSBsaXN0KCBucmVwZWF0KCAwICwgciApICkgO1xuXG5cdHlpZWxkIGxpc3QoIHBpY2soIHBvb2wgLCBpbmRpY2VzICkgKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0bGV0IGkgPSByIC0gMSA7XG5cblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdGlmICggaSA8IDAgKSByZXR1cm4gO1xuXG5cdFx0XHRpZiAoIGluZGljZXNbaV0gIT09IGxlbiAtIDEgKSB7XG5cblx0XHRcdFx0bGV0IHBpdm90ID0gKytpbmRpY2VzW2ldIDtcblxuXHRcdFx0XHRmb3IgKCArK2kgOyBpIDwgciA7ICsraSApIGluZGljZXNbaV0gPSBwaXZvdCA7XG5cblx0XHRcdFx0YnJlYWsgO1xuXG5cdFx0XHR9XG5cblx0XHRcdC0taSA7XG5cblx0XHR9XG5cblx0XHR5aWVsZCBsaXN0KCBwaWNrKCBwb29sICwgaW5kaWNlcyApICkgO1xuXG5cdH1cblxufVxuIl19