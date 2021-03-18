import assert from 'assert';
import iter from './iter.js';

/**
 * Yields the first <code>n</code> elements of the input iterable.
 *
 * @example
 * // returns [ 0 , 1 , 2 ]
 * list( _take( range( 5 ) , 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The nonnegative number of elements to include in the output.
 * @returns {IterableIterator} - The first <code>n</code> elements of the input iterable.
 */
export default function* _take(iterable, n) {
	assert(Number.isInteger(n) && n >= 0);

	const iterator = iter(iterable);

	while (n-- > 0) {
		const current = iterator.next();

		if (current.done) {
			return;
		}

		yield current.value;
	}
}
