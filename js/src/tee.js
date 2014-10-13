

var tee = function ( iterable, n, out ) {

	var i, m, deque;

	m = iterable.length;

	while ( n-- ) {

		deque = [];

		for ( i = 0 ; i < m ; ++i ) {
			deque.push( iterable[i] );
		}

		out.push(deque);

	}

	return out;

};

exports.tee = tee;
