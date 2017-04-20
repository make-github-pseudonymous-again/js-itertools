import { iter } from '../base/iter' ;

/**
 * Returns the smallest element of the input iterable according
 * to some comparison function.
 *
 * @example
 * min( ( a , b ) => a - b , range( 10 ) ) ; // returns 0
 *
 * @example
 * min( ( a , b ) => a - b , range( 0 ) ) ; // returns undefined
 *
 * @param {Function} compare - The comparison function to use. This function
 * must be 2-ary. It must return -1, 0, or 1 depending whether the first
 * parameter is, respectively, less than, equal to, or greater than the second
 * parameter.
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} [dflt=undefined] - The default value to return in the case
 * that the input iterable is empty.
 * @returns {Object} The smallest element of <code>iterable</code> according to
 * <code>compare</code>.
 */
export function min ( compare , iterable , dflt = undefined ) {

	let iterator = iter( iterable ) ;

	let first = iterator.next( ) ;

	if ( first.done ) return dflt ;

	let smallest = first.value ;

	for ( let candidate of iterator ) {

		if ( compare( candidate , smallest ) < 0 ) {

			smallest = candidate ;

		}

	}

	return smallest ;

}
