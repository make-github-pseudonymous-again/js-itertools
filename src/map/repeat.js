/**
 * Repeats the input item endlessly. Returns an iterator that yields the input
 * item over and over again.
 *
 * @example
 * list( take( repeat( 6 ) , 3 ) ) ; // returns [ 6 , 6 , 6 ]
 *
 * @param {Object} item - The input item.
 * @returns {Iterator}
 */
export function* repeat ( item ) {

	while ( true ) yield item ;

}
