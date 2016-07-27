import { iter } from './iter' ;
import { range } from './range' ;

/**
 * Yields tuples that contain the current element of the input iterable and the
 * next <code>n-1</code> elements of the input iterable.
 *
 * @example
 * frame( range( 100 ) , 2 ) ;
 * // is equivalent to
 * zip( range( 100 ) , range( 1 , 100 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The frame size.
 * @returns {Iterator}
 *
 */
export function* frame ( iterable , n ) {

	// Could have an implementation using a deque
	// that doesn't slice (and thus allocate a new
	// vector everytime). Though the yield object
	// could not be modified by the caller in that case.

	const iterator = iter( iterable ) ;

	let tuple = [ ] ;

	for ( const i of range( n ) ) {

		const current = iterator.next( ) ;

		if ( current.done ) return ;

		tuple.push( current.value ) ;

	}

	yield tuple ;

	for ( const value of iterator ) {

		tuple = tuple.slice( 1 ) ;
		tuple.push( value ) ;
		yield tuple ;

	}

}
