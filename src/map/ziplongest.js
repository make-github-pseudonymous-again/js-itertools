import _ziplongest from './_ziplongest.js';

/**
 * Same as zip, but continues to yield zipped tuples until the last iterable is
 * exhausted.
 *
 * @example
 * // returns [['A','x'],['B','y'],['C','-'],['D','-']]
 * list( ziplongest( '-' , 'ABCD', 'xy' ) ) ;
 *
 * @param {any} fillvalue - The value to yield for iterators that are exhausted.
 * @param {...Iterable} iterables - The iterables to zip.
 * @returns {IterableIterator}
 *
 */
export default function ziplongest(fillvalue, ...iterables) {
	return _ziplongest(fillvalue, iterables);
}
