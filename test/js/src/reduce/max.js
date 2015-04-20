

var one, sort;

sort = require ( "aureooms-js-sort" );

one = function ( iterable , comp , expected ) {

	deepEqual(
		itertools.max( comp , iterable ),
		expected,
		JSON.stringify( [iterable, comp] )
	);

};

test( "max", function () {

	one( [], sort.increasing, undefined );
	one( [1], sort.increasing, 1 );
	one( [1, 2, 3], sort.increasing, 3 );
	one( [3, 2, 1], sort.increasing, 3 );
	one( [2, 3, 1], sort.increasing, 3 );
	one( [1, 3, 2], sort.increasing, 3 );
	one( [2, 1, 3], sort.increasing, 3 );
	one( [3, 1, 2], sort.increasing, 3 );

	one( [], sort.decreasing, undefined );
	one( [1], sort.decreasing, 1 );
	one( [1, 2, 3], sort.decreasing, 1 );
	one( [3, 2, 1], sort.decreasing, 1 );
	one( [2, 3, 1], sort.decreasing, 1 );
	one( [1, 3, 2], sort.decreasing, 1 );
	one( [2, 1, 3], sort.decreasing, 1 );
	one( [3, 1, 2], sort.decreasing, 1 );

});
