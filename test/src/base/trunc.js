import test from 'ava' ;

import { range , trunc , list } from '../../../src' ;

test( "trunc" , t => {

	t.deepEqual( list( trunc( range( 100 ) , -37 ) ) , list( range( 37 ) ) ) ;
	t.deepEqual( list( trunc( range( 100 ) , 0 ) ) , list( range( 100 ) ) ) ;
	t.deepEqual( list( trunc( range( 100 ) , 37 ) ) , list( range( 100 - 37 ) ) ) ;

} ) ;
