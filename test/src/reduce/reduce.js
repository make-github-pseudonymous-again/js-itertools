import test from 'ava' ;

import { reduce } from '../../../src' ;

test( 'reduce' , t => {

	const x = ( callable, iterable, expected ) => {
		t.deepEqual( reduce( callable, iterable, 0 ) , expected ) ;
	} ;

	const addpow2 = (x, y) => x + y * y ;

	x( addpow2, [], 0 );
	x( addpow2, [1], 1 );
	x( addpow2, [1, 2, 3], 14 );
	x( addpow2, [1, 2, 3, 4, 5, 6], 91 );
	x( addpow2, [1, 2, 3, 4, 5, 6, 7, 8, 9], 285 );

});

test( 'reduce without initializer' , t => {

	const x = ( callable, iterable, expected ) => {
		t.deepEqual( reduce( callable, iterable ) , expected ) ;
	} ;

	const addpow2 = (x, y) => x + y * y ;

	x( addpow2, [], undefined );
	x( addpow2, [1], 1 );
	x( addpow2, [1, 2, 3], 14 );
	x( addpow2, [1, 2, 3, 4, 5, 6], 91 );
	x( addpow2, [1, 2, 3, 4, 5, 6, 7, 8, 9], 285 );

});
