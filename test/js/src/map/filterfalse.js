
var one = function ( predicate, iterable, out ) {

	var msg;

	msg = "filterfalse " + JSON.stringify( iterable );

	deepEqual( itertools.filterfalse( predicate, iterable, [] ), out, msg );
};


test("filterfalse", function () {

	var negativeorzero = function (x) {
		return x <= 0;
	};

	one( negativeorzero, [], [] );
	one( negativeorzero, [0], [] );
	one( negativeorzero, [6], [6] );

	one( negativeorzero, [-6], [] );
	one( negativeorzero, [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6] );
	one( negativeorzero, [0, 0, 1, 2, 0, 3, 0, 4, -7, 5, 6], [1, 2, 3, 4, 5, 6] );
});
