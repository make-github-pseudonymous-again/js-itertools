

var product = function ( iterables, repeat, out ) {

	// product(['ABCD', 'xy'], 1) --> Ax Ay Bx By Cx Cy Dx Dy
	// product([range(0, 2, 1)], 3) --> 000 001 010 011 100 101 110 111

	var a, b, i, j, k, m, n, iterable, c, len;

	a = [[]];

	// repeat k times

	for ( k = 0 ; k < repeat ; ++k ) {

		// for each iterable
		// concatenate existing combinaisons
		// with every element of this iterable

		for ( i = 0, m = iterables.length ; i < m ; ++i ) {

			// b will contain the newly created combinaisons

			b = [];

			// cache the current iterable

			iterable = iterables[i];


			// for each existing combinaison

			for ( j = 0, n = a.length ; j < n ; ++j ) {

				// for each element of the current iterable

				for ( c = 0, len = iterable.length ; c < len ; ++c ) {

					// concatenate existing combinaison with
					// current element of the iterable

					b.push( a[j].concat( iterable[c] ) );

				}

			}

			// update a for next round

			a = b;
		}

	}

	// report output

	for ( j = 0, n = a.length ; j < n ; ++j ) {
		out.push(a[j]);
	}

	return out;
};

exports.product = product;
