import { StopIteration } from './StopIteration' ;

/**
 * Returns the next value of the input iterator. If there the iterator is
 * exhausted, throws a {@link StopIteration}.
 *
 * @param {Iterator} iterator - The input iterator.
 * @returns {Object}
 */
export function next ( iterator ) {

	const x = iterator.next( ) ;

	if ( x.done ) throw new StopIteration();

	return x.value ;

}
