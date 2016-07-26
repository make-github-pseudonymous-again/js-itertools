import { list , range , pick } from '..' ;

/**
 * Yields all combinations of each possible choice of <code>r</code> elements
 * of the input iterable.
 *
 * @example
 * // AB AC AD BC BD CD
 * combinations('ABCD', 2)
 *
 * @example
 * // 012 013 023 123
 * combinations(range(4), 3)
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} r - The size of the combinations to generate.
 * @returns {Iterator}
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
