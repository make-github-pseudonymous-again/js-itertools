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
export default function* starmap(callable, iterable) {
	for (const args of iterable) {
		yield callable(...args);
	}
}
