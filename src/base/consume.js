/**
 * Consumes a given number of iterations of the input iterator.
 *
 * @param {Iterator} iterator - The input iterator.
 * @param {Number} n - The number of iterations to consume.
 *
 */
export function consume ( iterator , n ) {

	while ( n --> 0 && !iterator.next().done ) ;

}
