
test( 'sum' , t => {

	import { sum } from 'aureooms-es-itertools' ;

	const x = ( iterable, out ) => {
		t.same( sum( iterable ), out ) ;
	};

	x( [], 0 );
	x( [1], 1 );
	x( [1, 2, 3], 3 * 4 / 2 );
	x( [1, 2, 3, 4, 5, 6], 6 * 7 / 2 );
	x( [1, 2, 3, 4, 5, 6, 7, 8, 9], 9 * 10 / 2 );

});
