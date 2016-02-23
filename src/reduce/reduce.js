import { _reduce } from './_reduce' ;
import { iter , next } from '../base' ;

/**
 * Applies the accumulator function iteratively on the
 * last return value of the accumulator and the next
 * value in the iterable. The initial value is the initializer
 * parameter.
 */

export function reduce ( accumulator , iterable , initializer = undefined ) {

	if ( initializer === undefined ) {
		const iterator = iter( iterable ) ;
		const first = next( iterator ) ;

		if ( first.done ) {
			return undefined ;
		}

		return _reduce( accumulator , iterator , first.value ) ;
	}

	return _reduce( accumulator , iterable , initializer ) ;

}
