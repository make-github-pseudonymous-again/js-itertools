import test from 'ava' ;

import { list , enumerate } from '../../../src' ;

test( "enumerate", t => {

	const x = ( iterable, out ) => {
		t.deepEqual( list( enumerate( iterable ) ) , out ) ;
	};

	x( [], [] );
	x( [1], [[0, 1]] );
	x( [1, 4, 9], [[0, 1], [1, 4], [2, 9]] );
	x( [1, 4, 9, 16, 25, 36], [[0, 1], [1, 4], [2, 9], [3, 16], [4, 25], [5, 36]] );
	x( [1, 4, 9, 16, 25, 36, 49, 64, 81], [[0, 1], [1, 4], [2, 9], [3, 16], [4, 25], [5, 36], [6, 49], [7, 64], [8, 81]] );

});
