"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._range = _range;
/**
 * Yields values in a range, separated by a fixed constant called step. If
 * this step is negative, the range has to be given in reverse order, that is,
 * largest value first, smallest value second.
 *
 * @param {Number} start - The starting value.
 * @param {Number} stop - The stopping value.
 * @param {Number} step - The step value.
 * @returns {Iterator}
 */
function* _range(start, stop, step) {

  if (step < 0) {
    for (; start > stop; start += step) yield start;
  } else {
    for (; start < stop; start += step) yield start;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL19yYW5nZS5qcyJdLCJuYW1lcyI6WyJfcmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVpQkEsTSxHQUFBQSxNO0FBVmpCOzs7Ozs7Ozs7O0FBVU8sVUFBVUEsTUFBVixDQUFtQkMsS0FBbkIsRUFBMkJDLElBQTNCLEVBQWtDQyxJQUFsQyxFQUF5Qzs7QUFFL0MsTUFBS0EsT0FBTyxDQUFaLEVBQWdCO0FBQ2YsV0FBUUYsUUFBUUMsSUFBaEIsRUFBdUJELFNBQVNFLElBQWhDLEVBQXVDLE1BQU1GLEtBQU47QUFDdkMsR0FGRCxNQUlLO0FBQ0osV0FBUUEsUUFBUUMsSUFBaEIsRUFBdUJELFNBQVNFLElBQWhDLEVBQXVDLE1BQU1GLEtBQU47QUFDdkM7QUFFRCIsImZpbGUiOiJfcmFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFlpZWxkcyB2YWx1ZXMgaW4gYSByYW5nZSwgc2VwYXJhdGVkIGJ5IGEgZml4ZWQgY29uc3RhbnQgY2FsbGVkIHN0ZXAuIElmXG4gKiB0aGlzIHN0ZXAgaXMgbmVnYXRpdmUsIHRoZSByYW5nZSBoYXMgdG8gYmUgZ2l2ZW4gaW4gcmV2ZXJzZSBvcmRlciwgdGhhdCBpcyxcbiAqIGxhcmdlc3QgdmFsdWUgZmlyc3QsIHNtYWxsZXN0IHZhbHVlIHNlY29uZC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgLSBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gKiBAcGFyYW0ge051bWJlcn0gc3RvcCAtIFRoZSBzdG9wcGluZyB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIC0gVGhlIHN0ZXAgdmFsdWUuXG4gKiBAcmV0dXJucyB7SXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogX3JhbmdlICggc3RhcnQgLCBzdG9wICwgc3RlcCApIHtcblxuXHRpZiAoIHN0ZXAgPCAwICkge1xuXHRcdGZvciAoIDsgc3RhcnQgPiBzdG9wIDsgc3RhcnQgKz0gc3RlcCApIHlpZWxkIHN0YXJ0IDtcblx0fVxuXG5cdGVsc2Uge1xuXHRcdGZvciAoIDsgc3RhcnQgPCBzdG9wIDsgc3RhcnQgKz0gc3RlcCApIHlpZWxkIHN0YXJ0IDtcblx0fVxuXG59XG4iXX0=