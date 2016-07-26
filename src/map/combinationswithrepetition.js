import { list , nrepeat , pick } from '..' ;

/**
 * Yields all combinations, with repetitions, of each possible choice of
 * <code>r</code> elements of the input iterable.
 *
 * @example
 * // A B C
 * combinationswithrepetition('ABC', 1)
 *
 * @example
 * // 00 01 02 11 12 22
 * combinationswithrepetition(range(3), 2)
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} r - The size of the combinations to generate.
 * @returns {Iterator}
 */

export function* combinationswithrepetition ( iterable , r ) {

	let pool = list( iterable ) ;
	let len = pool.length ;

	if ( len === 0 && r > 0 ) return ;

	let indices = list( nrepeat( 0 , r ) ) ;

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

}
