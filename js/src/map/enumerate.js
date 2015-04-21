
let enumerate = function ( iterable ) {

	return zip( [ count( 0 , 1 ) , iterable ] ) ;

} ;

exports.enumerate = enumerate ;
