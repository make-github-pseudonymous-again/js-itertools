/**
 * Same as {@link map} but allows multiple arguments callable functions.
 *
 * @example
 * // return [ 0 , 1 , 4 , 9 ]
 * list( starmap( ( x , y ) => x*y , zip( range( 4 ) , range( 4 ) ) ) ;
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
export function* starmap ( callable , iterable ) {

	for ( let args of iterable ) yield callable.apply( null , args ) ;
	//for ( let args of iterable ) yield callable( ... ) ;

}
