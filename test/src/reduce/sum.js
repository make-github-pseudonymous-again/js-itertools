var one = function ( iterable, out ) {

	var msg;

	msg = "sum " + JSON.stringify( iterable );

	deepEqual( itertools.sum( iterable ), out, msg )

};


test( "sum", function () {

	one( [], 0 );
	one( [1], 1 );
	one( [1, 2, 3], 3 * 4 / 2 );
	one( [1, 2, 3, 4, 5, 6], 6 * 7 / 2 );
	one( [1, 2, 3, 4, 5, 6, 7, 8, 9], 9 * 10 / 2 );

});
