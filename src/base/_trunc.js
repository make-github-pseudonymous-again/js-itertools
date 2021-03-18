import assert from 'assert';
import {deque} from '@aureooms/js-collections-deque';

import iter from './iter.js';

/**
 * Yields all elements of the iterable except the last <code>n</code> ones.
 *
 * @example
 * // returns [ 0 , 1 , 2 ]
 * list( _trunc( range( 5 ) , 2 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The nonnegative number of elements to exclude from the output.
 * @returns {IterableIterator}
 */
export default function* _trunc(iterable, n) {
	assert(Number.isInteger(n) && n >= 0);

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
