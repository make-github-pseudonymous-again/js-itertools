import _take from './_take.js';
import _trunc from './_trunc.js';

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
 * @returns {IterableIterator}
 */
export default function trunc(iterable, n) {
	return n < 0 ? _take(iterable, -n) : _trunc(iterable, n);
}
