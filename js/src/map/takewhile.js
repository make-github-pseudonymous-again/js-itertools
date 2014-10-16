
var takewhile = function ( predicate, iterable, out ) {

	var i, n, e;

	n = iterable.length;

	if ( n === 0 ) {
		return out;
	}

	i = 0;
	e = iterable[i];

	while ( predicate( e ) ) {

		out.push( e );

		++i;

		if ( i === n ) {
			return out;
		}

		e = iterable[i];
	}

	return out;

};

exports.takewhile = takewhile;
