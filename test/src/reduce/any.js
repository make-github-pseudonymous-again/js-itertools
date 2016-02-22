
var one = function ( obj, val ) {
	deepEqual( itertools.any( obj ), val, "any " + JSON.stringify( obj ) );
};


test("any", function () {

	one( [], false );
	one( [true], true );
	one( [false], false );

	one( [true, true, true, true], true );
	one( [false, false, false, false], false );

	one( [false, true, true, true], true );
	one( [true, false, true, true], true );
	one( [true, true, false, true], true );
	one( [true, true, true, false], true );

	one( [true, false, false, false], true );
	one( [false, true, false, false], true );
	one( [false, false, true, false], true );
	one( [false, false, false, true], true );

});
