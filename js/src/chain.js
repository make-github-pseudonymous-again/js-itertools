
var chain = function ( iterables, out ) {

	var i, j, n, len, it;

	len = iterables.length;


	if ( len === 0 ) {
		return out;
	}


	for ( i = 0 ; i < len ; ++i ) {

		it = iterables[i];
		n = it.length;

		for ( j = 0 ; j < n ; ++j ) {
			out.push( it[j] );
		}
	}

	return out;

};

exports.chain = chain;
