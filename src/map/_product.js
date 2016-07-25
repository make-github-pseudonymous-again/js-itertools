/**
 * Algorithm used by {@link product} to compute the product of one or more
 * iterables from pools of symbols.
 *
 * @example
 * // Ax Ay Bx By Cx Cy Dx Dy
 * _product(['xy', 'ABCD'], 0 , 2) ;
 *
 * @example
 * // 000 001 010 011 100 101 110 111
 * _product([[0,1],[0,1],[0,1]], 0 , 3) ;
 *
 * @param {Array[]} pools - The pools of symbols in reverse order.
 * @param {Number} i - Index of the pool to draw the next symbol from
 * @param {Number} n - Number of pools in total.
 * @returns {Iterator}
 */
export function* _product ( pools , i , n ) {

	if ( i === n ) { yield [ ] ; return ; }

	let iterable = pools[i] ;

	for ( let buffer of _product( pools , i + 1 , n ) ) {

		for ( let item of iterable ) {

			buffer.push( item ) ;

			yield buffer ;

			buffer.pop( item ) ;

		}

	}

}
