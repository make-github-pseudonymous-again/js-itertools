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
export default function* filter(predicate, iterable) {
	for (const item of iterable) {
		if (predicate(item)) {
			yield item;
		}
	}
}
