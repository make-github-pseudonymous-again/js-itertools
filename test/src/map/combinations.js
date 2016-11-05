import test from 'ava' ;

import { list , range , combinations } from '../../../src' ;

test( "combinations", t => {

	const x = ( iterable, r, expected ) => {
		t.deepEqual( list( combinations( iterable, r ) ), expected );
	};

	x( "ABCD", 2, [ ["A","B"], ["A","C"], ["A","D"], ["B","C"], ["B","D"], ["C","D"]] );
	x( range( 0, 4, 1 ), 3, [ [0,1,2], [0,1,3], [0,2,3], [1,2,3] ] );
	x( range( 0, 4, 1 ), 4, [ [0,1,2,3] ] );
	x( range( 0, 4, 1 ), 5, [] );
	x( range( 0, 4, 1 ), 0, [[]] );
	x( range( 0, 0, 1 ), 0, [[]] );
	x( range( 0, 0, 1 ), 1, [] );

});

