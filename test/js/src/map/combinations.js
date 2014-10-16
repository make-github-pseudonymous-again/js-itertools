
var one;

one = function ( iterable, repeat, expected ) {


	deepEqual(
		itertools.combinations( iterable, repeat, [] ),
		expected,
		JSON.stringify( [iterable, repeat] )
	);

};



test( "combinations", function () {

	one( "ABCD", 2, [ ["A","B"], ["A","C"], ["A","D"], ["B","C"], ["B","D"], ["C","D"]] );
	one( itertools.range( 0, 4, 1, [] ), 3, [ [0,1,2], [0,1,3], [0,2,3], [1,2,3] ] );
	one( itertools.range( 0, 4, 1, [] ), 4, [ [0,1,2,3] ] );
	one( itertools.range( 0, 4, 1, [] ), 5, [] );
	one( itertools.range( 0, 4, 1, [] ), 0, [[]] );
	one( itertools.range( 0, 0, 1, [] ), 0, [[]] );
	one( itertools.range( 0, 0, 1, [] ), 1, [] );

});

