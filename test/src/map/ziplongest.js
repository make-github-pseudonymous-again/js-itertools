import test from 'ava' ;

import { len , list , map , ziplongest , max , chain , nrepeat } from '../../../src' ;
import { increasing } from '@aureooms/js-compare' ;

test( "ziplongest", t => {

	const x = function ( fillvalue, iterables, out ) {

		t.deepEqual( list( ziplongest( fillvalue , ...iterables ) ) , out );

		const extend = function* ( fillvalue , iterables ) {

			// makes all the inputs have the same length
			// (max length among all iterables)

			if ( len( iterables ) === 0 ) return ;

			const n = max( increasing, map( len, iterables ) ) ;

			for ( const iterable of iterables ) {
				yield chain( [ iterable, nrepeat( fillvalue, n - iterable.length ) ] ) ;
			}

		} ;

		const unzipped = list( map( list , extend( fillvalue , iterables ) ) ) ;

		t.deepEqual( list( ziplongest( fillvalue , ...out ) ), unzipped  );

	};

	const w = Math.random( ) ;

	x( w , [], [] );
	x( w , [[1]], [[1]] );
	x( w , [[1, 2, 3]], [[1], [2], [3]] );
	x( w , [[1, 2, 3], [4, 5, 6]], [[1, 4], [2, 5], [3, 6]] );
	x( w , [[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );
	x( w , [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10]], [[1, 4, 7], [2, 5, 8], [3, 6, 9], [w,w,10]] );
	x( w , [[1, 2, 3, 4], [4, 5, 6], [7, 8, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9],[4,w,w]] );

});
