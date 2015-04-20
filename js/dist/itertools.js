'use strict';

(function (exports, undefined) {

	'use strict';

	/* js/src/map */
	/* js/src/map/chain.js */

	var chain = function chain(iterables, out) {

		var i, j, n, len, it;

		len = iterables.length;

		if (len === 0) {
			return out;
		}

		for (i = 0; i < len; ++i) {

			it = iterables[i];
			n = it.length;

			for (j = 0; j < n; ++j) {
				out.push(it[j]);
			}
		}

		return out;
	};

	exports.chain = chain;

	/* js/src/map/combinations.js */
	var combinations = function combinations(iterable, repeat, out) {

		// combinations('ABCD', 2) --> AB AC AD BC BD CD
		// combinations(range(4), 3) --> 012 013 023 123

		var pool, len, indices, i, j;

		pool = iterable;
		len = pool.length;

		if (repeat > len) {
			return out;
		}

		indices = range(0, repeat, 1, []);

		out.push(pick(pool, indices, []));

		if (repeat === 0 || len === 0) {
			return out;
		}

		for (;;) {

			for (i = repeat - 1; i >= 0; --i) {
				if (indices[i] !== i + len - repeat) {
					break;
				}
			}

			if (i < 0) {
				return out;
			}

			++indices[i];

			for (j = i + 1; j < repeat; ++j) {
				indices[j] = indices[j - 1] + 1;
			}

			out.push(pick(pool, indices, []));
		}
	};

	exports.combinations = combinations;

	/* js/src/map/combinationswithrepetition.js */

	var combinationswithrepetition = function combinationswithrepetition(iterable, r, out) {

		// combinationswithrepetition('ABC', 2) --> AA AB AC BB BC CC

		var pool, len, indices, i, next;

		pool = iterable;
		len = pool.length;

		if (len === 0 && r > 0) {
			return out;
		}

		indices = repeat(0, r, []);

		out.push(pick(pool, indices, []));

		for (;;) {

			for (i = r - 1; i >= 0; --i) {
				if (indices[i] !== len - 1) {
					next = indices[i] + 1;
					break;
				}
			}

			if (i < 0) {
				return out;
			}

			for (; i < r; ++i) {
				indices[i] = next;
			}

			out.push(pick(pool, indices, []));
		}
	};

	exports.combinationswithrepetition = combinationswithrepetition;

	/* js/src/map/compress.js */

	var compress = function compress(iterable, selector, out) {

		var i, j;

		j = Math.min(iterable.length, selector.length);

		for (i = 0; i < j; ++i) {
			if (selector[i]) {
				out.push(iterable[i]);
			}
		}

		return out;
	};

	exports.compress = compress;

	/* js/src/map/dropwhile.js */

	var dropwhile = function dropwhile(predicate, iterable, out) {

		var i, n, e;

		n = iterable.length;

		if (n === 0) {
			return out;
		}

		i = 0;
		e = iterable[i];

		while (predicate(e)) {
			++i;

			if (i === n) {
				return out;
			}

			e = iterable[i];
		}

		out.push(e);

		for (++i; i < n; ++i) {
			out.push(iterable[i]);
		}

		return out;
	};

	exports.dropwhile = dropwhile;

	/* js/src/map/enumerate.js */

	var enumerate = function enumerate(iterable, out) {

		zip([range(0, iterable.length, 1, []), iterable], out);

		return out;
	};

	exports.enumerate = enumerate;

	/* js/src/map/filter.js */

	var filter = function filter(predicate, iterable, out) {

		var i, len, item;

		len = iterable.length;

		for (i = 0; i < len; ++i) {

			item = iterable[i];

			if (predicate(item)) {
				out.push(item);
			}
		}

		return out;
	};

	exports.filter = filter;
	exports.filtertrue = filter;

	/* js/src/map/filterfalse.js */

	var filterfalse = function filterfalse(predicate, iterable, out) {

		var i, len, item;

		len = iterable.length;

		for (i = 0; i < len; ++i) {

			item = iterable[i];

			if (!predicate(item)) {
				out.push(item);
			}
		}

		return out;
	};

	exports.filterfalse = filterfalse;

	/* js/src/map/group.js */

	var group = function group(key, iterable, out) {

		var i, len, curr, next, tuple, item, items;

		len = iterable.length;

		if (len === 0) {
			return out;
		}

		i = 0;
		item = iterable[i];
		next = key(item);

		do {
			curr = next;
			items = [item];
			tuple = [curr, items];

			++i;

			while (i < len) {

				item = iterable[i];
				next = key(item);

				if (next !== curr) {
					break;
				}

				items.push(item);
				++i;
			}

			out.push(tuple);
		} while (i < len);

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

	var map = function map(callable, iterable, out) {

		var i, len;

		len = iterable.length;

		for (i = 0; i < len; ++i) {
			out.push(callable(iterable[i]));
		}

		return out;
	};

	exports.map = map;

	/* js/src/map/permutations.js */

	var permutations = function permutations(iterable, repeat, out) {

		// permutations('ABCD', 2) --> AB AC AD BA BC BD CA CB CD DA DB DC
		// permutations(range(3), 3) --> 012 021 102 120 201 210

		var pool, i, j, w, len, indices, cycles, x, tmp;

		pool = iterable;
		len = pool.length;

		if (repeat > len) {
			return out;
		}

		indices = range(0, len, 1, []);
		cycles = range(len, len - repeat, -1, []);

		out.push(pick(pool, indices.slice(0, repeat), []));

		if (repeat === 0 || len === 0) {
			return out;
		}

		for (;;) {

			i = repeat;

			while (i--) {

				--cycles[i];

				if (cycles[i] === 0) {

					x = indices[i];

					indices.splice(i, 1);
					indices.push(x);

					cycles[i] = len - i;
				} else {

					j = cycles[i];

					tmp = indices[i];
					indices[i] = indices[len - j];
					indices[len - j] = tmp;

					out.push(pick(pool, indices.slice(0, repeat), []));
					break;
				}
			}

			if (i === -1) {
				return out;
			}
		}
	};

	exports.permutations = permutations;

	/* js/src/map/product.js */

	var product = function product(iterables, repeat, out) {

		// product(['ABCD', 'xy'], 1) --> Ax Ay Bx By Cx Cy Dx Dy
		// product([range(0, 2, 1)], 3) --> 000 001 010 011 100 101 110 111

		var a, b, i, j, k, m, n, iterable, c, len;

		a = [[]];

		// repeat k times

		for (k = 0; k < repeat; ++k) {

			// for each iterable
			// concatenate existing combinaisons
			// with every element of this iterable

			for (i = 0, m = iterables.length; i < m; ++i) {

				// b will contain the newly created combinaisons

				b = [];

				// cache the current iterable

				iterable = iterables[i];

				// for each existing combinaison

				for (j = 0, n = a.length; j < n; ++j) {

					// for each element of the current iterable

					for (c = 0, len = iterable.length; c < len; ++c) {

						// concatenate existing combinaison with
						// current element of the iterable

						b.push(a[j].concat(iterable[c]));
					}
				}

				// update a for next round

				a = b;
			}
		}

		// report output

		for (j = 0, n = a.length; j < n; ++j) {
			out.push(a[j]);
		}

		return out;
	};

	exports.product = product;

	/* js/src/map/repeat.js */

	var repeat = function repeat(element, times, out) {

		var i;

		for (i = 0; i < times; ++i) {
			out.push(element);
		}

		return out;
	};

	exports.repeat = repeat;

	/* js/src/map/reversed.js */

	var reversed = function reversed(iterable, out) {

		var i;

		i = iterable.length;

		while (i--) {
			out.push(iterable[i]);
		}

		return out;
	};

	exports.reversed = reversed;

	/* js/src/map/slice.js */

	var slice = function slice(iterable, start, stop, step, out) {

		return pick(iterable, range(start, stop, step, []), out);
	};

	exports.slice = slice;

	/* js/src/map/sorted.js */

	var sorted = function sorted(f, iterable) {

		return iterable.slice(0).sort(f);
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

	var starmap = function starmap(callable, iterable, out) {

		var i, len;

		len = iterable.length;

		for (i = 0; i < len; ++i) {
			out.push(callable.apply(null, iterable[i]));
		}

		return out;
	};

	exports.starmap = starmap;

	/* js/src/map/takewhile.js */

	var takewhile = function takewhile(predicate, iterable, out) {

		var i, n, e;

		n = iterable.length;

		if (n === 0) {
			return out;
		}

		i = 0;
		e = iterable[i];

		while (predicate(e)) {

			out.push(e);

			++i;

			if (i === n) {
				return out;
			}

			e = iterable[i];
		}

		return out;
	};

	exports.takewhile = takewhile;

	/* js/src/map/zip.js */

	var zip = function zip(iterables, out) {

		var i, j, n, len, tmp, tuple;

		len = iterables.length;

		if (len === 0) {
			return out;
		}

		n = iterables[0].length;

		for (i = 0; i < len; ++i) {

			tmp = iterables[i].length;

			if (tmp < n) {
				n = tmp;
			}
		}

		for (j = 0; j < n; ++j) {

			tuple = [];

			for (i = 0; i < len; ++i) {
				tuple.push(iterables[i][j]);
			}

			out.push(tuple);
		}

		return out;
	};

	exports.zip = zip;

	/* js/src/reduce */
	/* js/src/reduce/all.js */

	var all = function all(iterable) {

		var i, len;

		len = iterable.length;

		for (i = 0; i < len; ++i) {

			if (!iterable[i]) {
				return false;
			}
		}

		return true;
	};

	exports.all = all;

	/* js/src/reduce/any.js */

	var any = function any(iterable) {

		var i, len;

		len = iterable.length;

		for (i = 0; i < len; ++i) {

			if (iterable[i]) {
				return true;
			}
		}

		return false;
	};

	exports.any = any;

	/* js/src/reduce/max.js */

	/**
  * Returns the largest element of an iterable according
  * to some comparison function.
  */

	var max = function max(compare, iterable) {

		var iterator = iter(iterable);

		var first = next(iterator);

		if (first.done) {
			return undefined;
		}var largest = first.value;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var candidate = _step.value;

				if (compare(candidate, largest) > 0) {

					largest = candidate;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator['return']) {
					_iterator['return']();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return largest;
	};

	exports.max = max;

	/* js/src/reduce/min.js */

	/**
  * Returns the smallest element of an iterable according
  * to some comparison function.
  */

	var min = function min(compare, iterable) {

		var iterator = iter(iterable);

		var first = next(iterator);

		if (first.done) {
			return undefined;
		}var smallest = first.value;

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = iterator[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var candidate = _step2.value;

				if (compare(candidate, smallest) < 0) {

					smallest = candidate;
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2['return']) {
					_iterator2['return']();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return smallest;
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

	var reduce = function reduce(accumulator, iterable, initializer) {

		var i, len;

		i = 0;

		len = iterable.length;

		if (len === 0) {
			return initializer;
		}

		for (; i < len; ++i) {
			initializer = accumulator(initializer, iterable[i]);
		}

		return initializer;
	};

	exports.reduce = reduce;

	/* js/src/reduce/sum.js */

	var sum = function sum(iterable) {

		var i, len, total;

		total = 0;

		len = iterable.length;

		for (i = 0; i < len; ++i) {
			total += iterable[i];
		}

		return total;
	};

	exports.sum = sum;

	/* js/src/utils */
	/* js/src/utils/count.js */

	var count = regeneratorRuntime.mark(function count(start, step) {
		return regeneratorRuntime.wrap(function count$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (!true) {
						context$2$0.next = 6;
						break;
					}

					context$2$0.next = 3;
					return start;

				case 3:

					start += step;

					context$2$0.next = 0;
					break;

				case 6:
				case 'end':
					return context$2$0.stop();
			}
		}, count, this);
	});

	exports.count = count;

	/* js/src/utils/cycle.js */

	var cycle = regeneratorRuntime.mark(function cycle(iterable) {
		var buffer, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item;

		return regeneratorRuntime.wrap(function cycle$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					buffer = [];
					_iteratorNormalCompletion3 = true;
					_didIteratorError3 = false;
					_iteratorError3 = undefined;
					context$2$0.prev = 4;

					for (_iterator3 = iterable[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						item = _step3.value;
						buffer.push(item);
					}context$2$0.next = 12;
					break;

				case 8:
					context$2$0.prev = 8;
					context$2$0.t0 = context$2$0['catch'](4);
					_didIteratorError3 = true;
					_iteratorError3 = context$2$0.t0;

				case 12:
					context$2$0.prev = 12;
					context$2$0.prev = 13;

					if (!_iteratorNormalCompletion3 && _iterator3['return']) {
						_iterator3['return']();
					}

				case 15:
					context$2$0.prev = 15;

					if (!_didIteratorError3) {
						context$2$0.next = 18;
						break;
					}

					throw _iteratorError3;

				case 18:
					return context$2$0.finish(15);

				case 19:
					return context$2$0.finish(12);

				case 20:
					if (!(buffer.length === 0)) {
						context$2$0.next = 22;
						break;
					}

					return context$2$0.abrupt('return');

				case 22:
					if (!true) {
						context$2$0.next = 26;
						break;
					}

					return context$2$0.delegateYield(buffer, 't1', 24);

				case 24:
					context$2$0.next = 22;
					break;

				case 26:
				case 'end':
					return context$2$0.stop();
			}
		}, cycle, this, [[4, 8, 12, 20], [13,, 15, 19]]);
	});

	exports.cycle = cycle;

	/* js/src/utils/iter.js */

	var iter = function iter(iterable) {

		return iterable[Symbol.iterator]();
	};

	exports.iter = iter;

	/* js/src/utils/list.js */

	var list = function list(iterable) {

		var buffer = [];

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = iterable[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var item = _step4.value;
				buffer.push(item);
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4['return']) {
					_iterator4['return']();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		return buffer;
	};

	exports.list = list;

	/* js/src/utils/next.js */

	var next = function next(iterator) {

		return iterator.next();
	};

	exports.next = next;

	/* js/src/utils/pick.js */

	var pick = function pick(array, indices, out) {

		var i, k, len;

		len = indices.length;

		for (i = 0; i < len; ++i) {
			k = indices[i];
			out.push(array[k]);
		}

		return out;
	};

	exports.pick = pick;

	/* js/src/utils/range.js */

	var range = function range(start, stop, step, out) {

		if (step < 0) {
			for (; start > stop; start += step) {
				out.push(start);
			}
		} else {
			for (; start < stop; start += step) {
				out.push(start);
			}
		}

		return out;
	};

	exports.range = range;

	/* js/src/utils/tee.js */

	var tee = function tee(iterable, n, out) {

		var i, m, deque;

		m = iterable.length;

		while (n--) {

			deque = [];

			for (i = 0; i < m; ++i) {
				deque.push(iterable[i]);
			}

			out.push(deque);
		}

		return out;
	};

	exports.tee = tee;
})(typeof exports === 'undefined' ? undefined.itertools = {} : exports);