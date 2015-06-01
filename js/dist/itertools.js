"use strict";

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/map */
		/* js/src/map/_product.js */

		/**
   * @param {lists} pools reverse ordered
   */

		var _product = regeneratorRuntime.mark(function _product(pools, i, n) {
			var iterable, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, buffer, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;

			return regeneratorRuntime.wrap(function _product$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!(i === n)) {
							context$3$0.next = 4;
							break;
						}

						context$3$0.next = 3;
						return [];

					case 3:
						return context$3$0.abrupt("return");

					case 4:
						iterable = pools[i];
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						context$3$0.prev = 8;
						_iterator = _product(pools, i + 1, n)[Symbol.iterator]();

					case 10:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							context$3$0.next = 43;
							break;
						}

						buffer = _step.value;
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						context$3$0.prev = 15;
						_iterator2 = iterable[Symbol.iterator]();

					case 17:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							context$3$0.next = 26;
							break;
						}

						item = _step2.value;

						buffer.push(item);

						context$3$0.next = 22;
						return buffer;

					case 22:

						buffer.pop(item);

					case 23:
						_iteratorNormalCompletion2 = true;
						context$3$0.next = 17;
						break;

					case 26:
						context$3$0.next = 32;
						break;

					case 28:
						context$3$0.prev = 28;
						context$3$0.t0 = context$3$0["catch"](15);
						_didIteratorError2 = true;
						_iteratorError2 = context$3$0.t0;

					case 32:
						context$3$0.prev = 32;
						context$3$0.prev = 33;

						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}

					case 35:
						context$3$0.prev = 35;

						if (!_didIteratorError2) {
							context$3$0.next = 38;
							break;
						}

						throw _iteratorError2;

					case 38:
						return context$3$0.finish(35);

					case 39:
						return context$3$0.finish(32);

					case 40:
						_iteratorNormalCompletion = true;
						context$3$0.next = 10;
						break;

					case 43:
						context$3$0.next = 49;
						break;

					case 45:
						context$3$0.prev = 45;
						context$3$0.t1 = context$3$0["catch"](8);
						_didIteratorError = true;
						_iteratorError = context$3$0.t1;

					case 49:
						context$3$0.prev = 49;
						context$3$0.prev = 50;

						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}

					case 52:
						context$3$0.prev = 52;

						if (!_didIteratorError) {
							context$3$0.next = 55;
							break;
						}

						throw _iteratorError;

					case 55:
						return context$3$0.finish(52);

					case 56:
						return context$3$0.finish(49);

					case 57:
					case "end":
						return context$3$0.stop();
				}
			}, _product, this, [[8, 45, 49, 57], [15, 28, 32, 40], [33,, 35, 39], [50,, 52, 56]]);
		});

		exports._product = _product;

		/* js/src/map/chain.js */

		var chain = regeneratorRuntime.mark(function chain(iterables) {
			var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, iterable;

			return regeneratorRuntime.wrap(function chain$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						context$3$0.prev = 3;
						_iterator3 = iterables[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							context$3$0.next = 11;
							break;
						}

						iterable = _step3.value;
						return context$3$0.delegateYield(iterable, "t0", 8);

					case 8:
						_iteratorNormalCompletion3 = true;
						context$3$0.next = 5;
						break;

					case 11:
						context$3$0.next = 17;
						break;

					case 13:
						context$3$0.prev = 13;
						context$3$0.t1 = context$3$0["catch"](3);
						_didIteratorError3 = true;
						_iteratorError3 = context$3$0.t1;

					case 17:
						context$3$0.prev = 17;
						context$3$0.prev = 18;

						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}

					case 20:
						context$3$0.prev = 20;

						if (!_didIteratorError3) {
							context$3$0.next = 23;
							break;
						}

						throw _iteratorError3;

					case 23:
						return context$3$0.finish(20);

					case 24:
						return context$3$0.finish(17);

					case 25:
					case "end":
						return context$3$0.stop();
				}
			}, chain, this, [[3, 13, 17, 25], [18,, 20, 24]]);
		});

		exports.chain = chain;

		/* js/src/map/combinations.js */

		var combinations = regeneratorRuntime.mark(function combinations(iterable, r) {
			var pool, len, indices, i, pivot;
			return regeneratorRuntime.wrap(function combinations$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						pool = list(iterable);
						len = pool.length;

						if (!(r > len)) {
							context$3$0.next = 4;
							break;
						}

						return context$3$0.abrupt("return");

					case 4:
						indices = list(range(0, r, 1));
						context$3$0.next = 7;
						return list(pick(pool, indices));

					case 7:
						if (!true) {
							context$3$0.next = 23;
							break;
						}

						i = r - 1;

					case 9:
						if (!true) {
							context$3$0.next = 19;
							break;
						}

						if (!(i < 0)) {
							context$3$0.next = 12;
							break;
						}

						return context$3$0.abrupt("return");

					case 12:
						if (!(indices[i] !== i + len - r)) {
							context$3$0.next = 16;
							break;
						}

						pivot = ++indices[i];

						for (++i; i < r; ++i) indices[i] = ++pivot;

						return context$3$0.abrupt("break", 19);

					case 16:

						--i;

						context$3$0.next = 9;
						break;

					case 19:
						context$3$0.next = 21;
						return list(pick(pool, indices));

					case 21:
						context$3$0.next = 7;
						break;

					case 23:
					case "end":
						return context$3$0.stop();
				}
			}, combinations, this);
		});

		exports.combinations = combinations;

		/* js/src/map/combinationswithrepetition.js */

		var combinationswithrepetition = regeneratorRuntime.mark(function combinationswithrepetition(iterable, r) {
			var pool, len, indices, i, pivot;
			return regeneratorRuntime.wrap(function combinationswithrepetition$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						pool = list(iterable);
						len = pool.length;

						if (!(len === 0 && r > 0)) {
							context$3$0.next = 4;
							break;
						}

						return context$3$0.abrupt("return");

					case 4:
						indices = list(nrepeat(0, r));
						context$3$0.next = 7;
						return list(pick(pool, indices));

					case 7:
						if (!true) {
							context$3$0.next = 23;
							break;
						}

						i = r - 1;

					case 9:
						if (!true) {
							context$3$0.next = 19;
							break;
						}

						if (!(i < 0)) {
							context$3$0.next = 12;
							break;
						}

						return context$3$0.abrupt("return");

					case 12:
						if (!(indices[i] !== len - 1)) {
							context$3$0.next = 16;
							break;
						}

						pivot = ++indices[i];

						for (++i; i < r; ++i) indices[i] = pivot;

						return context$3$0.abrupt("break", 19);

					case 16:

						--i;

						context$3$0.next = 9;
						break;

					case 19:
						context$3$0.next = 21;
						return list(pick(pool, indices));

					case 21:
						context$3$0.next = 7;
						break;

					case 23:
					case "end":
						return context$3$0.stop();
				}
			}, combinationswithrepetition, this);
		});

		exports.combinationswithrepetition = combinationswithrepetition;

		/* js/src/map/compress.js */

		var compress = regeneratorRuntime.mark(function compress(iterable, selector) {
			var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _step4$value, take, item;

			return regeneratorRuntime.wrap(function compress$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion4 = true;
						_didIteratorError4 = false;
						_iteratorError4 = undefined;
						context$3$0.prev = 3;
						_iterator4 = zip([selector, iterable])[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
							context$3$0.next = 15;
							break;
						}

						_step4$value = _slicedToArray(_step4.value, 2);
						take = _step4$value[0];
						item = _step4$value[1];

						if (!take) {
							context$3$0.next = 12;
							break;
						}

						context$3$0.next = 12;
						return item;

					case 12:
						_iteratorNormalCompletion4 = true;
						context$3$0.next = 5;
						break;

					case 15:
						context$3$0.next = 21;
						break;

					case 17:
						context$3$0.prev = 17;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError4 = true;
						_iteratorError4 = context$3$0.t0;

					case 21:
						context$3$0.prev = 21;
						context$3$0.prev = 22;

						if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
							_iterator4["return"]();
						}

					case 24:
						context$3$0.prev = 24;

						if (!_didIteratorError4) {
							context$3$0.next = 27;
							break;
						}

						throw _iteratorError4;

					case 27:
						return context$3$0.finish(24);

					case 28:
						return context$3$0.finish(21);

					case 29:
					case "end":
						return context$3$0.stop();
				}
			}, compress, this, [[3, 17, 21, 29], [22,, 24, 28]]);
		});

		exports.compress = compress;

		/* js/src/map/dropwhile.js */

		var dropwhile = regeneratorRuntime.mark(function dropwhile(predicate, iterable) {
			var iterator, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, item;

			return regeneratorRuntime.wrap(function dropwhile$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						iterator = iter(iterable);
						_iteratorNormalCompletion5 = true;
						_didIteratorError5 = false;
						_iteratorError5 = undefined;
						context$3$0.prev = 4;
						_iterator5 = iterator[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
							context$3$0.next = 17;
							break;
						}

						item = _step5.value;

						if (!predicate(item)) {
							context$3$0.next = 10;
							break;
						}

						return context$3$0.abrupt("continue", 14);

					case 10:
						context$3$0.next = 12;
						return item;

					case 12:
						return context$3$0.delegateYield(iterator, "t0", 13);

					case 13:
						return context$3$0.abrupt("return");

					case 14:
						_iteratorNormalCompletion5 = true;
						context$3$0.next = 6;
						break;

					case 17:
						context$3$0.next = 23;
						break;

					case 19:
						context$3$0.prev = 19;
						context$3$0.t1 = context$3$0["catch"](4);
						_didIteratorError5 = true;
						_iteratorError5 = context$3$0.t1;

					case 23:
						context$3$0.prev = 23;
						context$3$0.prev = 24;

						if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
							_iterator5["return"]();
						}

					case 26:
						context$3$0.prev = 26;

						if (!_didIteratorError5) {
							context$3$0.next = 29;
							break;
						}

						throw _iteratorError5;

					case 29:
						return context$3$0.finish(26);

					case 30:
						return context$3$0.finish(23);

					case 31:
					case "end":
						return context$3$0.stop();
				}
			}, dropwhile, this, [[4, 19, 23, 31], [24,, 26, 30]]);
		});

		exports.dropwhile = dropwhile;

		/* js/src/map/enumerate.js */

		var enumerate = function enumerate(iterable) {

			return zip([count(0, 1), iterable]);
		};

		exports.enumerate = enumerate;

		/* js/src/map/filter.js */

		var filter = regeneratorRuntime.mark(function filter(predicate, iterable) {
			var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, item;

			return regeneratorRuntime.wrap(function filter$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion6 = true;
						_didIteratorError6 = false;
						_iteratorError6 = undefined;
						context$3$0.prev = 3;
						_iterator6 = iterable[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
							context$3$0.next = 13;
							break;
						}

						item = _step6.value;

						if (!predicate(item)) {
							context$3$0.next = 10;
							break;
						}

						context$3$0.next = 10;
						return item;

					case 10:
						_iteratorNormalCompletion6 = true;
						context$3$0.next = 5;
						break;

					case 13:
						context$3$0.next = 19;
						break;

					case 15:
						context$3$0.prev = 15;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError6 = true;
						_iteratorError6 = context$3$0.t0;

					case 19:
						context$3$0.prev = 19;
						context$3$0.prev = 20;

						if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
							_iterator6["return"]();
						}

					case 22:
						context$3$0.prev = 22;

						if (!_didIteratorError6) {
							context$3$0.next = 25;
							break;
						}

						throw _iteratorError6;

					case 25:
						return context$3$0.finish(22);

					case 26:
						return context$3$0.finish(19);

					case 27:
					case "end":
						return context$3$0.stop();
				}
			}, filter, this, [[3, 15, 19, 27], [20,, 22, 26]]);
		});

		exports.filter = filter;
		exports.filtertrue = filter;

		/* js/src/map/filterfalse.js */

		var filterfalse = regeneratorRuntime.mark(function filterfalse(predicate, iterable) {
			var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, item;

			return regeneratorRuntime.wrap(function filterfalse$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion7 = true;
						_didIteratorError7 = false;
						_iteratorError7 = undefined;
						context$3$0.prev = 3;
						_iterator7 = iterable[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
							context$3$0.next = 13;
							break;
						}

						item = _step7.value;

						if (predicate(item)) {
							context$3$0.next = 10;
							break;
						}

						context$3$0.next = 10;
						return item;

					case 10:
						_iteratorNormalCompletion7 = true;
						context$3$0.next = 5;
						break;

					case 13:
						context$3$0.next = 19;
						break;

					case 15:
						context$3$0.prev = 15;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError7 = true;
						_iteratorError7 = context$3$0.t0;

					case 19:
						context$3$0.prev = 19;
						context$3$0.prev = 20;

						if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
							_iterator7["return"]();
						}

					case 22:
						context$3$0.prev = 22;

						if (!_didIteratorError7) {
							context$3$0.next = 25;
							break;
						}

						throw _iteratorError7;

					case 25:
						return context$3$0.finish(22);

					case 26:
						return context$3$0.finish(19);

					case 27:
					case "end":
						return context$3$0.stop();
				}
			}, filterfalse, this, [[3, 15, 19, 27], [20,, 22, 26]]);
		});

		exports.filterfalse = filterfalse;

		/* js/src/map/group.js */

		var group = regeneratorRuntime.mark(function group(key, iterable) {
			var iterator, first, item, nextkey, currkey, buffer, current;
			return regeneratorRuntime.wrap(function group$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						iterator = iter(iterable);
						first = next(iterator);

						if (!first.done) {
							context$3$0.next = 4;
							break;
						}

						return context$3$0.abrupt("return");

					case 4:
						item = first.value;
						nextkey = key(item);
						currkey = undefined, buffer = undefined;

					case 7:
						if (!true) {
							context$3$0.next = 26;
							break;
						}

						currkey = nextkey;
						buffer = [item];

					case 10:
						if (!true) {
							context$3$0.next = 23;
							break;
						}

						current = next(iterator);

						if (!current.done) {
							context$3$0.next = 14;
							break;
						}

						return context$3$0.abrupt("break", 26);

					case 14:

						item = current.value;

						nextkey = key(item);

						if (!(nextkey !== currkey)) {
							context$3$0.next = 20;
							break;
						}

						context$3$0.next = 19;
						return [currkey, buffer];

					case 19:
						return context$3$0.abrupt("continue", 7);

					case 20:

						buffer.push(item);

						context$3$0.next = 10;
						break;

					case 23:
						return context$3$0.abrupt("break", 26);

					case 26:
						context$3$0.next = 28;
						return [currkey, buffer];

					case 28:
					case "end":
						return context$3$0.stop();
				}
			}, group, this);
		});

		exports.group = group;
		exports.groupby = group;

		/* js/src/map/map.js */

		var map = regeneratorRuntime.mark(function map(callable, iterable) {
			var _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, item;

			return regeneratorRuntime.wrap(function map$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion8 = true;
						_didIteratorError8 = false;
						_iteratorError8 = undefined;
						context$3$0.prev = 3;
						_iterator8 = iterable[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
							context$3$0.next = 12;
							break;
						}

						item = _step8.value;
						context$3$0.next = 9;
						return callable(item);

					case 9:
						_iteratorNormalCompletion8 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError8 = true;
						_iteratorError8 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
							_iterator8["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError8) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError8;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, map, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		exports.map = map;

		/* js/src/map/nrepeat.js */

		var nrepeat = regeneratorRuntime.mark(function nrepeat(item, times) {
			return regeneratorRuntime.wrap(function nrepeat$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!(times-- > 0)) {
							context$3$0.next = 5;
							break;
						}

						context$3$0.next = 3;
						return item;

					case 3:
						context$3$0.next = 0;
						break;

					case 5:
					case "end":
						return context$3$0.stop();
				}
			}, nrepeat, this);
		});

		exports.nrepeat = nrepeat;

		/* js/src/map/permutations.js */

		var permutations = regeneratorRuntime.mark(function permutations(iterable, r) {
			var pool, len, indices, cycles, i, j, _ref;

			return regeneratorRuntime.wrap(function permutations$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						pool = list(iterable);
						len = pool.length;

						if (!(r > len)) {
							context$3$0.next = 4;
							break;
						}

						return context$3$0.abrupt("return");

					case 4:
						indices = list(range(0, len, 1));
						cycles = list(range(len, len - r, -1));
						context$3$0.next = 8;
						return list(pick(pool, head(indices, r)));

					case 8:
						if (!(r === 0 || len === 0)) {
							context$3$0.next = 10;
							break;
						}

						return context$3$0.abrupt("return");

					case 10:
						if (!true) {
							context$3$0.next = 32;
							break;
						}

						i = r;

					case 12:
						if (! i--) {
							context$3$0.next = 28;
							break;
						}

						--cycles[i];

						if (!(cycles[i] === 0)) {
							context$3$0.next = 19;
							break;
						}

						indices.push(indices.splice(i, 1)[0]);

						cycles[i] = len - i;

						context$3$0.next = 26;
						break;

					case 19:
						j = cycles[i];
						_ref = [indices[len - j], indices[i]];
						indices[i] = _ref[0];
						indices[len - j] = _ref[1];
						context$3$0.next = 25;
						return list(pick(pool, head(indices, r)));

					case 25:
						return context$3$0.abrupt("break", 28);

					case 26:
						context$3$0.next = 12;
						break;

					case 28:
						if (!(i === -1)) {
							context$3$0.next = 30;
							break;
						}

						return context$3$0.abrupt("return");

					case 30:
						context$3$0.next = 10;
						break;

					case 32:
					case "end":
						return context$3$0.stop();
				}
			}, permutations, this);
		});

		exports.permutations = permutations;

		/* js/src/map/product.js */

		var product = regeneratorRuntime.mark(function product(iterables, r) {
			var pools;
			return regeneratorRuntime.wrap(function product$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						pools = list(ncycle(reversed(map(list, iterables)), r));
						return context$3$0.delegateYield(map(list, _product(pools, 0, pools.length)), "t0", 2);

					case 2:
					case "end":
						return context$3$0.stop();
				}
			}, product, this);
		});

		exports.product = product;

		/* js/src/map/repeat.js */

		var repeat = regeneratorRuntime.mark(function repeat(item) {
			return regeneratorRuntime.wrap(function repeat$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!true) {
							context$3$0.next = 5;
							break;
						}

						context$3$0.next = 3;
						return item;

					case 3:
						context$3$0.next = 0;
						break;

					case 5:
					case "end":
						return context$3$0.stop();
				}
			}, repeat, this);
		});

		exports.repeat = repeat;

		/* js/src/map/reversed.js */

		var reversed = regeneratorRuntime.mark(function reversed(iterable) {
			var buffer, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, item;

			return regeneratorRuntime.wrap(function reversed$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						buffer = [];
						_iteratorNormalCompletion9 = true;
						_didIteratorError9 = false;
						_iteratorError9 = undefined;
						context$3$0.prev = 4;

						for (_iterator9 = iterable[Symbol.iterator](); !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
							item = _step9.value;
							buffer.push(item);
						}context$3$0.next = 12;
						break;

					case 8:
						context$3$0.prev = 8;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError9 = true;
						_iteratorError9 = context$3$0.t0;

					case 12:
						context$3$0.prev = 12;
						context$3$0.prev = 13;

						if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
							_iterator9["return"]();
						}

					case 15:
						context$3$0.prev = 15;

						if (!_didIteratorError9) {
							context$3$0.next = 18;
							break;
						}

						throw _iteratorError9;

					case 18:
						return context$3$0.finish(15);

					case 19:
						return context$3$0.finish(12);

					case 20:
						if (!buffer.length) {
							context$3$0.next = 25;
							break;
						}

						context$3$0.next = 23;
						return buffer.pop();

					case 23:
						context$3$0.next = 20;
						break;

					case 25:
					case "end":
						return context$3$0.stop();
				}
			}, reversed, this, [[4, 8, 12, 20], [13,, 15, 19]]);
		});

		exports.reversed = reversed;

		/* js/src/map/roundrobin.js */

		var roundrobin = regeneratorRuntime.mark(function roundrobin(iterables) {
			var pending, iterators, iterator, it;
			return regeneratorRuntime.wrap(function roundrobin$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						pending = len(iterables);
						iterators = cycle(map(iter, iterables));

					case 2:
						if (!pending) {
							context$3$0.next = 16;
							break;
						}

					case 3:
						if (!true) {
							context$3$0.next = 12;
							break;
						}

						iterator = next(iterators).value;
						it = next(iterator);

						if (!it.done) {
							context$3$0.next = 8;
							break;
						}

						return context$3$0.abrupt("break", 12);

					case 8:
						context$3$0.next = 10;
						return it.value;

					case 10:
						context$3$0.next = 3;
						break;

					case 12:

						--pending;

						iterators = cycle(slice(iterators, 0, pending, 1));

						context$3$0.next = 2;
						break;

					case 16:
					case "end":
						return context$3$0.stop();
				}
			}, roundrobin, this);
		});

		exports.roundrobin = roundrobin;

		/* js/src/map/slice.js */

		var slice = regeneratorRuntime.mark(function slice(iterable, start, stop, step) {
			var iterator, current, n;
			return regeneratorRuntime.wrap(function slice$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						iterator = iter(iterable);

					case 1:
						if (!(start > 0)) {
							context$3$0.next = 8;
							break;
						}

						if (!next(iterator).done) {
							context$3$0.next = 4;
							break;
						}

						return context$3$0.abrupt("return");

					case 4:

						--start;
						--stop;

						context$3$0.next = 1;
						break;

					case 8:
						if (!(stop > 0)) {
							context$3$0.next = 24;
							break;
						}

						current = next(iterator);

						if (!current.done) {
							context$3$0.next = 12;
							break;
						}

						return context$3$0.abrupt("return");

					case 12:
						context$3$0.next = 14;
						return current.value;

					case 14:

						--stop;

						n = step;

					case 16:
						if (!(n > 1)) {
							context$3$0.next = 22;
							break;
						}

						if (!next(iterator).done) {
							context$3$0.next = 19;
							break;
						}

						return context$3$0.abrupt("return");

					case 19:

						--n;

						context$3$0.next = 16;
						break;

					case 22:
						context$3$0.next = 8;
						break;

					case 24:
					case "end":
						return context$3$0.stop();
				}
			}, slice, this);
		});

		exports.slice = slice;

		/* js/src/map/sorted.js */

		var sorted = function sorted(compare, iterable) {

			return list(iterable).sort(compare);
		};

		exports.sorted = sorted;

		/* js/src/map/starmap.js */

		var starmap = regeneratorRuntime.mark(function starmap(callable, iterable) {
			var _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, item;

			return regeneratorRuntime.wrap(function starmap$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion10 = true;
						_didIteratorError10 = false;
						_iteratorError10 = undefined;
						context$3$0.prev = 3;
						_iterator10 = iterable[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
							context$3$0.next = 12;
							break;
						}

						item = _step10.value;
						context$3$0.next = 9;
						return callable.apply(null, item);

					case 9:
						_iteratorNormalCompletion10 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError10 = true;
						_iteratorError10 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
							_iterator10["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError10) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError10;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, starmap, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		exports.starmap = starmap;

		/* js/src/map/takewhile.js */

		var takewhile = regeneratorRuntime.mark(function takewhile(predicate, iterable) {
			var _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, item;

			return regeneratorRuntime.wrap(function takewhile$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion11 = true;
						_didIteratorError11 = false;
						_iteratorError11 = undefined;
						context$3$0.prev = 3;
						_iterator11 = iterable[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
							context$3$0.next = 14;
							break;
						}

						item = _step11.value;

						if (predicate(item)) {
							context$3$0.next = 9;
							break;
						}

						return context$3$0.abrupt("return");

					case 9:
						context$3$0.next = 11;
						return item;

					case 11:
						_iteratorNormalCompletion11 = true;
						context$3$0.next = 5;
						break;

					case 14:
						context$3$0.next = 20;
						break;

					case 16:
						context$3$0.prev = 16;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError11 = true;
						_iteratorError11 = context$3$0.t0;

					case 20:
						context$3$0.prev = 20;
						context$3$0.prev = 21;

						if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
							_iterator11["return"]();
						}

					case 23:
						context$3$0.prev = 23;

						if (!_didIteratorError11) {
							context$3$0.next = 26;
							break;
						}

						throw _iteratorError11;

					case 26:
						return context$3$0.finish(23);

					case 27:
						return context$3$0.finish(20);

					case 28:
					case "end":
						return context$3$0.stop();
				}
			}, takewhile, this, [[3, 16, 20, 28], [21,, 23, 27]]);
		});

		exports.takewhile = takewhile;

		/* js/src/map/zip.js */

		var zip = regeneratorRuntime.mark(function zip(iterables) {
			var iterators, buffer, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, result;

			return regeneratorRuntime.wrap(function zip$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						iterators = list(map(iter, iterables));

						if (!(iterators.length === 0)) {
							context$3$0.next = 3;
							break;
						}

						return context$3$0.abrupt("return");

					case 3:
						if (!true) {
							context$3$0.next = 36;
							break;
						}

						buffer = [];
						_iteratorNormalCompletion12 = true;
						_didIteratorError12 = false;
						_iteratorError12 = undefined;
						context$3$0.prev = 8;
						_iterator12 = map(next, iterators)[Symbol.iterator]();

					case 10:
						if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
							context$3$0.next = 18;
							break;
						}

						result = _step12.value;

						if (!result.done) {
							context$3$0.next = 14;
							break;
						}

						return context$3$0.abrupt("return");

					case 14:

						buffer.push(result.value);

					case 15:
						_iteratorNormalCompletion12 = true;
						context$3$0.next = 10;
						break;

					case 18:
						context$3$0.next = 24;
						break;

					case 20:
						context$3$0.prev = 20;
						context$3$0.t0 = context$3$0["catch"](8);
						_didIteratorError12 = true;
						_iteratorError12 = context$3$0.t0;

					case 24:
						context$3$0.prev = 24;
						context$3$0.prev = 25;

						if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
							_iterator12["return"]();
						}

					case 27:
						context$3$0.prev = 27;

						if (!_didIteratorError12) {
							context$3$0.next = 30;
							break;
						}

						throw _iteratorError12;

					case 30:
						return context$3$0.finish(27);

					case 31:
						return context$3$0.finish(24);

					case 32:
						context$3$0.next = 34;
						return buffer;

					case 34:
						context$3$0.next = 3;
						break;

					case 36:
					case "end":
						return context$3$0.stop();
				}
			}, zip, this, [[8, 20, 24, 32], [25,, 27, 31]]);
		});

		exports.zip = zip;

		/* js/src/reduce */
		/* js/src/reduce/all.js */

		var all = function all(iterable) {
			var _iteratorNormalCompletion13 = true;
			var _didIteratorError13 = false;
			var _iteratorError13 = undefined;

			try {

				for (var _iterator13 = iterable[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
					var item = _step13.value;

					if (!item) return false;
				}
			} catch (err) {
				_didIteratorError13 = true;
				_iteratorError13 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
						_iterator13["return"]();
					}
				} finally {
					if (_didIteratorError13) {
						throw _iteratorError13;
					}
				}
			}

			return true;
		};

		exports.all = all;

		/* js/src/reduce/any.js */

		var any = function any(iterable) {
			var _iteratorNormalCompletion14 = true;
			var _didIteratorError14 = false;
			var _iteratorError14 = undefined;

			try {

				for (var _iterator14 = iterable[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
					var item = _step14.value;

					if (item) return true;
				}
			} catch (err) {
				_didIteratorError14 = true;
				_iteratorError14 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion14 && _iterator14["return"]) {
						_iterator14["return"]();
					}
				} finally {
					if (_didIteratorError14) {
						throw _iteratorError14;
					}
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

			if (first.done) return undefined;

			var largest = first.value;

			var _iteratorNormalCompletion15 = true;
			var _didIteratorError15 = false;
			var _iteratorError15 = undefined;

			try {
				for (var _iterator15 = iterator[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
					var candidate = _step15.value;

					if (compare(candidate, largest) > 0) {

						largest = candidate;
					}
				}
			} catch (err) {
				_didIteratorError15 = true;
				_iteratorError15 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion15 && _iterator15["return"]) {
						_iterator15["return"]();
					}
				} finally {
					if (_didIteratorError15) {
						throw _iteratorError15;
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

			if (first.done) return undefined;

			var smallest = first.value;

			var _iteratorNormalCompletion16 = true;
			var _didIteratorError16 = false;
			var _iteratorError16 = undefined;

			try {
				for (var _iterator16 = iterator[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
					var candidate = _step16.value;

					if (compare(candidate, smallest) < 0) {

						smallest = candidate;
					}
				}
			} catch (err) {
				_didIteratorError16 = true;
				_iteratorError16 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion16 && _iterator16["return"]) {
						_iterator16["return"]();
					}
				} finally {
					if (_didIteratorError16) {
						throw _iteratorError16;
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
   */

		var reduce = function reduce(accumulator, iterable, initializer) {
			var _iteratorNormalCompletion17 = true;
			var _didIteratorError17 = false;
			var _iteratorError17 = undefined;

			try {

				for (var _iterator17 = iterable[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
					var item = _step17.value;

					initializer = accumulator(initializer, item);
				}
			} catch (err) {
				_didIteratorError17 = true;
				_iteratorError17 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion17 && _iterator17["return"]) {
						_iterator17["return"]();
					}
				} finally {
					if (_didIteratorError17) {
						throw _iteratorError17;
					}
				}
			}

			return initializer;
		};

		exports.reduce = reduce;

		/* js/src/reduce/some.js */

		var some = function some(iterable, n) {

			if (n <= 0) return true;

			var _iteratorNormalCompletion18 = true;
			var _didIteratorError18 = false;
			var _iteratorError18 = undefined;

			try {
				for (var _iterator18 = iterable[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
					var item = _step18.value;

					if (item && --n === 0) return true;
				}
			} catch (err) {
				_didIteratorError18 = true;
				_iteratorError18 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion18 && _iterator18["return"]) {
						_iterator18["return"]();
					}
				} finally {
					if (_didIteratorError18) {
						throw _iteratorError18;
					}
				}
			}

			return false;
		};

		exports.some = some;

		/* js/src/reduce/sum.js */

		var sum = function sum(iterable) {

			var result = 0;

			var _iteratorNormalCompletion19 = true;
			var _didIteratorError19 = false;
			var _iteratorError19 = undefined;

			try {
				for (var _iterator19 = iterable[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
					var item = _step19.value;
					result += item;
				}
			} catch (err) {
				_didIteratorError19 = true;
				_iteratorError19 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion19 && _iterator19["return"]) {
						_iterator19["return"]();
					}
				} finally {
					if (_didIteratorError19) {
						throw _iteratorError19;
					}
				}
			}

			return result;
		};

		exports.sum = sum;

		/* js/src/utils */
		/* js/src/utils/consume.js */

		var consume = function consume(iterator, n) {

			while (n-- > 0 && !next(iterator).done);
		};

		exports.consume = consume;

		/* js/src/utils/count.js */

		var count = regeneratorRuntime.mark(function count(start, step) {
			return regeneratorRuntime.wrap(function count$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!true) {
							context$3$0.next = 6;
							break;
						}

						context$3$0.next = 3;
						return start;

					case 3:

						start += step;

						context$3$0.next = 0;
						break;

					case 6:
					case "end":
						return context$3$0.stop();
				}
			}, count, this);
		});

		exports.count = count;

		/* js/src/utils/cycle.js */

		var cycle = regeneratorRuntime.mark(function cycle(iterable) {
			var buffer, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, item;

			return regeneratorRuntime.wrap(function cycle$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						buffer = [];
						_iteratorNormalCompletion20 = true;
						_didIteratorError20 = false;
						_iteratorError20 = undefined;
						context$3$0.prev = 4;
						_iterator20 = iterable[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done) {
							context$3$0.next = 14;
							break;
						}

						item = _step20.value;
						context$3$0.next = 10;
						return item;

					case 10:
						buffer.push(item);

					case 11:
						_iteratorNormalCompletion20 = true;
						context$3$0.next = 6;
						break;

					case 14:
						context$3$0.next = 20;
						break;

					case 16:
						context$3$0.prev = 16;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError20 = true;
						_iteratorError20 = context$3$0.t0;

					case 20:
						context$3$0.prev = 20;
						context$3$0.prev = 21;

						if (!_iteratorNormalCompletion20 && _iterator20["return"]) {
							_iterator20["return"]();
						}

					case 23:
						context$3$0.prev = 23;

						if (!_didIteratorError20) {
							context$3$0.next = 26;
							break;
						}

						throw _iteratorError20;

					case 26:
						return context$3$0.finish(23);

					case 27:
						return context$3$0.finish(20);

					case 28:
						if (!(buffer.length === 0)) {
							context$3$0.next = 30;
							break;
						}

						return context$3$0.abrupt("return");

					case 30:
						if (!true) {
							context$3$0.next = 34;
							break;
						}

						return context$3$0.delegateYield(buffer, "t1", 32);

					case 32:
						context$3$0.next = 30;
						break;

					case 34:
					case "end":
						return context$3$0.stop();
				}
			}, cycle, this, [[4, 16, 20, 28], [21,, 23, 27]]);
		});

		exports.cycle = cycle;

		/* js/src/utils/exhaust.js */

		var exhaust = function exhaust(iterator) {
			var _iteratorNormalCompletion21 = true;
			var _didIteratorError21 = false;
			var _iteratorError21 = undefined;

			try {

				for (var _iterator21 = iterator[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
					var item = _step21.value;
				}
			} catch (err) {
				_didIteratorError21 = true;
				_iteratorError21 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion21 && _iterator21["return"]) {
						_iterator21["return"]();
					}
				} finally {
					if (_didIteratorError21) {
						throw _iteratorError21;
					}
				}
			}
		};

		exports.exhaust = exhaust;

		/* js/src/utils/head.js */

		var head = regeneratorRuntime.mark(function head(iterable, n) {
			var iterator, current;
			return regeneratorRuntime.wrap(function head$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						iterator = iter(iterable);

					case 1:
						if (!(n-- > 0)) {
							context$3$0.next = 9;
							break;
						}

						current = next(iterator);

						if (!current.done) {
							context$3$0.next = 5;
							break;
						}

						return context$3$0.abrupt("return");

					case 5:
						context$3$0.next = 7;
						return current.value;

					case 7:
						context$3$0.next = 1;
						break;

					case 9:
					case "end":
						return context$3$0.stop();
				}
			}, head, this);
		});

		exports.head = head;

		/* js/src/utils/iter.js */

		var iter = function iter(iterable) {

			return iterable[Symbol.iterator]();
		};

		exports.iter = iter;

		/* js/src/utils/len.js */

		var len = function len(list) {

			return list.length;
		};

		exports.len = len;

		/* js/src/utils/list.js */

		var list = function list(iterable) {

			var buffer = [];

			var _iteratorNormalCompletion22 = true;
			var _didIteratorError22 = false;
			var _iteratorError22 = undefined;

			try {
				for (var _iterator22 = iterable[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
					var item = _step22.value;
					buffer.push(item);
				}
			} catch (err) {
				_didIteratorError22 = true;
				_iteratorError22 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion22 && _iterator22["return"]) {
						_iterator22["return"]();
					}
				} finally {
					if (_didIteratorError22) {
						throw _iteratorError22;
					}
				}
			}

			return buffer;
		};

		exports.list = list;

		/* js/src/utils/ncycle.js */

		var ncycle = regeneratorRuntime.mark(function ncycle(iterable, n) {
			var buffer, _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _iterator23, _step23, item;

			return regeneratorRuntime.wrap(function ncycle$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						buffer = [];
						_iteratorNormalCompletion23 = true;
						_didIteratorError23 = false;
						_iteratorError23 = undefined;
						context$3$0.prev = 4;
						_iterator23 = iterable[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done) {
							context$3$0.next = 14;
							break;
						}

						item = _step23.value;
						context$3$0.next = 10;
						return item;

					case 10:
						buffer.push(item);

					case 11:
						_iteratorNormalCompletion23 = true;
						context$3$0.next = 6;
						break;

					case 14:
						context$3$0.next = 20;
						break;

					case 16:
						context$3$0.prev = 16;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError23 = true;
						_iteratorError23 = context$3$0.t0;

					case 20:
						context$3$0.prev = 20;
						context$3$0.prev = 21;

						if (!_iteratorNormalCompletion23 && _iterator23["return"]) {
							_iterator23["return"]();
						}

					case 23:
						context$3$0.prev = 23;

						if (!_didIteratorError23) {
							context$3$0.next = 26;
							break;
						}

						throw _iteratorError23;

					case 26:
						return context$3$0.finish(23);

					case 27:
						return context$3$0.finish(20);

					case 28:
						if (!(buffer.length === 0)) {
							context$3$0.next = 30;
							break;
						}

						return context$3$0.abrupt("return");

					case 30:
						if (!(--n > 0)) {
							context$3$0.next = 34;
							break;
						}

						return context$3$0.delegateYield(buffer, "t1", 32);

					case 32:
						context$3$0.next = 30;
						break;

					case 34:
					case "end":
						return context$3$0.stop();
				}
			}, ncycle, this, [[4, 16, 20, 28], [21,, 23, 27]]);
		});

		exports.ncycle = ncycle;

		/* js/src/utils/next.js */

		var next = function next(iterator) {

			return iterator.next();
		};

		exports.next = next;

		/* js/src/utils/pick.js */

		var pick = regeneratorRuntime.mark(function pick(object, iterable) {
			var _iteratorNormalCompletion24, _didIteratorError24, _iteratorError24, _iterator24, _step24, key;

			return regeneratorRuntime.wrap(function pick$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion24 = true;
						_didIteratorError24 = false;
						_iteratorError24 = undefined;
						context$3$0.prev = 3;
						_iterator24 = iterable[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done) {
							context$3$0.next = 12;
							break;
						}

						key = _step24.value;
						context$3$0.next = 9;
						return object[key];

					case 9:
						_iteratorNormalCompletion24 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError24 = true;
						_iteratorError24 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion24 && _iterator24["return"]) {
							_iterator24["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError24) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError24;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, pick, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		exports.pick = pick;

		/* js/src/utils/range.js */

		var range = regeneratorRuntime.mark(function range(start, stop, step) {
			return regeneratorRuntime.wrap(function range$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!(step < 0)) {
							context$3$0.next = 9;
							break;
						}

					case 1:
						if (!(start > stop)) {
							context$3$0.next = 7;
							break;
						}

						context$3$0.next = 4;
						return start;

					case 4:
						start += step;
						context$3$0.next = 1;
						break;

					case 7:
						context$3$0.next = 15;
						break;

					case 9:
						if (!(start < stop)) {
							context$3$0.next = 15;
							break;
						}

						context$3$0.next = 12;
						return start;

					case 12:
						start += step;
						context$3$0.next = 9;
						break;

					case 15:
					case "end":
						return context$3$0.stop();
				}
			}, range, this);
		});

		exports.range = range;

		/* js/src/utils/tee.js */

		var tee = function tee(iterable, n) {

			var iterator = iter(iterable);

			var deques = [];

			while (n-- > 0) deques.push([]);

			var gen = regeneratorRuntime.mark(function gen(mydeque) {
				var current, _iteratorNormalCompletion25, _didIteratorError25, _iteratorError25, _iterator25, _step25, deque;

				return regeneratorRuntime.wrap(function gen$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							if (!true) {
								context$4$0.next = 28;
								break;
							}

							if (!(mydeque.length === 0)) {
								context$4$0.next = 24;
								break;
							}

							current = next(iterator);

							if (!current.done) {
								context$4$0.next = 5;
								break;
							}

							return context$4$0.abrupt("return");

						case 5:
							_iteratorNormalCompletion25 = true;
							_didIteratorError25 = false;
							_iteratorError25 = undefined;
							context$4$0.prev = 8;

							for (_iterator25 = deques[Symbol.iterator](); !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
								deque = _step25.value;
								deque.push(current.value);
							}context$4$0.next = 16;
							break;

						case 12:
							context$4$0.prev = 12;
							context$4$0.t0 = context$4$0["catch"](8);
							_didIteratorError25 = true;
							_iteratorError25 = context$4$0.t0;

						case 16:
							context$4$0.prev = 16;
							context$4$0.prev = 17;

							if (!_iteratorNormalCompletion25 && _iterator25["return"]) {
								_iterator25["return"]();
							}

						case 19:
							context$4$0.prev = 19;

							if (!_didIteratorError25) {
								context$4$0.next = 22;
								break;
							}

							throw _iteratorError25;

						case 22:
							return context$4$0.finish(19);

						case 23:
							return context$4$0.finish(16);

						case 24:
							context$4$0.next = 26;
							return mydeque.shift();

						case 26:
							context$4$0.next = 0;
							break;

						case 28:
						case "end":
							return context$4$0.stop();
					}
				}, gen, this, [[8, 12, 16, 24], [17,, 19, 23]]);
			});

			return list(map(gen, deques));
		};

		exports.tee = tee;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-itertools", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["itertools"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-itertools");
})();

// combinations('ABCD', 2) --> AB AC AD BC BD CD
// combinations(range(4), 3) --> 012 013 023 123

// combinationswithrepetition('ABC', 1) --> A B C
// combinationswithrepetition(range(3), 2) --> 00 01 02 11 12 22

// equivalent to return chain( [ [ item ] , iterator ] ) ;

// permutations('ABCD', 2) --> AB AC AD BA BC BD CA CB CD DA DB DC
// permutations(range(3), 3) --> 012 021 102 120 201 210

// product(['ABCD', 'xy'], 1) --> Ax Ay Bx By Cx Cy Dx Dy
// product([range(0, 2, 1)], 3) --> 000 001 010 011 100 101 110 111

// roundrobin('ABC', 'D', 'EF') --> A D E B F C
// Recipe credited to George Sakkis