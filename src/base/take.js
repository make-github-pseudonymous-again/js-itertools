import { iter } from './iter' ;
import { trunc } from './trunc' ;

/**
 * Yields the first <code>n</code> elements of the input iterable. If
 * <code>n</code> is negative, behaves like <code>{@link trunc}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 0 , 1 , 2 ]
 * list( take( range( 5 ) , 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of elements to include in the output.
 * @returns {Iterator} - The first <code>n</code> elements of the input iterable.
 */
export function* take ( iterable , n ) {

	if ( n < 0 ) {
		yield* trunc( iterable , -n ) ;
		return ;
	}

	const iterator = iter( iterable ) ;

	while ( n --> 0 ) {

		const current = iterator.next() ;

		if ( current.done ) return ;

		yield current.value ;

	}

}
