import test from 'ava' ;

import { range , drop , list } from '../../../src' ;

test( "drop" , t => {

	t.deepEqual( list( drop( range( 100 ) , 37 ) ) , list( range( 37 , 100 ) ) ) ;
	t.deepEqual( list( drop( range( 100 ) , 0 ) ) , list( range( 100 ) ) ) ;
	t.deepEqual( list( drop( range( 100 ) , -37 ) ) , list( range( 100 - 37 , 100 ) ) ) ;

} ) ;
