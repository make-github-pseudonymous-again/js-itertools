import { iter } from '../base/iter' ;

/**
 * Returns the smallest element of an iterable according
 * to some comparison function.
 */

export function min ( compare , iterable ) {

	let iterator = iter( iterable ) ;

	let first = iterator.next( ) ;

	if ( first.done ) return undefined ;

	let smallest = first.value ;

	for ( let candidate of iterator ) {

		if ( compare( candidate , smallest ) < 0 ) {

			smallest = candidate ;

		}

	}

	return smallest ;

}
