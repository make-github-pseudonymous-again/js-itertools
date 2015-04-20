var combinationswithrepetition = function* ( iterable , r ) {

	// combinationswithrepetition('ABC', 1) --> A B C
	// combinationswithrepetition(range(3), 2) --> 00 01 02 11 12 22

	let pool = list( iterable ) ;
	let len = pool.length ;

	if ( len === 0 && r > 0 ) return ;

	let indices = list( repeat( 0 , r ) ) ;

	yield list( pick( pool , indices ) ) ;

	while ( true ) {

		let i = r - 1 ;

		while ( true ) {

			if ( i < 0 ) return ;

			if ( indices[i] !== len - 1 ) {

				let pivot = ++indices[i] ;

				for ( ++i ; i < r ; ++i ) indices[i] = pivot ;

				break ;

			}

			--i ;

		}

		yield list( pick( pool , indices ) ) ;

	}

} ;

exports.combinationswithrepetition = combinationswithrepetition ;
