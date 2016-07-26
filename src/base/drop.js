import { iter } from './iter' ;
import { consume } from './consume' ;
import { tail } from './tail' ;

/**
 * Drops the first <code>n</code> elements of the input iterable.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to drop.
 * @returns {Iterator}
 */
export function drop ( iterable , n ) {

	if ( n < 0 ) return tail( iterable , -n ) ;

	return ( function* ( ) {

		const iterator = iter( iterable ) ;
		consume( iterator , n ) ;
		yield* iterator ;

	} )( ) ;

}
