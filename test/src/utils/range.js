
var one = function ( begin, end, step, out ) {

	var msg;

	msg = "range " + JSON.stringify( [begin, end, step] );

	deepEqual( itertools.list( itertools.range( begin, end, step ) ), out, msg );

};


test( "range", function () {

	one( 3 , undefined , undefined , [ 0 , 1 , 2 ] ) ;
	one( 3 , 6 , undefined , [ 3 , 4 , 5 ] ) ;

	one( 0, 0, 1, [] );
	one( 1, 1, 1, [] );
	one( 0, 1, 1, [0] );
	one( 0, 1, 2, [0] );
	one( 0, 7, 1, [0, 1, 2, 3, 4, 5, 6] );
	one( 7, 0, -1, [7, 6, 5, 4, 3, 2, 1] );

});
