
var filter = function ( iterable, callable, out ) {

	var i, len, item;

	len = iterable.length;

	for ( i = 0; i < len; ++i ) {

		item = iterable[i];

		if ( callable( item ) ) {
			out.push( item );
		}

	}

	return out;
};

exports.filter = filter;
