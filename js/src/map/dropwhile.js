
let dropwhile = function* ( predicate , iterable ) {

	for ( let item of iterable ) {

		if ( predicate( item ) ) continue ;

		// equivalent to return chain( [ [ item ] , iterable ] ) ;

		yield item ;

		yield* iterable ;

		return ;

	}

} ;

exports.dropwhile = dropwhile ;
