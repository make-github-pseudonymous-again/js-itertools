import test from 'ava' ;

import { list , range, takewhile } from '../../../src' ;
import { lt } from '@aureooms/js-predicate' ;

test( "takewhile", t => {

	const x = function ( iterable, predicate, expected ) {
		t.deepEqual( list( takewhile( predicate, iterable ) ), expected );
	};

	x(
		list( range( 0, 100, 1 ) ),
		lt(50),
		list( range( 0, 50, 1 ) )
	);

	x(
		list( range( 0, 100, 1 ) ),
		lt(100),
		list( range( 0, 100, 1 ) )
	);

	x(
		list( range( 0, 0, 1 ) ),
		lt(1),
		list( range( 0, 0, 1 ) )
	);

});

