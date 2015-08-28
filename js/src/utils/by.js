
const by = function* ( iterable , n ) {

	const iterator = iter( iterable ) ;

	while ( true ) {

		const tuple = [ ] ;

		for ( const i of range( n ) ) {

			const current = next( iterator ) ;

			if ( current.done ) {

				if ( i === 0 ) return ;

				for ( const j of range( n - i ) ) tuple.push( undefined ) ;

				yield tuple ;

				return ;

			}

			tuple.push( current.value ) ;

		}

		yield tuple ;

	}

} ;

exports.by = by ;
