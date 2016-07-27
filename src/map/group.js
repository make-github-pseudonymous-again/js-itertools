import { iter } from '..' ;

/**
 * Yields elements of the input iterable by grouping them into tuples
 * consecutive elements from the same equivalence class.
 *
 * @example
 * // A B C D A B
 * list( map( ( k , g ) => k , groupby('AAAABBBCCDAABBB') ) )
 *
 * @example
 * // AAAA BBB CC D
 * list( map( ( k , g ) => list( g ) , groupby('AAAABBBCCD') ) )
 *
 * @param {Function} key - The function used to determine the equivalence class
 * of an element.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
export function* group ( key , iterable ) {

	let iterator = iter( iterable ) ;

	let first = iterator.next() ;

	if ( first.done ) return ;

	let currval = first.value ;
	let currkey = key( currval ) ;

	const grouper = function* ( tgtkey ) {

		while ( true ) {

			yield currval ;

			let event = iterator.next( ) ;
			if ( event.done ) return ;

			currval = event.value ;
			currkey = key( currval ) ;

			if ( currkey !== tgtkey ) return ;

		}

	} ;

	while ( true ) {

		const tgtkey = currkey ;

		const g = grouper( tgtkey ) ;

		yield [ tgtkey , g ] ;

		while ( currkey === tgtkey ) {

			let event = iterator.next( ) ;
			if ( event.done ) return ;

			currval = event.value ;
			currkey = key( currval ) ;

		}

	}

}

/**
 * Same as {@link group}.
 * @function groupby
 */
export const groupby = group ;
