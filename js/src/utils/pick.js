
let pick = function* ( object , iterable ) {

	for ( let key of iterable ) yield object[key] ;

} ;

exports.pick = pick ;
