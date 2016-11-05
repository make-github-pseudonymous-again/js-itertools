import test from 'ava' ;

import { range , next , StopIteration } from '../../../src' ;

test( "next" , t => {

	t.throws( ( ) => next( range( 0 ) ) , StopIteration , 'next on empty iterator throws StopIteration' ) ;

	const it = range( 57 , 14 , -3 ) ;

	t.deepEqual( next( it ) , 57 ) ;
	t.deepEqual( next( it ) , 54 ) ;
	t.deepEqual( next( it ) , 51 ) ;

} ) ;
