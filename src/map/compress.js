
export function* compress ( iterable , selector ) {

	for ( let [ take , item ] of _zip( [ selector , iterable ] ) ) {

		if ( take ) yield item ;

	}

}
