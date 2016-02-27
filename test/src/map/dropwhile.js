



test( "dropwhile", t => {

	import { list , range , dropwhile } from 'aureooms-es-itertools' ;
	import { lt } from 'aureooms-js-predicate' ;

	const x = ( iterable, predicate, expected ) => {
		t.same( list( dropwhile( predicate, iterable) ), expected );
	};

	x( list( range( 0, 100, 1 ) ), lt(50), list( range( 50, 100, 1 ) ) );

	x( list( range( 0, 100, 1 ) ), lt(100), list( range( 0, 0, 1 ) ) );

	x( list( range( 0, 0, 1 ) ), lt(1), list( range( 0, 0, 1 ) ) ) ;

});

