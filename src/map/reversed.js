/**
 * Yields elements of the input iterable in reverse order.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator} - The input iterable, reversed.
 */
export function* reversed ( iterable ) {

	let buffer = [ ] ;

	for ( let item of iterable ) buffer.push( item ) ;

	// caching length is believed to be faster

	let jz = buffer.length ;

	for ( ; jz ; --jz ) yield buffer.pop( ) ;

}
