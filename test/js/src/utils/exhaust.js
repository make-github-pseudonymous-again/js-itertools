
test( "exhaust" , function ( ) {

	var iterator = itertools.range( 0 , 100 , 1 ) ;

	itertools.exhaust( itertools.head( iterator , 37 ) ) ;

	var output = itertools.list( iterator ) ;

	deepEqual( output , itertools.list( itertools.range( 37 , 100 , 1 ) ) ) ;

} ) ;
