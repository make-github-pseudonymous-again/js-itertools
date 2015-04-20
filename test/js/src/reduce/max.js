

var one, compare;

compare = require ( "aureooms-js-compare" );

one = function ( iterable , comp , expected ) {

	deepEqual(
		itertools.max( comp , iterable ),
		expected,
		JSON.stringify( [iterable, comp] )
	);

};

test( "max", function () {

	one( [], compare.increasing, undefined );
	one( [1], compare.increasing, 1 );
	one( [1, 2, 3], compare.increasing, 3 );
	one( [3, 2, 1], compare.increasing, 3 );
	one( [2, 3, 1], compare.increasing, 3 );
	one( [1, 3, 2], compare.increasing, 3 );
	one( [2, 1, 3], compare.increasing, 3 );
	one( [3, 1, 2], compare.increasing, 3 );

	one( [], compare.decreasing, undefined );
	one( [1], compare.decreasing, 1 );
	one( [1, 2, 3], compare.decreasing, 1 );
	one( [3, 2, 1], compare.decreasing, 1 );
	one( [2, 3, 1], compare.decreasing, 1 );
	one( [1, 3, 2], compare.decreasing, 1 );
	one( [2, 1, 3], compare.decreasing, 1 );
	one( [3, 1, 2], compare.decreasing, 1 );

});
