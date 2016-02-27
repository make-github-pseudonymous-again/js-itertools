
import { list , map , _product , ncycle , reversed } from '..' ;

/**
 *
 * @example product(['ABCD', 'xy'], 1) // Ax Ay Bx By Cx Cy Dx Dy
 * @example product([range(0, 2, 1)], 3) // 000 001 010 011 100 101 110 111
 */

export function product ( iterables , r ) {

	let pools = list( ncycle( reversed( map( list , iterables ) ) , r ) ) ;

	return map( list , _product( pools , 0 , pools.length ) ) ;

}
