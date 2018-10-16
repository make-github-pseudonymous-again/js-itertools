'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.next = next;

var _StopIteration = require('./StopIteration');

/**
 * Returns the next value of the input iterator. If the iterator is exhausted,
 * throws a {@link StopIteration}, unless a <code>dflt</code> argument has been
 * specified, in which case the <code>dflt</code> argument is returned.
 *
 * @param {Iterator} iterator - The input iterator.
 * @param {Object} [dflt=undefined] - The default value to return in the case
 * that the input iterator is exhausted.
 * @returns {Object}
 */
function next(iterator, dflt = undefined) {

  const x = iterator.next();

  if (x.done) {
    if (dflt === undefined) throw new _StopIteration.StopIteration();else return dflt;
  }

  return x.value;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL25leHQuanMiXSwibmFtZXMiOlsibmV4dCIsIml0ZXJhdG9yIiwiZGZsdCIsInVuZGVmaW5lZCIsIngiLCJkb25lIiwiU3RvcEl0ZXJhdGlvbiIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztRQVlnQkEsSSxHQUFBQSxJOztBQVpoQjs7QUFFQTs7Ozs7Ozs7OztBQVVPLFNBQVNBLElBQVQsQ0FBZ0JDLFFBQWhCLEVBQTJCQyxPQUFPQyxTQUFsQyxFQUE4Qzs7QUFFcEQsUUFBTUMsSUFBSUgsU0FBU0QsSUFBVCxFQUFWOztBQUVBLE1BQUtJLEVBQUVDLElBQVAsRUFBYztBQUNiLFFBQUtILFNBQVNDLFNBQWQsRUFBMEIsTUFBTSxJQUFJRyw0QkFBSixFQUFOLENBQTFCLEtBQ0ssT0FBT0osSUFBUDtBQUNMOztBQUVELFNBQU9FLEVBQUVHLEtBQVQ7QUFFQSIsImZpbGUiOiJuZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcEl0ZXJhdGlvbiB9IGZyb20gJy4vU3RvcEl0ZXJhdGlvbicgO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgdmFsdWUgb2YgdGhlIGlucHV0IGl0ZXJhdG9yLiBJZiB0aGUgaXRlcmF0b3IgaXMgZXhoYXVzdGVkLFxuICogdGhyb3dzIGEge0BsaW5rIFN0b3BJdGVyYXRpb259LCB1bmxlc3MgYSA8Y29kZT5kZmx0PC9jb2RlPiBhcmd1bWVudCBoYXMgYmVlblxuICogc3BlY2lmaWVkLCBpbiB3aGljaCBjYXNlIHRoZSA8Y29kZT5kZmx0PC9jb2RlPiBhcmd1bWVudCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBpdGVyYXRvciAtIFRoZSBpbnB1dCBpdGVyYXRvci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGZsdD11bmRlZmluZWRdIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gcmV0dXJuIGluIHRoZSBjYXNlXG4gKiB0aGF0IHRoZSBpbnB1dCBpdGVyYXRvciBpcyBleGhhdXN0ZWQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dCAoIGl0ZXJhdG9yICwgZGZsdCA9IHVuZGVmaW5lZCApIHtcblxuXHRjb25zdCB4ID0gaXRlcmF0b3IubmV4dCggKSA7XG5cblx0aWYgKCB4LmRvbmUgKSB7XG5cdFx0aWYgKCBkZmx0ID09PSB1bmRlZmluZWQgKSB0aHJvdyBuZXcgU3RvcEl0ZXJhdGlvbigpIDtcblx0XHRlbHNlIHJldHVybiBkZmx0IDtcblx0fVxuXG5cdHJldHVybiB4LnZhbHVlIDtcblxufVxuIl19