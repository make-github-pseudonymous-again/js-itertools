'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.groupby = undefined;
exports.group = group;

var _ = require('..');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(group);

/**
 * Yields elements of the input iterable by grouping them into tuples
 * consecutive elements from the same equivalence class.
 *
 * @example
 * // A B C D A B
 * list( map( ( k , g ) => k , groupby('AAAABBBCCDAABBB') ) )
 *
 * @example
 * // AAAA BBB CC D
 * list( map( ( k , g ) => list( g ) , groupby('AAAABBBCCD') ) )
 *
 * @param {Function} key - The function used to determine the equivalence class
 * of an element.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function group(key, iterable) {
	var iterator, first, currval, currkey, grouper, tgtkey, g, event;
	return regeneratorRuntime.wrap(function group$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					iterator = (0, _.iter)(iterable);
					first = iterator.next();

					if (!first.done) {
						_context2.next = 4;
						break;
					}

					return _context2.abrupt('return');

				case 4:
					currval = first.value;
					currkey = key(currval);
					grouper = /*#__PURE__*/regeneratorRuntime.mark(function grouper(tgtkey) {
						var event;
						return regeneratorRuntime.wrap(function grouper$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										if (!true) {
											_context.next = 12;
											break;
										}

										_context.next = 3;
										return currval;

									case 3:
										event = iterator.next();

										if (!event.done) {
											_context.next = 6;
											break;
										}

										return _context.abrupt('return');

									case 6:

										currval = event.value;
										currkey = key(currval);

										if (!(currkey !== tgtkey)) {
											_context.next = 10;
											break;
										}

										return _context.abrupt('return');

									case 10:
										_context.next = 0;
										break;

									case 12:
									case 'end':
										return _context.stop();
								}
							}
						}, grouper, this);
					});

				case 7:
					if (!true) {
						_context2.next = 22;
						break;
					}

					tgtkey = currkey;
					g = grouper(tgtkey);
					_context2.next = 12;
					return [tgtkey, g];

				case 12:
					if (!(currkey === tgtkey)) {
						_context2.next = 20;
						break;
					}

					event = iterator.next();

					if (!event.done) {
						_context2.next = 16;
						break;
					}

					return _context2.abrupt('return');

				case 16:

					currval = event.value;
					currkey = key(currval);

					_context2.next = 12;
					break;

				case 20:
					_context2.next = 7;
					break;

				case 22:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked, this);
}

/**
 * Same as {@link group}.
 * @function groupby
 */
var groupby = exports.groupby = group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZ3JvdXAuanMiXSwibmFtZXMiOlsiZ3JvdXAiLCJrZXkiLCJpdGVyYWJsZSIsIml0ZXJhdG9yIiwiZmlyc3QiLCJuZXh0IiwiZG9uZSIsImN1cnJ2YWwiLCJ2YWx1ZSIsImN1cnJrZXkiLCJncm91cGVyIiwidGd0a2V5IiwiZXZlbnQiLCJnIiwiZ3JvdXBieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBbUJpQkEsSyxHQUFBQSxLOztBQW5CakI7O21EQW1CaUJBLEs7O0FBakJqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk8sU0FBVUEsS0FBVixDQUFrQkMsR0FBbEIsRUFBd0JDLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxhQUZFLEdBRVMsWUFBTUQsUUFBTixDQUZUO0FBSUZFLFVBSkUsR0FJTUQsU0FBU0UsSUFBVCxFQUpOOztBQUFBLFVBTURELE1BQU1FLElBTkw7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFRRkMsWUFSRSxHQVFRSCxNQUFNSSxLQVJkO0FBU0ZDLFlBVEUsR0FTUVIsSUFBS00sT0FBTCxDQVRSO0FBV0FHLFlBWEEsd0NBV1UsU0FBVkEsT0FBVSxDQUFZQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRVAsSUFGTztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUlSSixPQUpROztBQUFBO0FBTVZLLGVBTlUsR0FNRlQsU0FBU0UsSUFBVCxFQU5FOztBQUFBLGVBT1RPLE1BQU1OLElBUEc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBU2RDLG9CQUFVSyxNQUFNSixLQUFoQjtBQUNBQyxvQkFBVVIsSUFBS00sT0FBTCxDQUFWOztBQVZjLGdCQVlURSxZQUFZRSxNQVpIO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBVkQsT0FBVTtBQUFBLE1BWFY7O0FBQUE7QUFBQSxVQTZCRSxJQTdCRjtBQUFBO0FBQUE7QUFBQTs7QUErQkNDLFdBL0JELEdBK0JVRixPQS9CVjtBQWlDQ0ksTUFqQ0QsR0FpQ0tILFFBQVNDLE1BQVQsQ0FqQ0w7QUFBQTtBQUFBLFlBbUNDLENBQUVBLE1BQUYsRUFBV0UsQ0FBWCxDQW5DRDs7QUFBQTtBQUFBLFdBcUNHSixZQUFZRSxNQXJDZjtBQUFBO0FBQUE7QUFBQTs7QUF1Q0FDLFVBdkNBLEdBdUNRVCxTQUFTRSxJQUFULEVBdkNSOztBQUFBLFVBd0NDTyxNQUFNTixJQXhDUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUEwQ0pDLGVBQVVLLE1BQU1KLEtBQWhCO0FBQ0FDLGVBQVVSLElBQUtNLE9BQUwsQ0FBVjs7QUEzQ0k7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbURQOzs7O0FBSU8sSUFBTU8sNEJBQVVkLEtBQWhCIiwiZmlsZSI6Imdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogWWllbGRzIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBpdGVyYWJsZSBieSBncm91cGluZyB0aGVtIGludG8gdHVwbGVzXG4gKiBjb25zZWN1dGl2ZSBlbGVtZW50cyBmcm9tIHRoZSBzYW1lIGVxdWl2YWxlbmNlIGNsYXNzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBIEIgQyBEIEEgQlxuICogbGlzdCggbWFwKCAoIGsgLCBnICkgPT4gayAsIGdyb3VwYnkoJ0FBQUFCQkJDQ0RBQUJCQicpICkgKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBQUFBIEJCQiBDQyBEXG4gKiBsaXN0KCBtYXAoICggayAsIGcgKSA9PiBsaXN0KCBnICkgLCBncm91cGJ5KCdBQUFBQkJCQ0NEJykgKSApXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5IC0gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBlcXVpdmFsZW5jZSBjbGFzc1xuICogb2YgYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIGdyb3VwICgga2V5ICwgaXRlcmFibGUgKSB7XG5cblx0bGV0IGl0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0bGV0IGZpcnN0ID0gaXRlcmF0b3IubmV4dCgpIDtcblxuXHRpZiAoIGZpcnN0LmRvbmUgKSByZXR1cm4gO1xuXG5cdGxldCBjdXJydmFsID0gZmlyc3QudmFsdWUgO1xuXHRsZXQgY3VycmtleSA9IGtleSggY3VycnZhbCApIDtcblxuXHRjb25zdCBncm91cGVyID0gZnVuY3Rpb24qICggdGd0a2V5ICkge1xuXG5cdFx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0XHR5aWVsZCBjdXJydmFsIDtcblxuXHRcdFx0bGV0IGV2ZW50ID0gaXRlcmF0b3IubmV4dCggKSA7XG5cdFx0XHRpZiAoIGV2ZW50LmRvbmUgKSByZXR1cm4gO1xuXG5cdFx0XHRjdXJydmFsID0gZXZlbnQudmFsdWUgO1xuXHRcdFx0Y3VycmtleSA9IGtleSggY3VycnZhbCApIDtcblxuXHRcdFx0aWYgKCBjdXJya2V5ICE9PSB0Z3RrZXkgKSByZXR1cm4gO1xuXG5cdFx0fVxuXG5cdH0gO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IHRndGtleSA9IGN1cnJrZXkgO1xuXG5cdFx0Y29uc3QgZyA9IGdyb3VwZXIoIHRndGtleSApIDtcblxuXHRcdHlpZWxkIFsgdGd0a2V5ICwgZyBdIDtcblxuXHRcdHdoaWxlICggY3VycmtleSA9PT0gdGd0a2V5ICkge1xuXG5cdFx0XHRsZXQgZXZlbnQgPSBpdGVyYXRvci5uZXh0KCApIDtcblx0XHRcdGlmICggZXZlbnQuZG9uZSApIHJldHVybiA7XG5cblx0XHRcdGN1cnJ2YWwgPSBldmVudC52YWx1ZSA7XG5cdFx0XHRjdXJya2V5ID0ga2V5KCBjdXJydmFsICkgO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcbiAqIFNhbWUgYXMge0BsaW5rIGdyb3VwfS5cbiAqIEBmdW5jdGlvbiBncm91cGJ5XG4gKi9cbmV4cG9ydCBjb25zdCBncm91cGJ5ID0gZ3JvdXAgO1xuIl19