import { iter } from '..' ;

/**
 * Zips exactly two iterables together. Yields a tuple containing the first
 * element of each iterable, then a tupe containing the second element of each
 * iterable, etc.  Stops when one of the two iterables runs out of elements.
 *
 * @example
 * // returns [ [ 'a' , 1 ] , [ 'b' , 2 ] , [ 'c' , 3 ] ]
 * list( _zip2( 'abcd' , range(3) ) ) ;
 *
 * @param {Iterable} A - The first iterable.
 * @param {Iterable} B - The second iterable.
 * @returns {Iterator}
 *
 */
export function* _zip2 ( A , B ) {

	A = iter( A ) ;
	B = iter( B ) ;

	while ( true ) {

		const a = A.next() ;
		if ( a.done ) return ;

		const b = B.next() ;
		if ( b.done ) return ;

		yield [ a.value , b.value ] ;

	}

}
