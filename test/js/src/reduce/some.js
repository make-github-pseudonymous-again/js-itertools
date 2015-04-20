
var one = function ( obj, n , val ) {
	deepEqual( itertools.some( obj , n ), val, "some " + JSON.stringify( obj ) + " " + n );
};


test("some", function () {

	one( [], 1 , false );
	one( [true], 1 , true );
	one( [false], 1, false );

	one( [true, true, true, true], 1, true );
	one( [false, false, false, false], 1, false );

	one( [false, true, true, true], 1, true );
	one( [true, false, true, true], 1, true );
	one( [true, true, false, true], 1, true );
	one( [true, true, true, false], 1, true );

	one( [true, false, false, false], 1, true );
	one( [false, true, false, false], 1, true );
	one( [false, false, true, false], 1, true );
	one( [false, false, false, true], 1, true );


	one( [], 2 , false );
	one( [true], 2 , false );
	one( [false], 2, false );

	one( [true, true, true, true], 2, true );
	one( [false, false, false, false], 2, false );

	one( [false, true, true, true], 2, true );
	one( [true, false, true, true], 2, true );
	one( [true, true, false, true], 2, true );
	one( [true, true, true, false], 2, true );

	one( [true, false, false, false], 2, false );
	one( [false, true, false, false], 2, false );
	one( [false, false, true, false], 2, false );
	one( [false, false, false, true], 2, false );


	one( [], 3 , false );
	one( [true], 3 , false );
	one( [false], 3, false );

	one( [true, true, true, true], 3, true );
	one( [false, false, false, false], 3, false );

	one( [false, true, true, true], 3, true );
	one( [true, false, true, true], 3, true );
	one( [true, true, false, true], 3, true );
	one( [true, true, true, false], 3, true );

	one( [true, false, false, false], 3, false );
	one( [false, true, false, false], 3, false );
	one( [false, false, true, false], 3, false );
	one( [false, false, false, true], 3, false );

	one( [ true , true ] , 2 , true ) ;
	one( [ true , true ] , 3 , false ) ;
});
