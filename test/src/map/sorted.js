import test from 'ava' ;

import { reduce , sorted } from '../../../src' ;
import { increasing , decreasing } from "@aureooms/js-compare" ;
import { contains } from "@aureooms/js-operator" ;

test( "sorted", t => {

	const x = function ( compare, a ) {

		const b = sorted( compare, a );

		t.deepEqual( b.length, a.length, "length check" );

		const initializer = {};

		reduce( function ( x, y ) {

			if ( x !== initializer ) {

				t.truthy( compare( x, y ) <= 0 );

			}

			t.truthy( contains( a, y ) );

			return y;

		}, b, initializer );

	};


	for ( const compare of [increasing, decreasing] ) {

		const a = [];

		const n = 100;

		for ( let i = n ; i-- ; ) {
			a.push( Math.random() );
		}

		x( compare, a );

	}

});
