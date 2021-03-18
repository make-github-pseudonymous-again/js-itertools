/**
 * Applies the accumulator function iteratively on the last return value of the
 * accumulator and the next value in the input iterable. The initial value is
 * the initializer parameter.
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 0 ) ; // returns 45
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Function} accumulator - The accumulator, a 2-ary function.
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} initializer - The initial value of the reduction.
 * @returns {Object} - The reduction of the elements of <code>iterable</code>.
 */
export default function _reduce(accumulator, iterable, initializer) {
	for (const item of iterable) {
		initializer = accumulator(initializer, item);
	}

	return initializer;
}
