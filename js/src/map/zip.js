

var zip = function ( iterables, out ) {

	var i, j, n, len, tmp, tuple;

	len = iterables.length;


	if ( len === 0 ) {
		return out;
	}


	n = iterables[0].length;

	for ( i = 0 ; i < len ; ++i ) {

		tmp = iterables[i].length;

		if ( tmp < n ) {
			n = tmp;
		}

	}

	for ( j = 0 ; j < n ; ++j ) {

		tuple = []

		for ( i = 0 ; i < len ; ++i ) {
			tuple.push( iterables[i][j] );
		}

		out.push( tuple );
	}

	return out;
};

exports.zip = zip;
