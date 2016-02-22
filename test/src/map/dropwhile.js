
var one, functools, operator;

functools = require( "aureooms-js-functools" );
operator = require( "aureooms-js-operator" );

one = function ( iterable, predicate, expected ) {


	deepEqual(
		itertools.list( itertools.dropwhile( predicate, iterable) ),
		expected,
		JSON.stringify( [iterable, predicate] )
	);

};



test( "dropwhile", function () {

	one(
		itertools.list( itertools.range( 0, 100, 1 ) ),
		functools.rpartial( operator.lt, [50] ),
		itertools.list( itertools.range( 50, 100, 1 ) )
	);

	one(
		itertools.list( itertools.range( 0, 100, 1 ) ),
		functools.rpartial( operator.lt, [100] ),
		itertools.list( itertools.range( 0, 0, 1 ) )
	);

	one(
		itertools.list( itertools.range( 0, 0, 1 ) ),
		functools.rpartial( operator.lt, [1] ),
		itertools.list( itertools.range( 0, 0, 1 ) )
	);

});

