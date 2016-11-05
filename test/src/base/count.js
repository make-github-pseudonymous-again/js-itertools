import test from 'ava' ;

import { count , next } from '../../../src' ;

test( 'count( 0 , 1 )' , t => {


	const it = count( 0 , 1 ) ;

	for ( let i = 0 ; i < 1000 ; ++i ) {

		t.deepEqual( next( it ) , i ) ;

	}

} ) ;

test( 'count( 2 , 3 )' , t => {

	const it = count( 2 , 3 ) ;

	for ( let i = 2 ; i < 1000 ; i += 3 ) {

		t.deepEqual( next( it ) , i ) ;

	}

} ) ;
