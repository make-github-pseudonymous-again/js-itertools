

var range = function ( begin, end, step, out ) {

	if ( step < 0 ) {
		for ( ; begin > end ; begin += step ) {
			out.push(begin);
		}
	}

	else {
		for ( ; begin < end ; begin += step ) {
			out.push(begin);
		}
	}

	return out;

};

exports.range = range;
