import test from 'ava' ;

import { range , first , StopIteration } from '../../../src' ;

test( "first" , t => {

	t.throws( ( ) => first( range( 0 ) ) , StopIteration , 'first on empty iterator throws StopIteration' ) ;

	const it = range( 57 , 14 , -3 ) ;

	t.deepEqual( first( it ) , 57 ) ;
	t.deepEqual( first( it ) , 54 ) ;
	t.deepEqual( first( it ) , 51 ) ;

} ) ;
