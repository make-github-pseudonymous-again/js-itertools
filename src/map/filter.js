
export function* filter ( predicate , iterable ) {

	for ( let item of iterable ) {

		if ( predicate( item ) ) yield item ;

	}

}

export const filtertrue = filter ;
