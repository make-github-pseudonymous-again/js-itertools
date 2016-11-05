import test from 'ava' ;

import { list , map , count , range , head , tee } from '../../../src' ;

test( "tee", t => {

	const x = ( iterable , n , expected ) => {
		t.deepEqual( list( map( list , tee( iterable , n ) ) ) , expected ) ;
	};

	x( [], 0, [] );
	x( [], 1, [[]] );
	x( [], 2, [[],[]] );
	x( [0], 0, [] );
	x( [0], 1, [[0]] );
	x( [0], 2, [[0],[0]] );
	x( [5, 7], 0, [] );
	x( [5, 7], 1, [[5, 7]] );
	x( [5, 7], 2, [[5, 7],[5, 7]] );

});

test( "tee of infinite sequence" , t => {

	for ( const it of tee( count( ) , 10 ) ) {
		t.deepEqual( list( head( it , 1000 ) ) , list( range( 1000 ) ) ) ;
		t.deepEqual( list( head( it , 100 ) ) , list( range( 1000, 1100 ) ) ) ;
	}

} ) ;
