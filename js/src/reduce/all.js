
let all = function ( iterable ) {

	for ( let item of iterable ) {

		if ( !item ) return false ;

	}

	return true ;

} ;

exports.all = all ;
