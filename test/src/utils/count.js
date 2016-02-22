
test( "count( 0 , 1 )" , function ( ) {

	var i , it ;

	it = itertools.count( 0 , 1 ) ;

	for ( i = 0 ; i < 1000 ; ++i ) {

		deepEqual( it.next( ).value , i , i ) ;

	}

} ) ;

test( "count( 2 , 3 )" , function ( ) {

	var i , it ;

	it = itertools.count( 2 , 3 ) ;

	for ( i = 2 ; i < 1000 ; i += 3 ) {

		deepEqual( it.next( ).value , i , i ) ;

	}

} ) ;
