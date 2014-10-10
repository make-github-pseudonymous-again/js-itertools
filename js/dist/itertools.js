(function(exports, undefined){

	'use strict';


/* js/src/all.js */

var all = function ( iterable ) {

	var i, len;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {

		if ( ! iterable[i] ) {
			return false;
		}

	}

	return true;
};

exports.all = all;

/* js/src/any.js */

var any = function ( iterable ) {

	var i, len;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {

		if ( iterable[i] ) {
			return true;
		}

	}

	return false;
};

exports.any = any;

/* js/src/chain.js */

var chain = function ( iterables, out ) {

	var i, j, n, len, it;

	len = iterables.length;


	if ( len === 0 ) {
		return out;
	}


	for ( i = 0 ; i < len ; ++i ) {

		it = iterables[i];
		n = it.length;

		for ( j = 0 ; j < n ; ++j ) {
			out.push( it[j] );
		}
	}

	return out;

};

exports.chain = chain;

/* js/src/enumerate.js */

var enumerate = function ( iterable, out ) {

	zip( [range( 0, iterable.length, 1, [] ), iterable], out );

	return out;
};

exports.enumerate = enumerate;

/* js/src/filter.js */

var filter = function ( callable, iterable, out ) {

	var i, len, item;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {

		item = iterable[i];

		if ( callable( item ) ) {
			out.push( item );
		}

	}

	return out;
};

exports.filter = filter;

/* js/src/map.js */

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

/* js/src/range.js */


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

/* js/src/reduce.js */


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

/* js/src/reversed.js */

var reversed = function ( iterable, out ) {

	var i;

	i = iterable.length;

	while ( i-- ) {
		out.push( iterable[i] );
	}

	return out;
};

exports.reversed = reversed;

/* js/src/zip.js */


var zip = function ( iterables, out ) {

	var i, j, n, len, tmp, tuple;

	len = iterables.length;


	if ( len === 0 ) {
		return out;
	}


	n = iterables[0].length;

	for ( i = 0 ; i < len ; ++i ) {

		tmp = iterables[i].length;

		if ( tmp < n ) {
			n = tmp;
		}

	}

	for ( j = 0 ; j < n ; ++j ) {

		tuple = []

		for ( i = 0 ; i < len ; ++i ) {
			tuple.push( iterables[i][j] );
		}

		out.push( tuple );
	}

	return out;
};

exports.zip = zip;

})(typeof exports === 'undefined' ? this['itertools'] = {} : exports);
