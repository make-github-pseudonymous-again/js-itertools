import _sum from './_sum.js';

/**
 * Sums the elements of the input iterable. An optional initializer parameter
 * allows to start the sum of the elements at a chosen value. The default value
 * for the initializer parameter is <code>0</code>.
 *
 * @example
 * sum( range( 10 ) ) ; // returns 45
 *
 * @example
 * sum( range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} [initializer=0] - The initial value of the sum.
 * @returns {Object} - The sum of the initializer with the elements of
 * <code>iterable</code>.
 *
 */
export default function sum(iterable, initializer = 0) {
	return _sum(iterable, initializer);
}
