import _drop from './_drop.js';
import _tail from './_tail.js';

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
 * @returns {IterableIterator} - The last <code>n</code> values of the input iterable.
 */
export default function tail(iterable, n) {
	return n < 0 ? _drop(iterable, -n) : _tail(iterable, n);
}
