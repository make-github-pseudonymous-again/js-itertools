(function(exports, undefined){

	'use strict';


/* js/src/map */
/* js/src/map/chain.js */

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

/* js/src/map/combinations.js */
var combinations = function ( iterable, repeat, out ) {

	// combinations('ABCD', 2) --> AB AC AD BC BD CD
	// combinations(range(4), 3) --> 012 013 023 123

	var pool, len, indices, i, j;

	pool = iterable;
	len = pool.length;

	if ( repeat > len ) {
		return out;
	}

	indices = range( 0, repeat, 1, [] );

	out.push( pick( pool, indices, [] ) );

	if ( repeat === 0 || len === 0 ) {
		return out;
	}

	for ( ; ; ) {

		for ( i = repeat - 1 ; i >= 0 ; --i ) {
			if ( indices[i] !== i + len - repeat ) {
				break;
			}
		}

		if ( i < 0 ) {
			return out;
		}

		++indices[i];

		for ( j = i + 1 ; j < repeat ; ++j ) {
			indices[j] = indices[j - 1] + 1;
		}

		out.push( pick( pool, indices, [] ) );

	}

};

exports.combinations = combinations;

/* js/src/map/combinationswithrepetition.js */


var combinationswithrepetition = function ( iterable, r, out ) {

	// combinationswithrepetition('ABC', 2) --> AA AB AC BB BC CC

	var pool, len, indices, i, next;

	pool = iterable;
	len = pool.length;

	if ( len === 0 && r > 0) {
		return out;
	}

	indices = repeat( 0, r, [] );

	out.push( pick( pool, indices, [] ) );

	for ( ; ; ) {

		for ( i = r - 1 ; i >= 0 ; --i ) {
			if ( indices[i] !== len - 1 ) {
				next = indices[i] + 1;
				break;
			}
		}

		if ( i < 0 ) {
			return out;
		}

		for ( ; i < r ; ++i ) {
			indices[i] = next;
		}

		out.push( pick( pool, indices, [] ) );
	}

};

exports.combinationswithrepetition = combinationswithrepetition;

/* js/src/map/compress.js */


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

/* js/src/map/dropwhile.js */

var dropwhile = function ( predicate, iterable, out ) {

	var i, n, e;

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

/* js/src/map/enumerate.js */

var enumerate = function ( iterable, out ) {

	zip( [range( 0, iterable.length, 1, [] ), iterable], out );

	return out;
};

exports.enumerate = enumerate;

/* js/src/map/filter.js */

var filter = function ( predicate, iterable, out ) {

	var i, len, item;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {

		item = iterable[i];

		if ( predicate( item ) ) {
			out.push( item );
		}

	}

	return out;

};

exports.filter = filter;
exports.filtertrue = filter;

/* js/src/map/filterfalse.js */

var filterfalse = function ( predicate, iterable, out ) {

	var i, len, item;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {

		item = iterable[i];

		if ( ! predicate( item ) ) {
			out.push( item )
		}

	}

	return out;

};

exports.filterfalse = filterfalse;

/* js/src/map/group.js */

var group = function ( key, iterable, out ) {

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
exports.groupby = group;

/* js/src/map/map.js */

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

/* js/src/map/permutations.js */

var permutations = function( iterable, repeat, out ) {

	// permutations('ABCD', 2) --> AB AC AD BA BC BD CA CB CD DA DB DC
	// permutations(range(3), 3) --> 012 021 102 120 201 210

	var pool, i, j, w, len, indices, cycles, x, tmp;

	pool = iterable;
	len = pool.length;


	if ( repeat > len ) {
		return out;
	}


	indices = range( 0, len, 1, [] );
	cycles = range( len, len - repeat, -1, [] );

	out.push( pick( pool, indices.slice( 0, repeat ), [] ) );

	if ( repeat === 0 || len === 0 ) {
		return out;
	}

	for ( ; ; ) {

		i = repeat;

		while ( i-- ) {

			--cycles[i];

			if ( cycles[i] === 0 ) {

				x = indices[i];

				indices.splice(i, 1);
				indices.push(x);

				cycles[i] = len - i;
			}

			else {

				j = cycles[i];

				tmp = indices[i];
				indices[i] = indices[len - j];
				indices[len - j] = tmp;

				out.push( pick( pool, indices.slice( 0, repeat ), [] ) );
				break;
			}

		}

		if ( i === -1 ) {
			return out;
		}

	}

};

exports.permutations = permutations;

/* js/src/map/product.js */


var product = function ( iterables, repeat, out ) {

	// product(['ABCD', 'xy'], 1) --> Ax Ay Bx By Cx Cy Dx Dy
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

/* js/src/map/repeat.js */


var repeat = function ( element, times, out ) {

	var i;

	for ( i = 0 ; i < times ; ++i ) {
		out.push( element );
	}

	return out;

};

exports.repeat = repeat;

/* js/src/map/reversed.js */

var reversed = function ( iterable, out ) {

	var i;

	i = iterable.length;

	while ( i-- ) {
		out.push( iterable[i] );
	}

	return out;
};

exports.reversed = reversed;

/* js/src/map/slice.js */

var slice = function ( iterable, start, stop, step, out ) {

	return pick( iterable, range( start, stop, step, [] ), out );

};

exports.slice = slice;

/* js/src/map/sorted.js */


var sorted = function ( f, iterable ) {

	return iterable.slice( 0 ).sort( f );

};

exports.sorted = sorted;

/* js/src/map/starmap.js */

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

/* js/src/map/takewhile.js */

var takewhile = function ( predicate, iterable, out ) {

	var i, n, e;

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

/* js/src/map/zip.js */


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

/* js/src/reduce */
/* js/src/reduce/all.js */

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

/* js/src/reduce/any.js */

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

/* js/src/reduce/max.js */

/**
 * Returns the *last* element of an iterable according
 * to some comparison function f.
 */

var max = function ( iterable, f ) {

	var a, b, i, len;

	len = iterable.length;

	if ( len === 0 ) {
		return undefined;
	}

	a = iterable[0];

	for ( i = 1 ; i < len ; ++i ) {

		b = iterable[i];

		if ( f( b, a ) > 0 ) {
			a = b;
		}

	}

	return a;

};

exports.max = max;

/* js/src/reduce/min.js */

/**
 * Returns the *first* element of an iterable according
 * to some comparison function f.
 */

var min = function ( iterable, f ) {

	var a, b, i, len;

	len = iterable.length;

	if ( len === 0 ) {
		return undefined;
	}

	a = iterable[0];

	for ( i = 1 ; i < len ; ++i ) {

		b = iterable[i];

		if ( f( b, a ) < 0 ) {
			a = b;
		}

	}

	return a;

};

exports.min = min;

/* js/src/reduce/reduce.js */


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

/* js/src/reduce/sum.js */


var sum = function ( iterable ) {

	var i, len, total;

	total = 0;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {
		total += iterable[i];
	}

	return total;

};

exports.sum = sum;

/* js/src/utils */
/* js/src/utils/pick.js */

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

/* js/src/utils/range.js */


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

/* js/src/utils/tee.js */


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

})(typeof exports === 'undefined' ? this['itertools'] = {} : exports);
