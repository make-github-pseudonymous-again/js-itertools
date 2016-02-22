
let compare = require( "aureooms-js-compare" ) ;

var one = function ( iterables, out ) {

	var msg, unzipped, strip;

	msg = "zip " + JSON.stringify( iterables );

	deepEqual( itertools.list( itertools.zip( iterables ) ) , out, msg );

	strip = function ( iterables, out ) {

		// makes all the inputs have the same length
		// (min length among all iterables)

		var i, n, len, tmp;

		len = iterables.length;

		if ( len === 0 ) {
			return out;
		}

		n = itertools.min( compare.len( compare.increasing ) , iterables ).length ;

		for ( i = 0 ; i < len ; ++i ) {
			out.push( iterables[i].slice( 0, n ) );
		}

		return out;

	};


	unzipped = strip( iterables, [] );

	deepEqual( itertools.list( itertools.zip( out ) ), unzipped, "un" + msg );

};


test( "zip", function () {

	one( [], [] );
	one( [[1]], [[1]] );
	one( [[1, 2, 3]], [[1], [2], [3]] );
	one( [[1, 2, 3], [4, 5, 6]], [[1, 4], [2, 5], [3, 6]] );
	one( [[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );
	one( [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );
	one( [[1, 2, 3, 4], [4, 5, 6], [7, 8, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]] );

});
