
test( "consume" , function ( ) {

	var iterator = itertools.range( 100 ) ;

	itertools.consume( iterator , 37 ) ;

	var output = itertools.list( iterator ) ;

	deepEqual( output , itertools.list( itertools.range( 37 , 100 ) ) ) ;

} ) ;
