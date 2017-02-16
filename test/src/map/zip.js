import test from 'ava' ;

import { len , list , map , zip , min , take } from '../../../src' ;
import { increasing } from '@aureooms/js-compare' ;

test( "zip", t => {

	const x = function ( iterables, out ) {

		t.deepEqual( list( zip( ...iterables ) ) , out );

		const strip = function* ( iterables ) {

			// makes all the inputs have the same length
			// (min length among all iterables)

			if ( len( iterables ) === 0 ) return ;

			const n = min( increasing , map( len , iterables ) ) ;

			for ( const iterable of iterables ) yield take( iterable , n ) ;

		} ;

		const unzipped = list( map( list , strip( iterables ) ) ) ;

		t.deepEqual( list( zip( ...out ) ), unzipped  );

	};

	x( [], [] );
	x( [[1]], [[1]] );
	x( [[1, 2, 3]], [[1], [2], [3]] );
	x( [[1, 2, 3], [4, 5, 6]], [[1, 4], [2, 5], [3, 6]] );
	x( [[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );
	x( [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );
	x( [[1, 2, 3, 4], [4, 5, 6], [7, 8, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );

});
