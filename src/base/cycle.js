/**
 * Cycles through the input iterable.
 *
 * @example
 * // returns [0,1,0,1,0,1,0]
 * list(head(cycle(range(2)),7)) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
export function* cycle ( iterable ) {

	let buffer = [ ] ;

	for ( let item of iterable ) {

		yield item ;
		buffer.push( item ) ;

	}

	if ( buffer.length === 0 ) return ;

	while ( true ) yield* buffer ;

}
