/**
 * Repeats the input item a few times. Returns an iterator that yields the input
 * item a fixed number of times.
 *
 * @example
 * list( nrepeat( 6 , 3 ) ) ; // returns [ 6 , 6 , 6 ]
 *
 * @param {Object} item - The input item.
 * @param {Number} times - The number of times to yield <code>item</code>.
 * @returns {Iterator}
 */
export function* nrepeat ( item , times ) {

	while ( times --> 0 ) yield item ;

}
