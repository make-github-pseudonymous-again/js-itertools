import test from 'ava' ;

import { range , take , list } from '../../..' ;

test( "take" , t => {

	t.deepEqual( list( take( range( 100 ) , 37 ) ) , list( range( 37 ) ) ) ;
	t.deepEqual( list( take( range( 100 ) , 0 ) ) , list( range( 0 ) ) ) ;
	t.deepEqual( list( take( range( 100 ) , -37 ) ) , list( range( 100 - 37 ) ) ) ;

} ) ;
