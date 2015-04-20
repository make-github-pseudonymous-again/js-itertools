
let map = function* ( callable , iterable ) {

	for ( let item of iterable ) yield callable( item ) ;

} ;

exports.map = map ;
