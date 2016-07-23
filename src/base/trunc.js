import { iter } from './iter' ;
import { take } from './take' ;

export function* trunc ( iterable , n ) {

	if ( n < 0 ) return take( iterable , -n ) ;

	const iterator = iter( iterable ) ;

	// use real deque here
	const buffer = [ ] ;

	while ( n --> 0 ) {
		const e = iterator.next( ) ;
		if ( e.done ) return ;
		buffer.push( e.value ) ;
	}

	for ( const value of iterator ) {
		yield buffer.shift() ;
		buffer.push( value ) ;
	}

}
