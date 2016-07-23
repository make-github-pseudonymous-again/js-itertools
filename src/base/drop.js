import { iter } from './iter' ;
import { consume } from './consume' ;
import { tail } from './tail' ;

export function drop ( iterable , n ) {

	if ( n < 0 ) return tail( iterable , -n ) ;

	return ( function* ( ) {

		const iterator = iter( iterable ) ;
		consume( iterator , n ) ;
		yield* iterator ;

	} )( ) ;

}
