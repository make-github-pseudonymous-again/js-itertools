import deque from '@aureooms/js-collections-deque';

import {drop} from './drop.js';

/**
 * Returns the last <code>n</code> values of the input iterable in an array.
 * If <code>n</code> is negative, behaves like <code>{@link drop}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 3 , 4 ]
 * list( tail( range( 5 ) , 2 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of values to include in the output.
 * @returns {Iterator} - The last <code>n</code> values of the input iterable.
 */
export function* tail(iterable, n) {
	if (n < 0) {
		yield* drop(iterable, -n);
		return;
	}

	yield* deque(iterable, n);
}
