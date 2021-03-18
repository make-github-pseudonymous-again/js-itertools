import _drop from './_drop.js';
import _tail from './_tail.js';

/**
 * Drops the first <code>n</code> values of the input iterable.
 * If <code>n</code> is negative, behaves like <code>{@link tail}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 3 , 4 ]
 * list( drop( range( 5 ) , 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of values to drop.
 * @returns {IterableIterator} - The remaining values of the input iterable.
 */
export default function drop(iterable, n) {
	return n < 0 ? _tail(iterable, -n) : _drop(iterable, n);
}
