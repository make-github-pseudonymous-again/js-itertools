/**
 * Returns the iterator for the input iterable.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
export default function iter(iterable) {
	return iterable[Symbol.iterator]();
}
