import test from 'ava' ;

import { range , next , StopIteration } from '../../../src' ;

test( "next" , t => {

	const dflt = {} ;

	t.throws( ( ) => next( range( 0 ) ) , {instanceOf: StopIteration} , 'next on empty iterator throws StopIteration' ) ;
	t.is( next( range( 0 ) , dflt ) , dflt , 'next on empty iterator with default returns default' ) ;

	const it = range( 57 , 14 , -3 ) ;

	t.deepEqual( next( it ) , 57 ) ;
	t.deepEqual( next( it ) , 54 ) ;
	t.deepEqual( next( it ) , 51 ) ;
	t.deepEqual( next( it , dflt ) , 48 ) ;

} ) ;
