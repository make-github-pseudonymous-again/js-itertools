export function list ( iterable ) {

	// replace by return [ ...iterable ] ;

	let buffer = [ ] ;

	for ( let item of iterable ) buffer.push( item ) ;

	return buffer ;

}
