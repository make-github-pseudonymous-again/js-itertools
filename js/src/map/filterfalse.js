
let filterfalse = function* ( predicate , iterable ) {

	for ( let item of iterable ) {

		if ( ! predicate( item ) ) yield item ;

	}

} ;

exports.filterfalse = filterfalse ;
