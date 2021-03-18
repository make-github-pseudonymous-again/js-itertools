import _trunc from './_trunc.js';
import _take from './_take.js';

/**
 * Yields the first <code>n</code> elements of the input iterable. If
 * <code>n</code> is negative, behaves like <code>{@link trunc}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 0 , 1 , 2 ]
 * list( take( range( 5 ) , 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to include in the output.
 * @returns {IterableIterator} - The first <code>n</code> elements of the input iterable.
 */
export default function take(iterable, n) {
	return n < 0 ? _trunc(iterable, -n) : _take(iterable, n);
}
