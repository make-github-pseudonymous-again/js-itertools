
let reversed = function* ( iterable ) {

	let buffer = [ ] ;

	for ( let item of iterable ) buffer.push( item ) ;

	while ( buffer.length ) yield buffer.pop( ) ;

} ;

exports.reversed = reversed ;
