import test from 'ava' ;

import { list , zip , min } from '../../..' ;
import compare from 'aureooms-js-compare' ;

test( "zip", t => {

	const x = function ( iterables, out ) {

		t.same( list( zip( ...iterables ) ) , out );

		const strip = function ( iterables, out ) {

			// makes all the inputs have the same length
			// (min length among all iterables)

			const len = iterables.length;

			if ( len === 0 ) {
				return out;
			}

			const n = min( compare.len( compare.increasing ) , iterables ).length ;

			for ( let i = 0 ; i < len ; ++i ) {
				out.push( iterables[i].slice( 0, n ) );
			}

			return out;

		};

		const unzipped = strip( iterables, [] );

		t.same( list( zip( ...out ) ), unzipped  );

	};

	x( [], [] );
	x( [[1]], [[1]] );
	x( [[1, 2, 3]], [[1], [2], [3]] );
	x( [[1, 2, 3], [4, 5, 6]], [[1, 4], [2, 5], [3, 6]] );
	x( [[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );
	x( [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );
	x( [[1, 2, 3, 4], [4, 5, 6], [7, 8, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );

});
