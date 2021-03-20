import iter from '../base/iter.js';

/**
 * Yields elements of the input iterable by grouping them into tuples
 * consecutive elements from the same equivalence class.
 *
 * @example
 * // A B C D A B
 * list( map( ( [ k , g ] ) => k , group( x => x , 'AAAABBBCCDAABBB' ) ) )
 *
 * @example
 * // AAAA BBB CC D
 * list( map( ( [ k , g ] ) => list( g ) , group( x => x , 'AAAABBBCCD' ) ) )
 *
 * @param {Function} key - The function used to determine the equivalence class
 * of an element.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
export default function* group(key, iterable) {
	const iterator = iter(iterable);

	const first = iterator.next();

	if (first.done) {
		return;
	}

	let currval = first.value;
	let currkey = key(currval);

	const grouper = function* (tgtkey) {
		while (true) {
			yield currval;

			const event = iterator.next();
			if (event.done) {
				return;
			}

			currval = event.value;
			currkey = key(currval);

			if (currkey !== tgtkey) {
				return;
			}
		}
	};

	while (true) {
		const tgtkey = currkey;

		const g = grouper(tgtkey);

		yield [tgtkey, g];

		while (currkey === tgtkey) {
			const event = iterator.next();
			if (event.done) {
				return;
			}

			currval = event.value;
			currkey = key(currval);
		}
	}
}
