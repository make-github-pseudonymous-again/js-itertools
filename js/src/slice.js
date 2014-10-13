
var slice = function ( iterable, start, stop, step, out ) {

	return pick( iterable, range( start, stop, step, [] ), out );

};

exports.slice = slice;
