import iter from '../base/iter.js';

/**
 * Drop elements of the input iterable while the current element satisfies the
 * input predicate.
 *
 * @param {Function} predicate - The input predicate.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
export default function* dropwhile(predicate, iterable) {
	const iterator = iter(iterable);

	for (const item of iterator) {
		if (predicate(item)) {
			continue;
		}

		// Equivalent to return chain( [ [ item ] , iterator ] ) ;

		yield item;

		yield* iterator;

		return;
	}
}
