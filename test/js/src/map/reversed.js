
var one = function ( iterable, out ) {

	var msg;

	msg = "reversed " + JSON.stringify( iterable );

	deepEqual( itertools.reversed( iterable, [] ), out, msg )

	deepEqual( itertools.reversed( out, [] ), iterable, "un" + msg );

};


test( "reversed", function () {

	one( [], [] );
	one( [1], [1] );
	one( [1, 2, 3], [3, 2, 1] );
	one( [1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1] );
	one( [1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1] );

});
