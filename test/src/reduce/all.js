
var one = function ( obj, val ) {
	deepEqual( itertools.all( obj ), val, "all " + JSON.stringify( obj ) );
};


test("all", function () {

	one( [], true );
	one( [true], true );
	one( [false], false );

	one( [true, true, true, true], true );
	one( [false, false, false, false], false );

	one( [false, true, true, true], false );
	one( [true, false, true, true], false );
	one( [true, true, false, true], false );
	one( [true, true, true, false], false );

	one( [true, false, false, false], false );
	one( [false, true, false, false], false );
	one( [false, false, true, false], false );
	one( [false, false, false, true], false );
});
