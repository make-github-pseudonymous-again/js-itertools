/**
 * Returns true if all of the elements of the input iterable are truthy.
 *
 * @example
 * all( repeat( true ) ) ; // loops forever
 *
 * @example
 * all( repeat( false ) ) ; // returns false
 *
 * @example
 * all( chain( [ nrepeat( true , 10 ) , repeat( false ) ) ) ; // returns false
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Boolean} Returns <code>true</code> if all element of
 * <code>iterable</code> are truthy, <code>false</code> otherwise.
 */
export default function all(iterable) {
	for (const item of iterable) {
		if (!item) {
			return false;
		}
	}

	return true;
}
