
const _range = function* ( start , stop , step ) {

	if ( step < 0 ) {
		for ( ; start > stop ; start += step ) yield start ;
	}

	else {
		for ( ; start < stop ; start += step ) yield start ;
	}

} ;

exports._range = _range ;
