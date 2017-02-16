import test from 'ava' ;

import { increasing , decreasing } from '@aureooms/js-compare' ;

import { min } from '../../../src' ;

test( 'min' , t => {

	const x = ( iterable , compare , expected ) => t.deepEqual( min( compare , iterable ) , expected ) ;

	x( [], increasing, undefined );
	x( [1], increasing, 1 );
	x( [1, 2, 3], increasing, 1 );
	x( [3, 2, 1], increasing, 1 );
	x( [2, 3, 1], increasing, 1 );
	x( [1, 3, 2], increasing, 1 );
	x( [2, 1, 3], increasing, 1 );
	x( [3, 1, 2], increasing, 1 );

	x( [], decreasing, undefined );
	x( [1], decreasing, 1 );
	x( [1, 2, 3], decreasing, 3 );
	x( [3, 2, 1], decreasing, 3 );
	x( [2, 3, 1], decreasing, 3 );
	x( [1, 3, 2], decreasing, 3 );
	x( [2, 1, 3], decreasing, 3 );
	x( [3, 1, 2], decreasing, 3 );

	// sentinel
	const sentinel = {} ;
	t.is(min(increasing, [], sentinel), sentinel, 'sentinel increasing');
	t.is(min(decreasing, [], sentinel), sentinel, 'sentinel decreasing');

});

