
var dropwhile = function ( predicate, iterable, out ) {

	var i, n, e;

	n = iterable.length;

	if ( n === 0 ) {
		return out;
	}

	i = 0;
	e = iterable[i];

	while ( predicate( e ) ) {
		++i;

		if ( i === n ) {
			return out;
		}

		e = iterable[i];
	}

	out.push( e );

	for ( ++i ; i < n ; ++i ) {
		out.push( iterable[i] );
	}

	return out;

};

exports.dropwhile = dropwhile;
