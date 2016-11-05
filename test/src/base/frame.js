import test from 'ava' ;

import { range , frame , zip , list } from '../../../src' ;

test( "frame" , t => {


	const A = frame( range( 100 ) , 2 ) ;
	const B = zip( range( 100 ) , range( 1 , 100 ) ) ;

	t.deepEqual( list( A ) , list( B ) , "compare to zip output" ) ;

	const C = frame( range( 4 ) , 3 ) ;

	t.deepEqual( list( C ) , [ [ 0 , 1 , 2 ] , [ 1 , 2 , 3 ] ] , "n !| N" ) ;

	const D = frame( range( 2 ) , 3 ) ;

	t.deepEqual( list( D ) , [ ] , "empty" ) ;

} ) ;

