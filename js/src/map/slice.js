
let slice = function* ( iterable , start , stop , step ) {

	let iterator = iter( iterable ) ;

	while ( start > 0 ) {

		if ( next( iterator ).done ) return ;

		--start ;
		--stop ;

	}

	while ( stop > 0 ) {

		let n = step ;

		while ( n > 1 ) {

			if ( next( iterator ).done ) return ;

			--n ;

		}

		let current = next( iterator ) ;

		if ( current.done ) return ;

		yield current.value ;

		--stop ;

	}

} ;

exports.slice = slice ;
