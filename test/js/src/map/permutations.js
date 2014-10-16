


var one;

one = function ( iterable, repeat, expected ) {


	deepEqual(
		itertools.permutations( iterable, repeat, [] ),
		expected,
		JSON.stringify( [iterable, repeat] )
	);

};



test( "permutations", function () {

	one( [], 1, [] );
	one( [], 0, [[]] );
	one( [1, 2, 3], 0, [[]] );
	one( [1, 2, 3], 4, [] );

	one(
		"ABCD",
		2,
		[
			["A","B"], ["A","C"], ["A","D"], ["B","A"], ["B","C"], ["B","D"],
			["C","A"], ["C","B"], ["C","D"], ["D","A"], ["D","B"], ["D","C"]
		]
	);

	one(
		itertools.range( 0, 3, 1, [] ),
		3,
		[ [0,1,2], [0,2,1], [1,0,2], [1,2,0], [2,0,1], [2,1,0] ]
	);

});

