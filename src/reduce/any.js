export function any ( iterable ) {

	for ( let item of iterable ) {

		if ( item ) return true ;

	}

	return false ;

}
