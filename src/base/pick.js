/**
 * Yields some of the properties of the input object. The properties to yield
 * are designated by the input iterable.
 *
 * @example
 * // returns [ 'a' , 'e' , 'c' ]
 * list( pick( 'abcde' , [ 0 , 4 , 2 ] ) ) ;
 *
 * @param {Object} object - The input object.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
export function* pick ( object , iterable ) {

	for ( let key of iterable ) yield object[key] ;

}
