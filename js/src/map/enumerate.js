
var enumerate = function ( iterable, out ) {

	zip( [range( 0, iterable.length, 1, [] ), iterable], out );

	return out;
};

exports.enumerate = enumerate;
