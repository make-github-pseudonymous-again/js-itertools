import { _zip2 , _count } from '..' ;

/**
 * Yields (index,element) tuples where the elements are taken from the input
 * iterable. You can choose the starting index. The starting index is
 * <code>0</code> by default.
 *
 * @example
 * // returns [ [ 0 , 'a' ] , [ 1 , 'b' ] , [ 2 , 'c' ] ]
 * list( enumerate( 'abc' ) ) ;
 *
 * @example
 * // returns [ [ 1 , 'a' ] , [ 2 , 'b' ] , [ 3 , 'c' ] ]
 * list( enumerate( 'abc' , 1 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} [start=0] - The starting index.
 * @returns {Iterator}
 */
export function enumerate ( iterable, start = 0 ) {

	return _zip2( _count( start , 1 ) , iterable ) ;

}
