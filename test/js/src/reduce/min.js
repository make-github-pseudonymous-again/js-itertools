

var one, sort;

sort = require ( "aureooms-js-sort" );

one = function ( iterable, f, expected ) {

	deepEqual(
		itertools.min( iterable, f ),
		expected,
		JSON.stringify( [iterable, f] )
	);

};

test( "min", function () {

	one( [], sort.increasing, undefined );
	one( [1], sort.increasing, 1 );
	one( [1, 2, 3], sort.increasing, 1 );
	one( [3, 2, 1], sort.increasing, 1 );
	one( [2, 3, 1], sort.increasing, 1 );
	one( [1, 3, 2], sort.increasing, 1 );
	one( [2, 1, 3], sort.increasing, 1 );
	one( [3, 1, 2], sort.increasing, 1 );

	one( [], sort.decreasing, undefined );
	one( [1], sort.decreasing, 1 );
	one( [1, 2, 3], sort.decreasing, 3 );
	one( [3, 2, 1], sort.decreasing, 3 );
	one( [2, 3, 1], sort.decreasing, 3 );
	one( [1, 3, 2], sort.decreasing, 3 );
	one( [2, 1, 3], sort.decreasing, 3 );
	one( [3, 1, 2], sort.decreasing, 3 );

});
