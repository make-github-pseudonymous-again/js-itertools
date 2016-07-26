import { list } from '../base/list' ;

/**
 * Outputs an array containing the elements of the input iterable sorted
 * according to a given comparison function.
 *
 * @param {Function} compare - The comparison function to use. This function
 * must be 2-ary. It must return -1, 0, or 1 depending whether the first
 * parameter is, respectively, less than, equal to, or greater than the second
 * parameter.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Array} - The input iterable, sorted.
 */
export function sorted ( compare , iterable ) {

	return list( iterable ).sort( compare ) ;

}
