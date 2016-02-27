test( "product", function () {

	import { list , product } from 'aureooms-es-itertools' ;

	const x = ( iterables, r, expected ) => {
		t.same( list( product( iterables, r ) ), expected );
	};

	x(
		[ "ABCD", "xy" ],
		1,
		[
			["A","x"], ["A","y"], ["B","x"], ["B","y"],
			["C","x"], ["C","y"], ["D","x"], ["D","y"]
		]
	);

	x(
		[ [0, 1] ],
		3,
		[ [0,0,0], [0,0,1], [0,1,0], [0,1,1], [1,0,0], [1,0,1], [1,1,0], [1,1,1] ]
	);

});
