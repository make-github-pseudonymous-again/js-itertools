
let cycle = function* ( iterable ) {

	let buffer = [ ] ;

	for ( let item of iterable ) buffer.push( item ) ;

	while ( true ) yield* buffer ;

} ;

exports.cycle = cycle ;
