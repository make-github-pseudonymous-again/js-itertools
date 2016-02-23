import { iter , next , range } from '.' ;

export function* frame ( iterable , n ) {

	// Could have an implementation using a deque
	// that doesn't slice (and thus allocate a new
	// vector everytime). Though the yieded object
	// cannot be modified by the caller in this case.

	const iterator = iter( iterable ) ;

	let tuple = [ ] ;

	for ( const i of range( n ) ) {

		const current = next( iterator ) ;

		if ( current.done ) return ;

		tuple.push( current.value ) ;

	}

	yield tuple ;

	for ( const value of iterator ) {

		tuple = tuple.slice( 1 ) ;
		tuple.push( value ) ;
		yield tuple ;

	}

}
