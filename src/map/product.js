import list from '../base/list.js';
import ncycle from '../base/ncycle.js';
import map from './map.js';
import reversed from './reversed.js';
import _product from './_product.js';

/**
 * Computes the product of the iterables given as first parameter. The second
 * parameter is an integer that tells how many times the list of iterables
 * given as input should be concatenated to itself before computing the
 * product. This second parameter is optional and its default value is
 * <code>1</code>.
 *
 * @example
 * // Ax Ay Bx By Cx Cy Dx Dy
 * product(['ABCD', 'xy']) ;
 *
 * @example
 * // 000 001 010 011 100 101 110 111
 * product([range(2)], 3) ;
 *
 * @param {Iterable} iterables - The input iterables.
 * @param {Number} repeat - The number of times to cycle through the input iterables.
 * @return {Iterator}
 */

export default function product(iterables, repeat = 1) {
	const pools = list(ncycle(reversed(map(list, iterables)), repeat));

	return map(list, _product(pools, 0, pools.length));
}
