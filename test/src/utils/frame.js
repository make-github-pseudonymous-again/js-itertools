
var range = itertools.range ;
var frame = itertools.frame ;
var zip = itertools.zip ;
var list = itertools.list ;

test( "frame" , function ( ) {

	var A = frame( range( 100 ) , 2 ) ;
	var B = zip( [ range( 100 ) , range( 1 , 100 ) ] ) ;

	deepEqual( list( A ) , list( B ) , "compare to zip output" ) ;

	var C = frame( range( 4 ) , 3 ) ;

	deepEqual( list( C ) , [ [ 0 , 1 , 2 ] , [ 1 , 2 , 3 ] ] , "n !| N" ) ;

	var D = frame( range( 2 ) , 3 ) ;

	deepEqual( list( D ) , [ ] , "empty" ) ;

} ) ;

