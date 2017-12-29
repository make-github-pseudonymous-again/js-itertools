'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.tee = tee;

var _iter = require('./iter');

var _list = require('./list');

var _map = require('../map/map');

var _jsCollectionsDeque = require('@aureooms/js-collections-deque');

var _jsCollectionsDeque2 = _interopRequireDefault(_jsCollectionsDeque);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns <code>n</code> copies of the input iterable. Note that if the input
 * iterable is an iterator, then it must be discarded by the caller after
 * calling tee.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of copies to make.
 * @returns {Iterator[]}
 */
function tee(iterable, n) {

	let iterator = (0, _iter.iter)(iterable);

	let copies = [];

	while (n-- > 0) copies.push((0, _jsCollectionsDeque2.default)());

	let gen = function* (mycopy) {

		while (true) {

			if (mycopy.length === 0) {

				let current = iterator.next();

				if (current.done) return;

				for (let copy of copies) copy.append(current.value);
			}

			yield mycopy.popleft();
		}
	};

	return (0, _list.list)((0, _map.map)(gen, copies));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3RlZS5qcyJdLCJuYW1lcyI6WyJ0ZWUiLCJpdGVyYWJsZSIsIm4iLCJpdGVyYXRvciIsImNvcGllcyIsInB1c2giLCJnZW4iLCJteWNvcHkiLCJsZW5ndGgiLCJjdXJyZW50IiwibmV4dCIsImRvbmUiLCJjb3B5IiwiYXBwZW5kIiwidmFsdWUiLCJwb3BsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQWVnQkEsRyxHQUFBQSxHOztBQWZoQjs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQkMsQ0FBMUIsRUFBOEI7O0FBRXBDLEtBQUlDLFdBQVcsZ0JBQU1GLFFBQU4sQ0FBZjs7QUFFQSxLQUFJRyxTQUFTLEVBQWI7O0FBRUEsUUFBUUYsTUFBTSxDQUFkLEVBQWtCRSxPQUFPQyxJQUFQLENBQWEsbUNBQWI7O0FBRWxCLEtBQUlDLE1BQU0sV0FBWUMsTUFBWixFQUFxQjs7QUFFOUIsU0FBUSxJQUFSLEVBQWU7O0FBRWQsT0FBS0EsT0FBT0MsTUFBUCxLQUFrQixDQUF2QixFQUEyQjs7QUFFMUIsUUFBSUMsVUFBVU4sU0FBU08sSUFBVCxFQUFkOztBQUVBLFFBQUtELFFBQVFFLElBQWIsRUFBb0I7O0FBRXBCLFNBQU0sSUFBSUMsSUFBVixJQUFrQlIsTUFBbEIsRUFBMkJRLEtBQUtDLE1BQUwsQ0FBYUosUUFBUUssS0FBckI7QUFFM0I7O0FBRUQsU0FBTVAsT0FBT1EsT0FBUCxFQUFOO0FBRUE7QUFFRCxFQWxCRDs7QUFvQkEsUUFBTyxnQkFBTSxjQUFLVCxHQUFMLEVBQVdGLE1BQVgsQ0FBTixDQUFQO0FBRUEiLCJmaWxlIjoidGVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJy4vaXRlcicgO1xuaW1wb3J0IHsgbGlzdCB9IGZyb20gJy4vbGlzdCcgO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi4vbWFwL21hcCcgO1xuXG5pbXBvcnQgZGVxdWUgZnJvbSAnQGF1cmVvb21zL2pzLWNvbGxlY3Rpb25zLWRlcXVlJyA7XG5cbi8qKlxuICogUmV0dXJucyA8Y29kZT5uPC9jb2RlPiBjb3BpZXMgb2YgdGhlIGlucHV0IGl0ZXJhYmxlLiBOb3RlIHRoYXQgaWYgdGhlIGlucHV0XG4gKiBpdGVyYWJsZSBpcyBhbiBpdGVyYXRvciwgdGhlbiBpdCBtdXN0IGJlIGRpc2NhcmRlZCBieSB0aGUgY2FsbGVyIGFmdGVyXG4gKiBjYWxsaW5nIHRlZS5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpbnB1dCBpdGVyYWJsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiBjb3BpZXMgdG8gbWFrZS5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcltdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVlICggaXRlcmFibGUgLCBuICkge1xuXG5cdGxldCBpdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdGxldCBjb3BpZXMgPSBbIF0gO1xuXG5cdHdoaWxlICggbiAtLT4gMCApIGNvcGllcy5wdXNoKCBkZXF1ZSggKSApIDtcblxuXHRsZXQgZ2VuID0gZnVuY3Rpb24qICggbXljb3B5ICkge1xuXG5cdFx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0XHRpZiAoIG15Y29weS5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRcdFx0bGV0IGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCkgO1xuXG5cdFx0XHRcdGlmICggY3VycmVudC5kb25lICkgcmV0dXJuIDtcblxuXHRcdFx0XHRmb3IgKCBsZXQgY29weSBvZiBjb3BpZXMgKSBjb3B5LmFwcGVuZCggY3VycmVudC52YWx1ZSApIDtcblxuXHRcdFx0fVxuXG5cdFx0XHR5aWVsZCBteWNvcHkucG9wbGVmdCggKSA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0cmV0dXJuIGxpc3QoIG1hcCggZ2VuICwgY29waWVzICkgKSA7XG5cbn1cbiJdfQ==