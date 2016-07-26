/**
 * Returns an array containing all elements of the input iterable.
 *
 * @example
 * // return [0,1,2]
 * list( range( 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Array}
 *
 */
export function list ( iterable ) {

	return Array.from( iterable ) ;

}
