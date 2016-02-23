
export function* takewhile ( predicate , iterable ) {

	for ( let item of iterable ) {

		if ( !predicate( item ) ) return ;

		yield item ;

	}

}
