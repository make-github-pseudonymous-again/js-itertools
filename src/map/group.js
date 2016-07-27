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

	let item = first.value ;
	let nextkey = key( item ) ;

	let currkey , buffer ;

	grouping : while ( true ) {

		currkey = nextkey ;
		buffer = [ item ] ;

		while ( true ) {

			let current = iterator.next() ;

			if ( current.done ) break grouping ;

			item = current.value ;

			nextkey = key( item ) ;

			if ( nextkey !== currkey ) {

				yield [ currkey , buffer ] ;
				continue grouping ;

			}

			buffer.push( item ) ;

		}

		break grouping ;

	}

	yield [ currkey , buffer ] ;

}

/**
 * Same as {@link group}.
 * @function groupby
 */
export const groupby = group ;
