import test from 'ava' ;

import { list , range , combinationswithrepetition } from '../../../src' ;

test( "combinationswithrepetition", t => {

	const x = ( iterable, r, expected ) => {
		t.deepEqual( list( combinationswithrepetition( iterable, r) ), expected );
	};

	x( "ABC", 2, [ ["A","A"], ["A","B"], ["A","C"], ["B","B"], ["B","C"], ["C","C"] ] );
	x( range( 0, 3, 1 ), 2, [ [0,0], [0,1], [0,2], [1,1], [1,2], [2,2] ] );
	x( range( 0, 0, 1 ), 2, [] );
	x( range( 0, 4, 1 ), 0, [ [] ] );
	x( range( 0, 0, 1 ), 0, [ [] ] );

});

