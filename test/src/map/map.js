import test from 'ava' ;

import { list , map } from '../../../src' ;

test( "map", t => {

	const x = function ( callable, iterable, out ) {
		t.deepEqual( list( map( callable , iterable ) ) , out ) ;
	};

	const pow2 = x => x * x;

	x( pow2, [], [] );
	x( pow2, [1], [1] );
	x( pow2, [1, 2, 3], [1, 4, 9] );
	x( pow2, [1, 2, 3, 4, 5, 6], [1, 4, 9, 16, 25, 36] );
	x( pow2, [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 4, 9, 16, 25, 36, 49, 64, 81] );

});
