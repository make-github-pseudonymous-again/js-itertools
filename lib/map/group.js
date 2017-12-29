'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.groupby = undefined;
exports.group = group;

var _ = require('..');

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
function* group(key, iterable) {

	let iterator = (0, _.iter)(iterable);

	let first = iterator.next();

	if (first.done) return;

	let currval = first.value;
	let currkey = key(currval);

	const grouper = function* (tgtkey) {

		while (true) {

			yield currval;

			let event = iterator.next();
			if (event.done) return;

			currval = event.value;
			currkey = key(currval);

			if (currkey !== tgtkey) return;
		}
	};

	while (true) {

		const tgtkey = currkey;

		const g = grouper(tgtkey);

		yield [tgtkey, g];

		while (currkey === tgtkey) {

			let event = iterator.next();
			if (event.done) return;

			currval = event.value;
			currkey = key(currval);
		}
	}
}

/**
 * Same as {@link group}.
 * @function groupby
 */
const groupby = exports.groupby = group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZ3JvdXAuanMiXSwibmFtZXMiOlsiZ3JvdXAiLCJrZXkiLCJpdGVyYWJsZSIsIml0ZXJhdG9yIiwiZmlyc3QiLCJuZXh0IiwiZG9uZSIsImN1cnJ2YWwiLCJ2YWx1ZSIsImN1cnJrZXkiLCJncm91cGVyIiwidGd0a2V5IiwiZXZlbnQiLCJnIiwiZ3JvdXBieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBbUJpQkEsSyxHQUFBQSxLOztBQW5CakI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFVBQVVBLEtBQVYsQ0FBa0JDLEdBQWxCLEVBQXdCQyxRQUF4QixFQUFtQzs7QUFFekMsS0FBSUMsV0FBVyxZQUFNRCxRQUFOLENBQWY7O0FBRUEsS0FBSUUsUUFBUUQsU0FBU0UsSUFBVCxFQUFaOztBQUVBLEtBQUtELE1BQU1FLElBQVgsRUFBa0I7O0FBRWxCLEtBQUlDLFVBQVVILE1BQU1JLEtBQXBCO0FBQ0EsS0FBSUMsVUFBVVIsSUFBS00sT0FBTCxDQUFkOztBQUVBLE9BQU1HLFVBQVUsV0FBWUMsTUFBWixFQUFxQjs7QUFFcEMsU0FBUSxJQUFSLEVBQWU7O0FBRWQsU0FBTUosT0FBTjs7QUFFQSxPQUFJSyxRQUFRVCxTQUFTRSxJQUFULEVBQVo7QUFDQSxPQUFLTyxNQUFNTixJQUFYLEVBQWtCOztBQUVsQkMsYUFBVUssTUFBTUosS0FBaEI7QUFDQUMsYUFBVVIsSUFBS00sT0FBTCxDQUFWOztBQUVBLE9BQUtFLFlBQVlFLE1BQWpCLEVBQTBCO0FBRTFCO0FBRUQsRUFoQkQ7O0FBa0JBLFFBQVEsSUFBUixFQUFlOztBQUVkLFFBQU1BLFNBQVNGLE9BQWY7O0FBRUEsUUFBTUksSUFBSUgsUUFBU0MsTUFBVCxDQUFWOztBQUVBLFFBQU0sQ0FBRUEsTUFBRixFQUFXRSxDQUFYLENBQU47O0FBRUEsU0FBUUosWUFBWUUsTUFBcEIsRUFBNkI7O0FBRTVCLE9BQUlDLFFBQVFULFNBQVNFLElBQVQsRUFBWjtBQUNBLE9BQUtPLE1BQU1OLElBQVgsRUFBa0I7O0FBRWxCQyxhQUFVSyxNQUFNSixLQUFoQjtBQUNBQyxhQUFVUixJQUFLTSxPQUFMLENBQVY7QUFFQTtBQUVEO0FBRUQ7O0FBRUQ7Ozs7QUFJTyxNQUFNTyw0QkFBVWQsS0FBaEIiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyIH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBZaWVsZHMgZWxlbWVudHMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlIGJ5IGdyb3VwaW5nIHRoZW0gaW50byB0dXBsZXNcbiAqIGNvbnNlY3V0aXZlIGVsZW1lbnRzIGZyb20gdGhlIHNhbWUgZXF1aXZhbGVuY2UgY2xhc3MuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEEgQiBDIEQgQSBCXG4gKiBsaXN0KCBtYXAoICggayAsIGcgKSA9PiBrICwgZ3JvdXBieSgnQUFBQUJCQkNDREFBQkJCJykgKSApXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFBQUEgQkJCIENDIERcbiAqIGxpc3QoIG1hcCggKCBrICwgZyApID0+IGxpc3QoIGcgKSAsIGdyb3VwYnkoJ0FBQUFCQkJDQ0QnKSApIClcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXkgLSBUaGUgZnVuY3Rpb24gdXNlZCB0byBkZXRlcm1pbmUgdGhlIGVxdWl2YWxlbmNlIGNsYXNzXG4gKiBvZiBhbiBlbGVtZW50LlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZ3JvdXAgKCBrZXkgLCBpdGVyYWJsZSApIHtcblxuXHRsZXQgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRsZXQgZmlyc3QgPSBpdGVyYXRvci5uZXh0KCkgO1xuXG5cdGlmICggZmlyc3QuZG9uZSApIHJldHVybiA7XG5cblx0bGV0IGN1cnJ2YWwgPSBmaXJzdC52YWx1ZSA7XG5cdGxldCBjdXJya2V5ID0ga2V5KCBjdXJydmFsICkgO1xuXG5cdGNvbnN0IGdyb3VwZXIgPSBmdW5jdGlvbiogKCB0Z3RrZXkgKSB7XG5cblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdHlpZWxkIGN1cnJ2YWwgO1xuXG5cdFx0XHRsZXQgZXZlbnQgPSBpdGVyYXRvci5uZXh0KCApIDtcblx0XHRcdGlmICggZXZlbnQuZG9uZSApIHJldHVybiA7XG5cblx0XHRcdGN1cnJ2YWwgPSBldmVudC52YWx1ZSA7XG5cdFx0XHRjdXJya2V5ID0ga2V5KCBjdXJydmFsICkgO1xuXG5cdFx0XHRpZiAoIGN1cnJrZXkgIT09IHRndGtleSApIHJldHVybiA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgdGd0a2V5ID0gY3VycmtleSA7XG5cblx0XHRjb25zdCBnID0gZ3JvdXBlciggdGd0a2V5ICkgO1xuXG5cdFx0eWllbGQgWyB0Z3RrZXkgLCBnIF0gO1xuXG5cdFx0d2hpbGUgKCBjdXJya2V5ID09PSB0Z3RrZXkgKSB7XG5cblx0XHRcdGxldCBldmVudCA9IGl0ZXJhdG9yLm5leHQoICkgO1xuXHRcdFx0aWYgKCBldmVudC5kb25lICkgcmV0dXJuIDtcblxuXHRcdFx0Y3VycnZhbCA9IGV2ZW50LnZhbHVlIDtcblx0XHRcdGN1cnJrZXkgPSBrZXkoIGN1cnJ2YWwgKSA7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qKlxuICogU2FtZSBhcyB7QGxpbmsgZ3JvdXB9LlxuICogQGZ1bmN0aW9uIGdyb3VwYnlcbiAqL1xuZXhwb3J0IGNvbnN0IGdyb3VwYnkgPSBncm91cCA7XG4iXX0=