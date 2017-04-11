'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.groupby = undefined;
exports.group = group;

var _ = require('..');

var _marked = [group].map(regeneratorRuntime.mark);

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
					grouper = regeneratorRuntime.mark(function grouper(tgtkey) {
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
	}, _marked[0], this);
}

/**
 * Same as {@link group}.
 * @function groupby
 */
var groupby = exports.groupby = group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZ3JvdXAuanMiXSwibmFtZXMiOlsiZ3JvdXAiLCJrZXkiLCJpdGVyYWJsZSIsIml0ZXJhdG9yIiwiZmlyc3QiLCJuZXh0IiwiZG9uZSIsImN1cnJ2YWwiLCJ2YWx1ZSIsImN1cnJrZXkiLCJncm91cGVyIiwidGd0a2V5IiwiZXZlbnQiLCJnIiwiZ3JvdXBieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBbUJpQkEsSyxHQUFBQSxLOztBQW5CakI7O2VBbUJpQkEsSzs7QUFqQmpCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxTQUFVQSxLQUFWLENBQWtCQyxHQUFsQixFQUF3QkMsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLGFBRkUsR0FFUyxZQUFNRCxRQUFOLENBRlQ7QUFJRkUsVUFKRSxHQUlNRCxTQUFTRSxJQUFULEVBSk47O0FBQUEsVUFNREQsTUFBTUUsSUFOTDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVFGQyxZQVJFLEdBUVFILE1BQU1JLEtBUmQ7QUFTRkMsWUFURSxHQVNRUixJQUFLTSxPQUFMLENBVFI7QUFXQUcsWUFYQSwyQkFXVSxTQUFWQSxPQUFVLENBQVlDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFUCxJQUZPO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBSVJKLE9BSlE7O0FBQUE7QUFNVkssZUFOVSxHQU1GVCxTQUFTRSxJQUFULEVBTkU7O0FBQUEsZUFPVE8sTUFBTU4sSUFQRztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFTZEMsb0JBQVVLLE1BQU1KLEtBQWhCO0FBQ0FDLG9CQUFVUixJQUFLTSxPQUFMLENBQVY7O0FBVmMsZ0JBWVRFLFlBQVlFLE1BWkg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFWRCxPQUFVO0FBQUEsTUFYVjs7QUFBQTtBQUFBLFVBNkJFLElBN0JGO0FBQUE7QUFBQTtBQUFBOztBQStCQ0MsV0EvQkQsR0ErQlVGLE9BL0JWO0FBaUNDSSxNQWpDRCxHQWlDS0gsUUFBU0MsTUFBVCxDQWpDTDtBQUFBO0FBQUEsWUFtQ0MsQ0FBRUEsTUFBRixFQUFXRSxDQUFYLENBbkNEOztBQUFBO0FBQUEsV0FxQ0dKLFlBQVlFLE1BckNmO0FBQUE7QUFBQTtBQUFBOztBQXVDQUMsVUF2Q0EsR0F1Q1FULFNBQVNFLElBQVQsRUF2Q1I7O0FBQUEsVUF3Q0NPLE1BQU1OLElBeENQO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQTBDSkMsZUFBVUssTUFBTUosS0FBaEI7QUFDQUMsZUFBVVIsSUFBS00sT0FBTCxDQUFWOztBQTNDSTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtRFA7Ozs7QUFJTyxJQUFNTyw0QkFBVWQsS0FBaEIiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBZaWVsZHMgZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGJ5IGdyb3VwaW5nIHRoZW0gaW50byB0dXBsZXNcbiAqIGNvbnNlY3V0aXZlIGVsZW1lbnRzIGZyb20gdGhlIHNhbWUgZXF1aXZhbGVuY2UgY2xhc3MuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEEgQiBDIEQgQSBCXG4gKiBsaXN0KCBtYXAoICggayAsIGcgKSA9PiBrICwgZ3JvdXBieSgnQUFBQUJCQkNDREFBQkJCJykgKSApXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFBQUEgQkJCIENDIERcbiAqIGxpc3QoIG1hcCggKCBrICwgZyApID0+IGxpc3QoIGcgKSAsIGdyb3VwYnkoJ0FBQUFCQkJDQ0QnKSApIClcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXkgLSBUaGUgZnVuY3Rpb24gdXNlZCB0byBkZXRlcm1pbmUgdGhlIGVxdWl2YWxlbmNlIGNsYXNzXG4gKiBvZiBhbiBlbGVtZW50LlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZ3JvdXAgKCBrZXkgLCBpdGVyYWJsZSApIHtcblxuXHRsZXQgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRsZXQgZmlyc3QgPSBpdGVyYXRvci5uZXh0KCkgO1xuXG5cdGlmICggZmlyc3QuZG9uZSApIHJldHVybiA7XG5cblx0bGV0IGN1cnJ2YWwgPSBmaXJzdC52YWx1ZSA7XG5cdGxldCBjdXJya2V5ID0ga2V5KCBjdXJydmFsICkgO1xuXG5cdGNvbnN0IGdyb3VwZXIgPSBmdW5jdGlvbiogKCB0Z3RrZXkgKSB7XG5cblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdHlpZWxkIGN1cnJ2YWwgO1xuXG5cdFx0XHRsZXQgZXZlbnQgPSBpdGVyYXRvci5uZXh0KCApIDtcblx0XHRcdGlmICggZXZlbnQuZG9uZSApIHJldHVybiA7XG5cblx0XHRcdGN1cnJ2YWwgPSBldmVudC52YWx1ZSA7XG5cdFx0XHRjdXJya2V5ID0ga2V5KCBjdXJydmFsICkgO1xuXG5cdFx0XHRpZiAoIGN1cnJrZXkgIT09IHRndGtleSApIHJldHVybiA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgdGd0a2V5ID0gY3VycmtleSA7XG5cblx0XHRjb25zdCBnID0gZ3JvdXBlciggdGd0a2V5ICkgO1xuXG5cdFx0eWllbGQgWyB0Z3RrZXkgLCBnIF0gO1xuXG5cdFx0d2hpbGUgKCBjdXJya2V5ID09PSB0Z3RrZXkgKSB7XG5cblx0XHRcdGxldCBldmVudCA9IGl0ZXJhdG9yLm5leHQoICkgO1xuXHRcdFx0aWYgKCBldmVudC5kb25lICkgcmV0dXJuIDtcblxuXHRcdFx0Y3VycnZhbCA9IGV2ZW50LnZhbHVlIDtcblx0XHRcdGN1cnJrZXkgPSBrZXkoIGN1cnJ2YWwgKSA7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qKlxuICogU2FtZSBhcyB7QGxpbmsgZ3JvdXB9LlxuICogQGZ1bmN0aW9uIGdyb3VwYnlcbiAqL1xuZXhwb3J0IGNvbnN0IGdyb3VwYnkgPSBncm91cCA7XG4iXX0=