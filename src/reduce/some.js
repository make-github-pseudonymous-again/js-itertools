/**
 * Returns true if at least some of the elements of the input iterable are
 * truthy.
 *
 * @example
 * some( repeat( true ) , 100 ) ; // returns true
 *
 * @example
 * some( repeat( false ) , 0 ) ; // returns true
 *
 * @example
 * some( repeat( false ) , 10 ) ; // loops forever
 *
 * @example
 * some( nrepeat( true , 10 ) , 11 ) ; // returns false
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements that should be truthy.
 * @returns {Boolean} Returns <code>true</code> if at least <code>n</code>
 * elements of <code>iterable</code> are truthy, <code>false</code> otherwise.
 */

export default function some(iterable, n) {
	if (n <= 0) {
		return true;
	}

	for (const item of iterable) {
		if (item && --n === 0) {
			return true;
		}
	}

	return false;
}
