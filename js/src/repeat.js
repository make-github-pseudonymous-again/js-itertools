

var repeat = function ( element, times, out ) {

	var i;

	for ( i = 0 ; i < times ; ++i ) {
		out.push( element );
	}

	return out;

};

exports.repeat = repeat;
