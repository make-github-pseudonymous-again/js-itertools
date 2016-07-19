import test from 'ava' ;

import { all } from '../../../src' ;

test( 'all' , t => {

	const x = ( obj, val ) => t.deepEqual( all( obj ) , val ) ;

	x( [], true );
	x( [true], true );
	x( [false], false );

	x( [true, true, true, true], true );
	x( [false, false, false, false], false );

	x( [false, true, true, true], false );
	x( [true, false, true, true], false );
	x( [true, true, false, true], false );
	x( [true, true, true, false], false );

	x( [true, false, false, false], false );
	x( [false, true, false, false], false );
	x( [false, false, true, false], false );
	x( [false, false, false, true], false );

} ) ;
