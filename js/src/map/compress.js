
let compress = function* ( iterable , selector ) {

	for ( let [ take , item ] of zip( [ selector , iterable ] ) ) {

		if ( take ) yield item ;

	}

} ;

exports.compress = compress ;
