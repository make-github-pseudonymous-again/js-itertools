

var compress = function ( iterable, selector, out ) {

	var i, j;

	j = Math.min( iterable.length, selector.length );

	for ( i = 0 ; i < j ; ++i ) {
		if ( selector[i] ) {
			out.push( iterable[i] );
		}
	}

	return out;

};

exports.compress = compress;
