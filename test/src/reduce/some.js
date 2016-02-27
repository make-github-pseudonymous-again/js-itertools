import { test } from 'ava' ;

import { some } from '../../..' ;

test('some', t => {

	const x = ( iterable , n , expected ) => {
		t.same( some( iterable , n ), expected );
	};

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
