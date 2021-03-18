/**
 * Returns the next event of the input iterator.
 *
 * @param {Iterator} iterator - The input iterator.
 * @returns {{done: Boolean, value: Object}}
 */
export default function _next(iterator) {
	return iterator.next();
}
