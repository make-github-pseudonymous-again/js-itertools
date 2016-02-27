import test from 'ava' ;

	 import {
		 range ,
		 by ,
		 zip ,
		 list } from '../../..' ;
test( 'by' , t => {


	const A = by( range( 100 ) , 2 ) ;
	const B = zip( range( 0 , 100 , 2 ) , range( 1 , 100 , 2 ) ) ;

	t.same( list( A ) , list( B ) , 'compare to zip output' ) ;

	const C = by( range( 4 ) , 3 ) ;

	t.same( list( C ) , [ [ 0 , 1 , 2 ] , [ 3 , undefined , undefined ] ] , 'n !| N' ) ;

	const D = by( '' , 3 ) ;

	t.same( list( D ) , [ ] , 'empty' ) ;

} ) ;

