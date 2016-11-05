import test from 'ava' ;

import { some } from '../../../src' ;

test('some', t => {

	const x = ( iterable , n , expected ) => {
		t.deepEqual( some( iterable , n ), expected );
	};

	x( [], -298392 , true );
	x( [true], -298392 , true );
	x( [false], -298392, true );

	x( [true, true, true, true], -298392, true );
	x( [false, false, false, false], -298392, true );

	x( [false, true, true, true], -298392, true );
	x( [true, false, true, true], -298392, true );
	x( [true, true, false, true], -298392, true );
	x( [true, true, true, false], -298392, true );

	x( [true, false, false, false], -298392, true );
	x( [false, true, false, false], -298392, true );
	x( [false, false, true, false], -298392, true );
	x( [false, false, false, true], -298392, true );

	x( [], 0 , true );
	x( [true], 0 , true );
	x( [false], 0, true );

	x( [true, true, true, true], 0, true );
	x( [false, false, false, false], 0, true );

	x( [false, true, true, true], 0, true );
	x( [true, false, true, true], 0, true );
	x( [true, true, false, true], 0, true );
	x( [true, true, true, false], 0, true );

	x( [true, false, false, false], 0, true );
	x( [false, true, false, false], 0, true );
	x( [false, false, true, false], 0, true );
	x( [false, false, false, true], 0, true );

	x( [], 1 , false );
	x( [true], 1 , true );
	x( [false], 1, false );

	x( [true, true, true, true], 1, true );
	x( [false, false, false, false], 1, false );

	x( [false, true, true, true], 1, true );
	x( [true, false, true, true], 1, true );
	x( [true, true, false, true], 1, true );
	x( [true, true, true, false], 1, true );

	x( [true, false, false, false], 1, true );
	x( [false, true, false, false], 1, true );
	x( [false, false, true, false], 1, true );
	x( [false, false, false, true], 1, true );


	x( [], 2 , false );
	x( [true], 2 , false );
	x( [false], 2, false );

	x( [true, true, true, true], 2, true );
	x( [false, false, false, false], 2, false );

	x( [false, true, true, true], 2, true );
	x( [true, false, true, true], 2, true );
	x( [true, true, false, true], 2, true );
	x( [true, true, true, false], 2, true );

	x( [true, false, false, false], 2, false );
	x( [false, true, false, false], 2, false );
	x( [false, false, true, false], 2, false );
	x( [false, false, false, true], 2, false );


	x( [], 3 , false );
	x( [true], 3 , false );
	x( [false], 3, false );

	x( [true, true, true, true], 3, true );
	x( [false, false, false, false], 3, false );

	x( [false, true, true, true], 3, true );
	x( [true, false, true, true], 3, true );
	x( [true, true, false, true], 3, true );
	x( [true, true, true, false], 3, true );

	x( [true, false, false, false], 3, false );
	x( [false, true, false, false], 3, false );
	x( [false, false, true, false], 3, false );
	x( [false, false, false, true], 3, false );

	x( [ true , true ] , 2 , true ) ;
	x( [ true , true ] , 3 , false ) ;
});
