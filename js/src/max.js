
var max = function ( iterable, f ) {

	var a, b, i, len;

	len = iterable.length;

	if ( len === 0 ) {
		return undefined;
	}

	a = iterable[0];

	for ( i = 1 ; i < len ; ++i ) {

		b = iterable[i];

		if ( f( b, a ) > 0 ) {
			a = b;
		}

	}

	return a;

};

exports.max = max;
