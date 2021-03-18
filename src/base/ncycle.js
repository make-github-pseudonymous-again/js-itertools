/**
 * Same as {@link cycle} but only cycles a limited number of times.
 *
 * @example
 * // returns [0,1,0,1,0,1,0,1]
 * list(ncycle(range(2),4)) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of times to cycle through the input iterable.
 * @returns {Iterator}
 *
 */
export default function* ncycle(iterable, n) {
	const buffer = [];

	for (const item of iterable) {
		yield item;
		buffer.push(item);
	}

	if (buffer.length === 0) {
		return;
	}

	while (--n > 0) {
		yield* buffer;
	}
}
