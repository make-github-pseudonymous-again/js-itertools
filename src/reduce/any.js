/**
 * Returns true if any of the elements of the input iterable is truthy.
 *
 * @example
 * any( repeat( true ) ) ; // returns true
 *
 * @example
 * any( repeat( false ) ) ; // loops forever
 *
 * @example
 * any( nrepeat( false , 10 ) ) ; // returns false
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Boolean} Returns <code>true</code> if any element of
 * <code>iterable</code> is truthy, <code>false</code> otherwise.
 */
export default function any(iterable) {
	for (const item of iterable) {
		if (item) {
			return true;
		}
	}

	return false;
}
