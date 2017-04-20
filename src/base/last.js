import { next } from './next' ;
import { tail } from './tail' ;

/**
 * Returns the last value of the input iterator. If there the iterator is
 * exhausted, throws a {@link StopIteration}.
 *
 * @param {Iterator} iterator - The input iterator.
 * @returns {Object}
 */
export function last ( iterator ) {

	return next( tail( iterator , 1 ) ) ;

}
