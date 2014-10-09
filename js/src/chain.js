
var chain = function () {

	var i, j, n, len, it, out;

	len = arguments.length - 1;


	if ( len < 1 ) {
		return arguments[0];
	}


	out = arguments[len];

	for ( i = 0 ; i < len ; ++i ) {

		it = arguments[i];
		n = it.length;

		for ( j = 0 ; j < n ; ++j ) {
			out.push( it[j] );
		}
	}

};

exports.chain = chain;
