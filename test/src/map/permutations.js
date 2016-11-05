import test from 'ava' ;

import { list , range , permutations } from '../../../src' ;

test( "permutations", t => {

	const x = ( iterable, repeat, expected ) => {
		t.deepEqual( list( permutations( iterable , repeat ) ) , expected);
	};


	x( [], 1, [] );
	x( [], 0, [[]] );
	x( [1, 2, 3], 0, [[]] );
	x( [1, 2, 3], 4, [] );

	x(
		"ABCD",
		2,
		[
			["A","B"], ["A","C"], ["A","D"], ["B","A"], ["B","C"], ["B","D"],
			["C","A"], ["C","B"], ["C","D"], ["D","A"], ["D","B"], ["D","C"]
		]
	);

	x(
		range( 0, 3, 1, [] ),
		3,
		[ [0,1,2], [0,2,1], [1,0,2], [1,2,0], [2,0,1], [2,1,0] ]
	);

});

