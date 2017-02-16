import test from 'ava' ;

import { list , filter } from '../../../src' ;
import { gt } from '@aureooms/js-predicate' ;

test("filter", t => {

	const x = ( predicate, iterable, out ) => {
		t.deepEqual( list( filter( predicate, iterable ) ), out );
	};

	x( gt(0), [], [] );
	x( gt(0), [0], [] );
	x( gt(0), [6], [6] );

	x( gt(0), [-6], [] );
	x( gt(0), [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6] );
	x( gt(0), [0, 0, 1, 2, 0, 3, 0, 4, -7, 5, 6], [1, 2, 3, 4, 5, 6] );
});
