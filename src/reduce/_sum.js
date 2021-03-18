/**
 * Sums the elements of the input iterable. An optional initializer parameter
 * allows to start the sum of the elements at a chosen value.
 *
 * @example
 * _sum( range( 10 ) , 0 ) ; // returns 45
 *
 * @example
 * _sum( range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} initializer - The initial value of the sum.
 * @returns {Object} - The sum of the initializer with the elements of
 * <code>iterable</code>.
 *
 */
export default function _sum(iterable, initializer) {
	for (const item of iterable) {
		initializer += item;
	}

	return initializer;
}
