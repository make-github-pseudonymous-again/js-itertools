import test from 'ava' ;

import { list , compress } from '../../../src' ;

test( "compress", t => {

	const x = ( iterable, selector, expected ) => {
		t.deepEqual( list( compress( iterable, selector) ), expected );
	};

	x( "ABC", [0,0,0], [] );
	x( "ABC", [0,0,1], ["C"] );
	x( "ABC", [0,1,0], ["B"] );
	x( "ABC", [0,1,1], ["B","C"] );
	x( "ABC", [1,0,0], ["A"] );
	x( "ABC", [1,0,1], ["A","C"] );
	x( "ABC", [1,1,0], ["A","B"] );
	x( "ABC", [1,1,1], ["A","B","C"] );

	x( [0,1,2], [0,0,0], [] );
	x( [0,1,2], [0,0,1], [2] );
	x( [0,1,2], [0,1,0], [1] );
	x( [0,1,2], [0,1,1], [1,2] );
	x( [0,1,2], [1,0,0], [0] );
	x( [0,1,2], [1,0,1], [0,2] );
	x( [0,1,2], [1,1,0], [0,1] );
	x( [0,1,2], [1,1,1], [0,1,2] );

});

