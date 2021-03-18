/**
 * Yields elements of the input iterable in reverse order.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator} - The input iterable, reversed.
 */
export default function* reversed(iterable) {
	const buffer = [];

	for (const item of iterable) {
		buffer.push(item);
	}

	// Caching length is believed to be faster

	let jz = buffer.length;

	for (; jz; --jz) {
		yield buffer.pop();
	}
}
