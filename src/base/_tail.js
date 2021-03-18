import assert from 'assert';
import {deque} from '@aureooms/js-collections-deque';

/**
 * Returns the last <code>n</code> values of the input iterable in an array.
 *
 * @example
 * // returns [ 3 , 4 ]
 * list( _tail( range( 5 ) , 2 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The nonnegative number of values to include in the output.
 * @returns {IterableIterator} - The last <code>n</code> values of the input iterable.
 */
export default function* _tail(iterable, n) {
	assert(Number.isInteger(n) && n >= 0);
	yield* deque(iterable, n);
}
