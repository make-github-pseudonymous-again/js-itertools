export function* _count ( start , step ) {

	while ( true ) {

		yield start ;

		start += step ;

	}

}
