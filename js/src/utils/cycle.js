
let cycle = function* ( iterable ) {

	let buffer = [ ] ;

	for ( let item of iterable ) {

		yield item ;
		buffer.push( item ) ;

	}

	if ( buffer.length === 0 ) return ;

	while ( true ) yield* buffer ;

} ;

exports.cycle = cycle ;
