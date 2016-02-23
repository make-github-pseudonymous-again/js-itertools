
export function* slice ( iterable , start , stop , step ) {

	let iterator = iter( iterable ) ;

	while ( start > 0 ) {

		if ( next( iterator ).done ) return ;

		--start ;
		--stop ;

	}

	while ( stop > 0 ) {

		let current = next( iterator ) ;

		if ( current.done ) return ;

		yield current.value ;

		--stop ;

		let n = step ;

		while ( n > 1 ) {

			if ( next( iterator ).done ) return ;

			--n ;

		}

	}

}
