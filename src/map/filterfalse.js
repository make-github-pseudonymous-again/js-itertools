
export function* filterfalse ( predicate , iterable ) {

	for ( let item of iterable ) {

		if ( ! predicate( item ) ) yield item ;

	}

}
