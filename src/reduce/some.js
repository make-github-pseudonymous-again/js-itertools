export function some ( iterable , n ) {

	if ( n <= 0 ) return true ;

	for ( let item of iterable ) {

		if ( item && --n === 0 ) return true ;

	}

	return false ;

}
