
let iter = function ( iterable ) {

	return iterable[Symbol.iterator]( ) ;

} ;

exports.iter = iter ;
