
/**
 * @example combinations('ABCD', 2) // AB AC AD BC BD CD
 * @example combinations(range(4), 3) // 012 013 023 123
 */

export function* combinations ( iterable , r ) {

	let pool = list( iterable ) ;
	let len = pool.length ;

	if ( r > len ) return ;

	let indices = list( range( 0 , r , 1 ) ) ;

	yield list( pick( pool , indices ) ) ;

	while ( true ) {

		let i = r - 1 ;

		while ( true ) {

			if ( i < 0 ) return ;

			if ( indices[i] !== i + len - r ) {

				let pivot = ++indices[i] ;

				for ( ++i ; i < r ; ++i ) indices[i] = ++pivot ;

				break ;

			}

			--i ;

		}

		yield list( pick( pool , indices ) ) ;

	}

}
