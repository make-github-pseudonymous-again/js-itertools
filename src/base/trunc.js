import deque from '@aureooms/js-collections-deque';

import {iter} from './iter.js';
import {take} from './take.js';

/**
 * Yields all elements of the iterable except the last <code>n</code> ones. If
 * <code>n</code> is negative, behaves like <code>{@link take}( iterable, -n
 * )</code>.
 *
 * @example
 * // returns [ 0 , 1 , 2 ]
 * list( trunc( range( 5 ) , 2 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to exclude from the output.
 * @returns {Iterator}
 */
export function* trunc(iterable, n) {
	if (n < 0) {
		yield* take(iterable, -n);
		return;
	}

	if (n === 0) {
		yield* iterable;
		return;
	}

	const iterator = iter(iterable);

	const buffer = deque(null, n);

	while (n-- > 0) {
		const event = iterator.next();
		if (event.done) {
			return;
		}

		buffer.append(event.value);
	}

	for (const value of iterator) {
		yield buffer.popleft();
		buffer.append(value);
	}
}
