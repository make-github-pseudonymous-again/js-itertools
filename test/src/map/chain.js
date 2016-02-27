test( "chain", t => {

	import { list , chain } from 'aureooms-es-itertools' ;

	const x = ( iterables, out ) => {
		t.same( list( chain( iterables ) ), out );
	};

	x( [], [] );
	x( [[1]], [1] );
	x( [[1, 2, 3]], [1, 2, 3] );
	x( [[1, 2, 3], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );
	x( [[1, 2, 3], [], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );

});
