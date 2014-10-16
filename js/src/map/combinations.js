var combinations = function ( iterable, repeat, out ) {

	// combinations('ABCD', 2) --> AB AC AD BC BD CD
	// combinations(range(4), 3) --> 012 013 023 123

	var pool, len, indices, i, j;

	pool = iterable;
	len = pool.length;

	if ( repeat > len ) {
		return out;
	}

	indices = range( 0, repeat, 1, [] );

	out.push( pick( pool, indices, [] ) );

	if ( repeat === 0 || len === 0 ) {
		return out;
	}

	for ( ; ; ) {

		for ( i = repeat - 1 ; i >= 0 ; --i ) {
			if ( indices[i] !== i + len - repeat ) {
				break;
			}
		}

		if ( i < 0 ) {
			return out;
		}

		++indices[i];

		for ( j = i + 1 ; j < repeat ; ++j ) {
			indices[j] = indices[j - 1] + 1;
		}

		out.push( pick( pool, indices, [] ) );

	}

};

exports.combinations = combinations;
