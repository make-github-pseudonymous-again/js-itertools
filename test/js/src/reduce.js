var one = function ( callable, iterable, out ) {

	var msg;

	msg = "reduce " + JSON.stringify( iterable );

	deepEqual( itertools.reduce( callable, iterable, 0 ), out, msg )

};


test( "reduce", function () {

	var addpow2 = function (x, y) {
		return x + y * y;
	};

	one( addpow2, [], 0 );
	one( addpow2, [1], 1 );
	one( addpow2, [1, 2, 3], 14 );
	one( addpow2, [1, 2, 3, 4, 5, 6], 91 );
	one( addpow2, [1, 2, 3, 4, 5, 6, 7, 8, 9], 285 );

});
