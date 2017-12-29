"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaust = exhaust;
/**
 * Exhausts the input iterator.
 *
 * @example
 * let it = range( 1000 ) ;
 * exhaust( it ) ;
 * list( it ) ; // returns []
 *
 * @param {Iterator} iterator - The input iterator.
 *
 */
function exhaust(iterator) {

  for (let item of iterator);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2V4aGF1c3QuanMiXSwibmFtZXMiOlsiZXhoYXVzdCIsIml0ZXJhdG9yIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXZ0JBLE8sR0FBQUEsTztBQVhoQjs7Ozs7Ozs7Ozs7QUFXTyxTQUFTQSxPQUFULENBQW1CQyxRQUFuQixFQUE4Qjs7QUFFcEMsT0FBTSxJQUFJQyxJQUFWLElBQWtCRCxRQUFsQixDQUE2QjtBQUU3QiIsImZpbGUiOiJleGhhdXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFeGhhdXN0cyB0aGUgaW5wdXQgaXRlcmF0b3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIGxldCBpdCA9IHJhbmdlKCAxMDAwICkgO1xuICogZXhoYXVzdCggaXQgKSA7XG4gKiBsaXN0KCBpdCApIDsgLy8gcmV0dXJucyBbXVxuICpcbiAqIEBwYXJhbSB7SXRlcmF0b3J9IGl0ZXJhdG9yIC0gVGhlIGlucHV0IGl0ZXJhdG9yLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aGF1c3QgKCBpdGVyYXRvciApIHtcblxuXHRmb3IgKCBsZXQgaXRlbSBvZiBpdGVyYXRvciApIDtcblxufVxuIl19