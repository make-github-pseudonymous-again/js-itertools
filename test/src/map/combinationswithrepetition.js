
let one = function ( iterable, r, expected ) {

	deepEqual(
		itertools.list( itertools.combinationswithrepetition( iterable, r) ),
		expected,
		JSON.stringify( [iterable, r] )
	);

};



test( "combinationswithrepetition", function () {

	one( "ABC", 2, [ ["A","A"], ["A","B"], ["A","C"], ["B","B"], ["B","C"], ["C","C"] ] );
	one( itertools.range( 0, 3, 1 ), 2, [ [0,0], [0,1], [0,2], [1,1], [1,2], [2,2] ] );
	one( itertools.range( 0, 0, 1 ), 2, [] );
	one( itertools.range( 0, 4, 1 ), 0, [ [] ] );
	one( itertools.range( 0, 0, 1 ), 0, [ [] ] );

});

