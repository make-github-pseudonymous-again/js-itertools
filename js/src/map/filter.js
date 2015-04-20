
let filter = function* ( predicate , iterable ) {

	for ( let item of iterable ) {

		if ( predicate( item ) ) yield item ;

	}

} ;

exports.filter = filter ;
exports.filtertrue = filter ;
