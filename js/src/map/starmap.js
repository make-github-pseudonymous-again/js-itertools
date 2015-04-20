
let starmap = function* ( callable , iterable ) {

	for ( let item of iterable ) yield callable.apply( null , item ) ;

} ;

exports.starmap = starmap ;
