

/**
 * Applies the accumulator function iteratively on the
 * last return value of the accumulator and the next
 * value in the iterable. The initial value is the initializer
 * parameter.
 *
 * /!\ currently only works with an
 *     accumulator that is a function object
 *     and an array iterable
 */

var reduce = function ( accumulator, iterable, initializer ) {

	var i, len;

	i = 0;

	len = iterable.length;

	if ( len === 0 ) {
		return initializer;
	}

	for ( ; i < len ; ++i ) {
		initializer = accumulator( initializer, iterable[i] );
	}

	return initializer;

};

exports.reduce = reduce;
