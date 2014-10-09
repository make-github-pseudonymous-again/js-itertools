

var zip = function () {

	var i, j, n, len, tmp, out, tuple;

	len = arguments.length - 1;


	if ( len < 1 ) {
		return arguments[0];
	}


	out = arguments[len];

	n = arguments[0].length;

	for ( i = 1 ; i < len ; ++i ) {

		tmp = arguments[i].length;

		if ( tmp < n ) {
			n = tmp;
		}

	}

	for ( j = 0 ; j < n ; ++j ) {

		tuple = []

		for ( i = 0 ; i < len ; ++i ) {
			tuple.push( arguments[i][j] );
		}

		out.push( tuple );
	}

	return out;
};

exports.zip = zip;
