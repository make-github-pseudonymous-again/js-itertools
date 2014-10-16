
var one, functools, operator;

functools = require( "aureooms-js-functools" );
operator = require( "aureooms-js-operator" );

one = function ( iterable, predicate, expected ) {


	deepEqual(
		itertools.takewhile( predicate, iterable, [] ),
		expected,
		JSON.stringify( [iterable, predicate] )
	);

};



test( "takewhile", function () {

	one(
		itertools.range( 0, 100, 1, [] ),
		functools.rpartial( operator.lt, null, [50] ),
		itertools.range( 0, 50, 1, [] )
	);

});

