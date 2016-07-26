/**
 * Exhausts the input iterator.
 *
 * @example
 * let it = range( 1000 ) ;
 * exhaust( it ) ;
 * list( it ) ; // returns []
 *
 * @param {Iterator} iterator - The input iterator.
 *
 */
export function exhaust ( iterator ) {

	for ( let item of iterator ) ;

}
