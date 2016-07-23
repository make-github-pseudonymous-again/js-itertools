import { iter } from './iter' ;
import { drop } from './drop' ;

export function tail ( iterable , n ) {

	if ( n < 0 ) return drop( iterable , -n ) ;

	const iterator = iter( iterable ) ;

	// use real deque here
	const buffer = [ ] ;

	while ( n --> 0 ) {
		const e = iterator.next( ) ;
		if ( e.done ) return ;
		buffer.push( e.value ) ;
	}

	for ( const value of iterator ) {
		buffer.push( value ) ;
		buffer.shift() ;
	}

	return buffer ;

}
