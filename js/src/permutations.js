
var permutations = function( iterable, width, out ) {

	// permutations('ABCD', 2) --> AB AC AD BA BC BD CA CB CD DA DB DC
	// permutations(range(3)) --> 012 021 102 120 201 210

	var pool, i, j, w, n, indices, cycles, x, tmp;

	pool = iterable;
	n = pool.length;


	if ( width > n || n === 0 || width === 0 ) {
		return out;
	}


	indices = range( 0, n, 1, [] );
	cycles = range( n, n - width, -1, [] );

	out.push( pick(pool, indices) );

	for ( ; ; ) {

		i = width;

		while ( i-- ) {

			--cycles[i];

			if ( cycles[i] === 0 ) {

				x = indices[i];

				indices.splice(i, 1);
				indices.push(x);

				cycles[i] = n - i
			}

			else {

				j = cycles[i];

				tmp = indices[i];
				indices[i] = indices[n - j];
				indices[n - j] = tmp;

				out.push( pick(pool, indices) );
				break;
			}

		}

	}

};

exports.permutations = permutations;
