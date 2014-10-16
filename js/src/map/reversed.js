
var reversed = function ( iterable, out ) {

	var i;

	i = iterable.length;

	while ( i-- ) {
		out.push( iterable[i] );
	}

	return out;
};

exports.reversed = reversed;
