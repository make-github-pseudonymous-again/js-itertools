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

/* js/src/compress.js */


var compress = function ( iterable, selector, out ) {

	var i, j;

	j = Math.min( iterable.length, selector.length );

	for ( i = 0 ; i < j ; ++i ) {
		if ( selector[i] ) {
			out.push( iterable[i] );
		}
	}

	return out;

};

exports.compress = compress;

/* js/src/dropwhile.js */

var dropwhile = function ( predicate, iterable, out ) {

	var i, n;

	n = iterable.length;

	if ( n === 0 ) {
		return out;
	}

	i = 0;
	e = iterable[i];

	while ( predicate( e ) ) {
		++i;

		if ( i === n ) {
			return out;
		}

		e = iterable[i];
	}

	out.push( e );

	for ( ++i ; i < n ; ++i ) {
		out.push( iterable[i] );
	}

	return out;

};

exports.dropwhile = dropwhile;

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

/* js/src/filterfalse.js */

var filterfalse = function ( predicate, iterable, out ) {

	var i, e, n;

	n = iterable.length;

	for ( i = 0 ; i < n ; ++i ) {

		e = iterable[i];

		if ( ! predicate( e ) ) {
			out.push( e )
		}

	}

	return out;

};

exports.filterfalse = filterfalse;

/* js/src/filtertrue.js */

var filtertrue = function ( predicate, iterable, out ) {

	var i, e, n;

	n = iterable.length;

	for ( i = 0 ; i < n ; ++i ) {

		e = iterable[i];

		if ( predicate( e ) ) {
			out.push( e )
		}

	}

	return out;

};

exports.filtertrue = filtertrue;

/* js/src/group.js */

var group = function ( iterable, key, out ) {

	var i, len, curr, next, tuple, item, items;

	len = iterable.length;

	if ( len === 0 ) {
		return out;
	}

	i = 0;
	item = iterable[i];
	next = key( item );

	do {
		curr = next;
		items = [item];
		tuple = [curr, items];

		++i;

		while ( i < len ) {

			item = iterable[i];
			next = key( item );

			if ( next !== curr ) {
				break;
			}

			items.push( item );
			++i;
		}

		out.push( tuple );

	} while ( i < len );


	return out;

};

exports.group = group;

/* js/src/iter.js */


var iter = function ( tuple ) {

	return tuple;

};


exports.iter = iter;

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

/* js/src/permutations.js */

var permutations = function( iterable, width, out ) {

	// permutations('ABCD', 2) --> AB AC AD BA BC BD CA CB CD DA DB DC
	// permutations(range(3)) --> 012 021 102 120 201 210

	var pool, i, j, w, n, indices, cycles, x, tmp;

	pool = iterable;
	n = pool.length;


	if ( width > n || n === 0 || width === 0 ) {
		return out;
	}


	indices = range( 0, n, 1, [] );
	cycles = range( n, n - width, -1, [] );

	out.push( pick(pool, indices) );

	for ( ; ; ) {

		i = width;

		while ( i-- ) {

			--cycles[i];

			if ( cycles[i] === 0 ) {

				x = indices[i];

				indices.splice(i, 1);
				indices.push(x);

				cycles[i] = n - i
			}

			else {

				j = cycles[i];

				tmp = indices[i];
				indices[i] = indices[n - j];
				indices[n - j] = tmp;

				out.push( pick(pool, indices) );
				break;
			}

		}

	}

};

exports.permutations = permutations;

/* js/src/pick.js */

var pick = function( array, indices, out ) {

	var i, k, len;

	len = indices.length;

	for ( i = 0 ; i < len ; ++i ) {
		k = indices[i];
		out.push( array[k] );
	}

	return out;
};

exports.pick = pick;

/* js/src/product.js */


var product = function ( iterables, repeat, out ) {

	// product(['ABCD', 'xy']) --> Ax Ay Bx By Cx Cy Dx Dy
	// product([range(0, 2, 1)], 3) --> 000 001 010 011 100 101 110 111

	var a, b, i, j, k, m, n, iterable, c, len;

	a = [[]];

	// repeat k times

	for ( k = 0 ; k < repeat ; ++k ) {

		// for each iterable
		// concatenate existing combinaisons
		// with every element of this iterable

		for ( i = 0, m = iterables.length ; i < m ; ++i ) {

			// b will contain the newly created combinaisons

			b = [];

			// cache the current iterable

			iterable = iterables[i];


			// for each existing combinaison

			for ( j = 0, n = a.length ; j < n ; ++j ) {

				// for each element of the current iterable

				for ( c = 0, len = iterable.length ; c < len ; ++c ) {

					// concatenate existing combinaison with
					// current element of the iterable

					b.push( a[j].concat( iterable[c] ) );

				}

			}

			// update a for next round

			a = b;
		}

	}

	// report output

	for ( j = 0, n = a.length ; j < n ; ++j ) {
		out.push(a[j]);
	}

	return out;
};

exports.product = product;

/* js/src/range.js */


var range = function ( start, stop, step, out ) {

	if ( step < 0 ) {
		for ( ; start > stop ; start += step ) {
			out.push( start );
		}
	}

	else {
		for ( ; start < stop ; start += step ) {
			out.push( start );
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

/* js/src/repeat.js */


var repeat = function ( element, times, out ) {

	var i;

	for ( i = 0 ; i < times ; ++i ) {
		out.push( element );
	}

	return out;

};

exports.repeat = repeat;

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

/* js/src/slice.js */

var slice = function ( iterable, start, stop, step, out ) {

	return pick( iterable, range( start, stop, step, [] ), out );

};

exports.slice = slice;

/* js/src/sorted.js */


var sorted = function ( iterable, delta ) {

	return iterable.slice( 0 ).sort( delta );

};

exports.sorted = sorted;

/* js/src/starmap.js */

/**
 *
 * Maps a callable object over an array.
 *
 * /!\ currently only supports a (function, array) tuple as argument
 *
 */

var starmap = function ( callable, iterable, out ) {

	var i, len;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {
		out.push( callable.apply( null, iterable[i] ) );
	}

	return out;

};

exports.starmap = starmap;

/* js/src/takewhile.js */

var takewhile = function ( predicate, iterable, out ) {

	var i, n;

	n = iterable.length;

	if ( n === 0 ) {
		return out;
	}

	i = 0;
	e = iterable[i];

	while ( predicate( e ) ) {

		out.push( e );

		++i;

		if ( i === n ) {
			return out;
		}

		e = iterable[i];
	}

	return out;

};

exports.takewhile = takewhile;

/* js/src/tee.js */


var tee = function ( iterable, n, out ) {

	var i, m, deque;

	m = iterable.length;

	while ( n-- ) {

		deque = [];

		for ( i = 0 ; i < m ; ++i ) {
			deque.push( iterable[i] );
		}

		out.push(deque);

	}

	return out;

};

exports.tee = tee;

/* js/src/tuple.js */


var tuple = function ( iterable ) {

	return iterable;

};


exports.tuple = tuple;

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
