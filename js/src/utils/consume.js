
let consume = function ( iterator , n ) {

	while ( n --> 0 && !next( iterator ).done ) ;

} ;

exports.consume = consume ;
