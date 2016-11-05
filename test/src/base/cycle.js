import test from 'ava' ;

import { cycle , next } from '../../../src' ;

test( 'cycle (empty)' , t => {

	// the empty use case is very important
	// in case of an empty input, cycle must
	// stop immediately (no infinite loop)

	let it = cycle( [ ] ) ;

	t.deepEqual( it.next( ).done , true , 'Cycle on empty list should be empty.' ) ;

} ) ;

test( 'cycle' , t => {


	const a = [ 1 , 7 , 3 ] ;

	let it = cycle( a ) ;

	for ( let i = 0 ; i < 1000 ; ++i ) {

		for ( let j = 0 ; j < a.length ; ++j ) {

			t.deepEqual( next( it ) , a[j] , i + '.' + j ) ;

		}

	}

} ) ;
