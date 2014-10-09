

var range = function ( begin, end, step, out ) {

	for ( ; begin < end ; begin += step ) {
		out.push(begin);
	}

	return out;

};

exports.range = range;
