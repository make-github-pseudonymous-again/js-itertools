



var one;

one = function ( iterables, repeat, expected ) {


	deepEqual(
		itertools.product( iterables, repeat, [] ),
		expected,
		JSON.stringify( [iterables, repeat] )
	);

};



test( "product", function () {

	one(
		[ "ABCD", "xy" ],
		1,
		[
			["A","x"], ["A","y"], ["B","x"], ["B","y"],
			["C","x"], ["C","y"], ["D","x"], ["D","y"]
		]
	);

	one(
		[ [0, 1] ],
		3,
		[ [0,0,0], [0,0,1], [0,1,0], [0,1,1], [1,0,0], [1,0,1], [1,1,0], [1,1,1] ]
	);

});
