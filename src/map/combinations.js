import list from '../base/list.js';
import pick from '../base/pick.js';
import range from '../base/range.js';

/**
 * Yields all combinations of each possible choice of <code>r</code> elements
 * of the input iterable.
 *
 * @example
 * // AB AC AD BC BD CD
 * combinations('ABCD', 2)
 *
 * @example
 * // 012 013 023 123
 * combinations(range(4), 3)
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} r - The size of the combinations to generate.
 * @returns {IterableIterator}
 */
export default function* combinations(iterable, r) {
	const pool = list(iterable);
	const length = pool.length;

	if (r > length) {
		return;
	}

	const indices = list(range(0, r, 1));

	yield list(pick(pool, indices));

	while (true) {
		let i = r - 1;

		// eslint-disable-next-line no-constant-condition
		while (true) {
			if (i < 0) {
				return;
			}

			if (indices[i] !== i + length - r) {
				let pivot = ++indices[i];

				for (++i; i < r; ++i) {
					indices[i] = ++pivot;
				}

				break;
			}

			--i;
		}

		yield list(pick(pool, indices));
	}
}
