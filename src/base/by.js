import {iter} from './iter';
import {range} from './range';

/**
 * Yields elements of the input iterable by grouping them into tuples of a
 * given size.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The size of the yielded tuples.
 * @returns {Iterator}
 */
export function* by(iterable, n) {
	const iterator = iter(iterable);

	while (true) {
		const tuple = [];

		for (const i of range(n)) {
			const current = iterator.next();

			if (current.done) {
				if (i === 0) {
					return;
				}

				// eslint-disable-next-line no-unused-vars
				for (const j of range(n - i)) {
					tuple.push(undefined);
				}

				yield tuple;

				return;
			}

			tuple.push(current.value);
		}

		yield tuple;
	}
}
