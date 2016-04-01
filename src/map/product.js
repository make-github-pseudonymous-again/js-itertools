
import { list , map , _product , ncycle , reversed } from '..' ;

/**
 * Computes the product of the iterables given as first parameter. The second
 * is an integer that tells how many times the list of iterables given as input
 * should be concatenated to itself before computing the product.
 *
 * @param {iterable} iterables input iterables
 * @param {Number} repeat number of times to cycle through the input iterables
 * @example product(['ABCD', 'xy']) // Ax Ay Bx By Cx Cy Dx Dy
 * @example product([range(0, 2, 1)], 3) // 000 001 010 011 100 101 110 111
 * @return {Generator}
 */

export function product ( iterables , repeat = 1 ) {

	let pools = list( ncycle( reversed( map( list , iterables ) ) , repeat ) ) ;

	return map( list , _product( pools , 0 , pools.length ) ) ;

}
