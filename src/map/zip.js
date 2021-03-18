import _zip from './_zip.js';

/**
 * Zips iterables together. Yields a tuple containing the first element of each
 * iterable, then a tupe containing the second element of each iterable, etc.
 * Stops when one of the iterables runs out of elements.
 *
 * @example
 * // returns [ [ 'a' , 1 ] , [ 'b' , 2 ] , [ 'c' , 3 ] ]
 * list( zip( 'abcd' , range(3) ) ) ;
 *
 * @param {...Iterable} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
export default function zip(...iterables) {
	return _zip(iterables);
}
