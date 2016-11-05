import test from 'ava' ;

import { list , range } from '../../../src';

test( "range", t => {

	const x = ( begin, end, step, expected ) => {

		t.deepEqual( list( range( begin, end, step ) ), expected );

	};

	x( 3 , undefined , undefined , [ 0 , 1 , 2 ] ) ;
	x( 3 , 6 , undefined , [ 3 , 4 , 5 ] ) ;

	x( 0, 0, 1, [] );
	x( 1, 1, 1, [] );
	x( 0, 1, 1, [0] );
	x( 0, 1, 2, [0] );
	x( 0, 7, 1, [0, 1, 2, 3, 4, 5, 6] );
	x( 7, 0, -1, [7, 6, 5, 4, 3, 2, 1] );

});
