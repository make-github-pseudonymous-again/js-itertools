
export function* reversed ( iterable ) {

	let buffer = [ ] ;

	for ( let item of iterable ) buffer.push( item ) ;

	// caching length is believed to be faster

	let jz = buffer.length ;

	for ( ; jz ; --jz ) yield buffer.pop( ) ;

}
