/**
 * Yields all elements from input iterable that do not verify a given predicate.
 *
 * @example
 * // returns [ 0 , 2 , 4 , 6 , 8 ]
 * list( filter( x => x % 2 , range( 10 ) ) ) ;
 *
 * @param {Function} predicate - A unary function that returns a truthy or
 * falsy value.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
export function* filterfalse ( predicate , iterable ) {

	for ( let item of iterable ) {

		if ( ! predicate( item ) ) yield item ;

	}

}
