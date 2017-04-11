import test from 'ava' ;

import { range , tail , list , count } from '../../../src' ;

test( "tail" , t => {

	t.deepEqual( list( tail( range( 100 ) , -37 ) ) , list( range( 37 , 100 ) ) ) ;
	t.deepEqual( list( tail( range( 100 ) , 0 ) ) , list( range( 0 ) ) ) ;
	t.deepEqual( list( tail( range( 100 ) , 37 ) ) , list( range( 100 - 37 , 100 ) ) ) ;

	t.deepEqual( list( tail( range( 100 ) , 1000 ) ) , list( range( 100 ) ) ) ;

} ) ;

test( "construct tail of infinite generator" , t => {

	tail( count( ) , 10 ) ;
	t.pass();

} ) ;
