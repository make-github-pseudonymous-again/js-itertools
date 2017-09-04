"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(filter);

/**
 * Yields all elements from input iterable that verify a given predicate.
 *
 * @example
 * // returns [ 1 , 3 , 5 , 7 , 9 ]
 * list( filter( x => x % 2 , range( 10 ) ) ) ;
 *
 * @param {Function} predicate - A unary function that returns a truthy or
 * falsy value.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 *
 */
function filter(predicate, iterable) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.wrap(function filter$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = iterable[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 13;
            break;
          }

          item = _step.value;

          if (!predicate(item)) {
            _context.next = 10;
            break;
          }

          _context.next = 10;
          return item;

        case 10:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 19:
          _context.prev = 19;
          _context.prev = 20;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 22:
          _context.prev = 22;

          if (!_didIteratorError) {
            _context.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context.finish(22);

        case 26:
          return _context.finish(19);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 15, 19, 27], [20,, 22, 26]]);
}

/**
 * Same as {@link filter}.
 * @function filtertrue
 */
var filtertrue = exports.filtertrue = filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZmlsdGVyLmpzIl0sIm5hbWVzIjpbImZpbHRlciIsInByZWRpY2F0ZSIsIml0ZXJhYmxlIiwiaXRlbSIsImZpbHRlcnRydWUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWlCQSxNLEdBQUFBLE07O21EQUFBQSxNOztBQWJqQjs7Ozs7Ozs7Ozs7OztBQWFPLFNBQVVBLE1BQVYsQ0FBbUJDLFNBQW5CLEVBQStCQyxRQUEvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFWUEsUUFGWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVJQyxjQUZKOztBQUFBLGVBSUFGLFVBQVdFLElBQVgsQ0FKQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUkwQkEsSUFKMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVUDs7OztBQUlPLElBQU1DLGtDQUFhSixNQUFuQiIsImZpbGUiOiJmaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFlpZWxkcyBhbGwgZWxlbWVudHMgZnJvbSBpbnB1dCBpdGVyYWJsZSB0aGF0IHZlcmlmeSBhIGdpdmVuIHByZWRpY2F0ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbIDEgLCAzICwgNSAsIDcgLCA5IF1cbiAqIGxpc3QoIGZpbHRlciggeCA9PiB4ICUgMiAsIHJhbmdlKCAxMCApICkgKSA7XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIC0gQSB1bmFyeSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB0cnV0aHkgb3JcbiAqIGZhbHN5IHZhbHVlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaW5wdXQgaXRlcmFibGUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24qIGZpbHRlciAoIHByZWRpY2F0ZSAsIGl0ZXJhYmxlICkge1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkge1xuXG5cdFx0aWYgKCBwcmVkaWNhdGUoIGl0ZW0gKSApIHlpZWxkIGl0ZW0gO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIFNhbWUgYXMge0BsaW5rIGZpbHRlcn0uXG4gKiBAZnVuY3Rpb24gZmlsdGVydHJ1ZVxuICovXG5leHBvcnQgY29uc3QgZmlsdGVydHJ1ZSA9IGZpbHRlciA7XG4iXX0=