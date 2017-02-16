import test from 'ava' ;

import { list , filterfalse } from '../../../src' ;
import { le } from '@aureooms/js-predicate' ;

test("filterfalse", t => {

	const x = ( predicate, iterable, out ) => {
		t.deepEqual( list( filterfalse( predicate, iterable ) ), out );
	};

	x( le(0), [], [] );
	x( le(0), [0], [] );
	x( le(0), [6], [6] );

	x( le(0), [-6], [] );
	x( le(0), [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6] );
	x( le(0), [0, 0, 1, 2, 0, 3, 0, 4, -7, 5, 6], [1, 2, 3, 4, 5, 6] );
});
