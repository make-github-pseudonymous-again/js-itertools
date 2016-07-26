import { _ziplongest } from './_ziplongest' ;

/**
 * Same as zip, but continues to yield zipped tuples until the last iterable is
 * exhausted.
 *
 * @example
 * // returns [['A','x'],['B','y'],['C','-'],['D','-']]
 * list( ziplongest( '-' , 'ABCD', 'xy' ) ) ;
 *
 * @param fillvalue - The value to yield for iterators that are exhausted.
 * @param {...Iterable} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
export function ziplongest ( fillvalue , ...iterables ) {

	return _ziplongest( fillvalue , iterables ) ;

}
