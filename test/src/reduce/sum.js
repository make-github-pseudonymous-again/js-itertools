import test from 'ava' ;

import { sum } from '../../../src' ;

test( 'sum' , t => {


	const x = ( iterable, out ) => {
		t.deepEqual( sum( iterable ), out ) ;
	};

	x( [], 0 );
	x( [1], 1 );
	x( [1, 2, 3], 3 * 4 / 2 );
	x( [1, 2, 3, 4, 5, 6], 6 * 7 / 2 );
	x( [1, 2, 3, 4, 5, 6, 7, 8, 9], 9 * 10 / 2 );

});
