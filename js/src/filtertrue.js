
var filtertrue = function ( predicate, iterable, out ) {

	var i, e, n;

	n = iterable.length;

	for ( i = 0 ; i < n ; ++i ) {

		e = iterable[i];

		if ( predicate( e ) ) {
			out.push( e )
		}

	}

	return out;

};

exports.filtertrue = filtertrue;
