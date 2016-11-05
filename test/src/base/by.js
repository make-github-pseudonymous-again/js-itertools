import test from 'ava' ;

import { range , by , zip , list , count , head } from '../../../src' ;

test( 'by' , t => {

	const A = by( range( 100 ) , 2 ) ;
	const B = zip( range( 0 , 100 , 2 ) , range( 1 , 100 , 2 ) ) ;

	t.deepEqual( list( A ) , list( B ) , 'compare to zip output' ) ;

	const C = by( range( 4 ) , 3 ) ;

	t.deepEqual( list( C ) , [ [ 0 , 1 , 2 ] , [ 3 , undefined , undefined ] ] , 'n !| N' ) ;

	const D = by( '' , 3 ) ;

	t.deepEqual( list( D ) , [ ] , 'empty' ) ;

} ) ;

test( 'by (infinite sequences)' , t => {

	const A = by( count( ) , 2 ) ;
	const B = zip( count( 0 , 2 ) , count( 1 , 2 ) ) ;

	t.deepEqual( list( head( A , 1000 ) ) , list( head( B , 1000 ) ) , 'compare to zip output' ) ;

} ) ;

