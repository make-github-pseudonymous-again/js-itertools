
var one;

one = function ( start, stop, step ) {

	var iterable;

	iterable = itertools.range( 0, stop, 1, [] );

	deepEqual(
		itertools.slice( iterable, start, stop, step, [] ),
		itertools.range( start, stop, step, [] ),
		JSON.stringify( [start, stop, step] )
	);

};



test( "slice", function () {

	one( 0, 0, 1 );
	one( 0, 100, 1 );
	one( 0, 100, 2 );
	one( 0, 100, 3 );
	one( 50, 100, 1 );
	one( 50, 100, 2 );
	one( 50, 100, 3 );

});

