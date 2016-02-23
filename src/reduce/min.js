import { iter } from '../base/iter' ;
import { next } from '../base/next' ;

/**
 * Returns the smallest element of an iterable according
 * to some comparison function.
 */

export function min ( compare , iterable ) {

	let iterator = iter( iterable ) ;

	let first = next( iterator ) ;

	if ( first.done ) return undefined ;

	let smallest = first.value ;

	for ( let candidate of iterator ) {

		if ( compare( candidate , smallest ) < 0 ) {

			smallest = candidate ;

		}

	}

	return smallest ;

}
