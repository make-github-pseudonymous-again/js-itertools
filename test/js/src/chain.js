
var one = function ( iterables, out ) {

	var msg;

	msg = "chain " + JSON.stringify( iterables );

	deepEqual( itertools.chain( iterables, [] ), out, msg );

};


test( "chain", function () {

	one( [], [] );
	one( [[1]], [1] );
	one( [[1, 2, 3]], [1, 2, 3] );
	one( [[1, 2, 3], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );
	one( [[1, 2, 3], [], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );

});
