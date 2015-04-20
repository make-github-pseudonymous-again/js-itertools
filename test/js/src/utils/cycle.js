
test( "cycle" , function ( ) {

	var a , i , j , it ;

	// the empty use case is very important
	// in case of an empty input, itertools.cycle must
	// stop immediately (no infinite loop)

	it = itertools.cycle( [ ] ) ;

	deepEqual( it.next( ).done , true , "Cycle on empty list should be empty." ) ;

	a = [ 1 , 7 , 3 ] ;

	it = itertools.cycle( a ) ;

	for ( i = 0 ; i < 1000 ; ++i ) {

		for ( j = 0 ; j < a.length ; ++j ) {

			deepEqual( it.next( ).value , a[j] , i + "." + j ) ;

		}

	}

} ) ;
