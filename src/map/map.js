/**
 * Applies a given callable to each of the elements of the input iterable.
 *
 * @example
 * // return [ 0 , 1 , 4 , 9 ]
 * list( map( x => x**2 , range( 4 ) ) ) ;
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} iterable - The input iterable.
 * @returns {IterableIterator}
 */
export default function* map(callable, iterable) {
	for (const item of iterable) {
		yield callable(item);
	}
}
