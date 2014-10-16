var one = function ( iterable, out ) {

	var msg;

	msg = "enumerate " + JSON.stringify( iterable );

	deepEqual( itertools.enumerate( iterable, [] ), out, msg )

};


test( "enumerate", function () {

	one( [], [] );
	one( [1], [[0, 1]] );
	one( [1, 4, 9], [[0, 1], [1, 4], [2, 9]] );
	one( [1, 4, 9, 16, 25, 36], [[0, 1], [1, 4], [2, 9], [3, 16], [4, 25], [5, 36]] );
	one( [1, 4, 9, 16, 25, 36, 49, 64, 81], [[0, 1], [1, 4], [2, 9], [3, 16], [4, 25], [5, 36], [6, 49], [7, 64], [8, 81]] );

});
