
const frame = function* ( iterable , n ) {

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

} ;

exports.frame = frame ;
