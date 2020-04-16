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
export function exhaust(iterator) {
	// eslint-disable-next-line no-empty,no-unused-vars,prettier/prettier
	for (const item of iterator) {}
}
