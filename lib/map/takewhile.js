"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takewhile = takewhile;
/**
 * Output elements of the input iterable while the current element satisfies the
 * input predicate.
 *
 * @param {Function} predicate - The input predicate.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
function* takewhile(predicate, iterable) {

  for (let item of iterable) {

    if (!predicate(item)) return;

    yield item;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvdGFrZXdoaWxlLmpzIl0sIm5hbWVzIjpbInRha2V3aGlsZSIsInByZWRpY2F0ZSIsIml0ZXJhYmxlIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFRaUJBLFMsR0FBQUEsUztBQVJqQjs7Ozs7Ozs7QUFRTyxVQUFVQSxTQUFWLENBQXNCQyxTQUF0QixFQUFrQ0MsUUFBbEMsRUFBNkM7O0FBRW5ELE9BQU0sSUFBSUMsSUFBVixJQUFrQkQsUUFBbEIsRUFBNkI7O0FBRTVCLFFBQUssQ0FBQ0QsVUFBV0UsSUFBWCxDQUFOLEVBQTBCOztBQUUxQixVQUFNQSxJQUFOO0FBRUE7QUFFRCIsImZpbGUiOiJ0YWtld2hpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE91dHB1dCBlbGVtZW50cyBvZiB0aGUgaW5wdXQgaXRlcmFibGUgd2hpbGUgdGhlIGN1cnJlbnQgZWxlbWVudCBzYXRpc2ZpZXMgdGhlXG4gKiBpbnB1dCBwcmVkaWNhdGUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIC0gVGhlIGlucHV0IHByZWRpY2F0ZS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHRha2V3aGlsZSAoIHByZWRpY2F0ZSAsIGl0ZXJhYmxlICkge1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkge1xuXG5cdFx0aWYgKCAhcHJlZGljYXRlKCBpdGVtICkgKSByZXR1cm4gO1xuXG5cdFx0eWllbGQgaXRlbSA7XG5cblx0fVxuXG59XG4iXX0=