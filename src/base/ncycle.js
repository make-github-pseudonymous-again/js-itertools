export function* ncycle ( iterable , n ) {

	let buffer = [ ] ;

	for ( let item of iterable ) {

		yield item ;
		buffer.push( item ) ;

	}

	if ( buffer.length === 0 ) return ;

	while ( --n > 0 ) yield* buffer ;

}
