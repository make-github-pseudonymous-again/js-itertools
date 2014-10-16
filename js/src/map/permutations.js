
var permutations = function( iterable, repeat, out ) {

	// permutations('ABCD', 2) --> AB AC AD BA BC BD CA CB CD DA DB DC
	// permutations(range(3), 3) --> 012 021 102 120 201 210

	var pool, i, j, w, len, indices, cycles, x, tmp;

	pool = iterable;
	len = pool.length;


	if ( repeat > len ) {
		return out;
	}


	indices = range( 0, len, 1, [] );
	cycles = range( len, len - repeat, -1, [] );

	out.push( pick( pool, indices.slice( 0, repeat ), [] ) );

	if ( repeat === 0 || len === 0 ) {
		return out;
	}

	for ( ; ; ) {

		i = repeat;

		while ( i-- ) {

			--cycles[i];

			if ( cycles[i] === 0 ) {

				x = indices[i];

				indices.splice(i, 1);
				indices.push(x);

				cycles[i] = len - i;
			}

			else {

				j = cycles[i];

				tmp = indices[i];
				indices[i] = indices[len - j];
				indices[len - j] = tmp;

				out.push( pick( pool, indices.slice( 0, repeat ), [] ) );
				break;
			}

		}

		if ( i === -1 ) {
			return out;
		}

	}

};

exports.permutations = permutations;
