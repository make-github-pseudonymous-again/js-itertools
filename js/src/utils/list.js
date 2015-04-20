
let list = function ( iterable ) {

	let buffer = [ ] ;

	for ( let item of iterable ) buffer.push( item ) ;

	return buffer ;

} ;

exports.list = list ;
