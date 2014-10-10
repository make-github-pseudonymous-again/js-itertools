
/**
 *
 * Maps a callable object over an array.
 *
 * /!\ currently only supports a (function, array) tuple as argument
 *
 */

var map = function ( callable, iterable, out ) {

	var i, len;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {
		out.push( callable( iterable[i] ) );
	}

	return out;

};

exports.map = map;
