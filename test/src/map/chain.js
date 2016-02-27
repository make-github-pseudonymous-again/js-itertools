import { test } from 'ava' ;
import { list , chain } from '../../..' ;

test.only( "chain", t => {

	const x = ( iterables, out ) => {
		t.same( list( chain( iterables ) ), out );
	};

	x( [], [] );
	x( [[1]], [1] );
	x( [[1, 2, 3]], [1, 2, 3] );
	x( [[1, 2, 3], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );
	x( [[1, 2, 3], [], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );

});
