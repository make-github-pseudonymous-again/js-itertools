import test from 'ava' ;
import { list , chain } from '../../../src' ;

test( "chain", t => {

	const x = ( iterables, out ) => {
		t.deepEqual( list( chain( iterables ) ), out );
	};

	x( [], [] );
	x( [[1]], [1] );
	x( [[1, 2, 3]], [1, 2, 3] );
	x( [[1, 2, 3], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );
	x( [[1, 2, 3], [], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );

});
