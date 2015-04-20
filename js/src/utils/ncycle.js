
let ncycle = function* ( iterable , n ) {

	let buffer = [ ] ;

	for ( let item of iterable ) buffer.push( item ) ;

	if ( buffer.length === 0 ) return ;

	while ( n --> 0 ) yield* buffer ;

} ;

exports.ncycle = ncycle ;
