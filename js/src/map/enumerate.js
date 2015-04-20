
let enumerate = function ( iterable , out ) {

	return zip( [ count( 0 , 1 ) , iterable ] ) ;

} ;

exports.enumerate = enumerate ;
