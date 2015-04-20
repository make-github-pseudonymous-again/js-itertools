
let takewhile = function* ( predicate , iterable ) {

	for ( let item of iterable ) {

		if ( !predicate( item ) ) return ;

		yield item ;

	}

} ;

exports.takewhile = takewhile;
