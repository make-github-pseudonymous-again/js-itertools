
let any = function ( iterable ) {

	for ( let item of iterable ) {

		if ( item ) return true ;

	}

	return false ;

} ;

exports.any = any ;
