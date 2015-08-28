
var range = itertools.range ;
var by = itertools.by ;
var zip = itertools.zip ;
var list = itertools.list ;

test( "by" , function ( ) {

	var A = by( range( 100 ) , 2 ) ;
	var B = zip( [ range( 0 , 100 , 2 ) , range( 1 , 100 , 2 ) ] ) ;

	deepEqual( list( A ) , list( B ) , "compare to zip output" ) ;

	var C = by( range( 4 ) , 3 ) ;

	deepEqual( list( C ) , [ [ 0 , 1 , 2 ] , [ 3 , undefined , undefined ] ] , "n !| N" ) ;

	var D = by( "" , 3 ) ;

	deepEqual( list( D ) , [ ] , "empty" ) ;

} ) ;

