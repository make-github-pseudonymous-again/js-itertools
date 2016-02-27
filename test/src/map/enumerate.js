

test( "enumerate", t => {

	import { list , enumerate } from 'aureooms-es-itertools' ;

	const x = ( iterable, out ) => {
		t.same( list( enumerate( iterable ) ) , out ) ;
	};

	x( [], [] );
	x( [1], [[0, 1]] );
	x( [1, 4, 9], [[0, 1], [1, 4], [2, 9]] );
	x( [1, 4, 9, 16, 25, 36], [[0, 1], [1, 4], [2, 9], [3, 16], [4, 25], [5, 36]] );
	x( [1, 4, 9, 16, 25, 36, 49, 64, 81], [[0, 1], [1, 4], [2, 9], [3, 16], [4, 25], [5, 36], [6, 49], [7, 64], [8, 81]] );

});
