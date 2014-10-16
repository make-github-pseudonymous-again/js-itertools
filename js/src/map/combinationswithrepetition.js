

var combinationswithrepetition = function ( iterable, r, out ) {

	// combinationswithrepetition('ABC', 2) --> AA AB AC BB BC CC

	var pool, len, indices, i, next;

	pool = iterable;
	len = pool.length;

	if ( len === 0 && r > 0) {
		return out;
	}

	indices = repeat( 0, r, [] );

	out.push( pick( pool, indices, [] ) );

	for ( ; ; ) {

		for ( i = r - 1 ; i >= 0 ; --i ) {
			if ( indices[i] !== len - 1 ) {
				next = indices[i] + 1;
				break;
			}
		}

		if ( i < 0 ) {
			return out;
		}

		for ( ; i < r ; ++i ) {
			indices[i] = next;
		}

		out.push( pick( pool, indices, [] ) );
	}

};

exports.combinationswithrepetition = combinationswithrepetition;
