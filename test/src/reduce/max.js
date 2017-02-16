import test from 'ava' ;

import { increasing , decreasing } from '@aureooms/js-compare' ;

import { max } from '../../../src' ;

test( 'max' , t => {

	const x = ( iterable , compare , expected ) => t.deepEqual( max( compare , iterable ) , expected ) ;

	x( [], increasing, undefined );
	x( [1], increasing, 1 );
	x( [1, 2, 3], increasing, 3 );
	x( [3, 2, 1], increasing, 3 );
	x( [2, 3, 1], increasing, 3 );
	x( [1, 3, 2], increasing, 3 );
	x( [2, 1, 3], increasing, 3 );
	x( [3, 1, 2], increasing, 3 );

	x( [], decreasing, undefined );
	x( [1], decreasing, 1 );
	x( [1, 2, 3], decreasing, 1 );
	x( [3, 2, 1], decreasing, 1 );
	x( [2, 3, 1], decreasing, 1 );
	x( [1, 3, 2], decreasing, 1 );
	x( [2, 1, 3], decreasing, 1 );
	x( [3, 1, 2], decreasing, 1 );

	// sentinel
	const sentinel = {} ;
	t.is(max(increasing, [], sentinel), sentinel, 'sentinel increasing');
	t.is(max(decreasing, [], sentinel), sentinel, 'sentinel decreasing');

});
