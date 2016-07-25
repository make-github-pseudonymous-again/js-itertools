import { iter } from '../base/iter' ;

/**
 * Returns the largest element of the input iterable according
 * to some comparison function.
 *
 * @param {Function} compare - The comparison function to use. This function
 * must be 2-ary. It must return -1, 0, or 1 depending whether the first
 * parameter is, respectively, less than, equal to, or greater than the second
 * parameter.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Object} The largest element of <code>iterable</code> according to
 * <code>compare</code>.
 */
export function max ( compare , iterable ) {

	let iterator = iter( iterable ) ;

	let first = iterator.next() ;

	if ( first.done ) return undefined ;

	let largest = first.value ;

	for ( let candidate of iterator ) {

		if ( compare( candidate , largest ) > 0 ) {

			largest = candidate ;

		}

	}

	return largest ;

}
