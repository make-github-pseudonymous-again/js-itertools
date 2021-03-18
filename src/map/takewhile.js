/**
 * Output elements of the input iterable while the current element satisfies the
 * input predicate.
 *
 * @param {Function} predicate - The input predicate.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
export default function* takewhile(predicate, iterable) {
	for (const item of iterable) {
		if (!predicate(item)) {
			return;
		}

		yield item;
	}
}
