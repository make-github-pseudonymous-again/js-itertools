import { _reduce } from './_reduce' ;
import { iter } from '../base/iter' ;

/**
 * Applies the accumulator function iteratively on the last return value of the
 * accumulator and the next value in the input iterable. The initial value is
 * the initializer parameter. If no initial value is given, the first element
 * of the input iterable is used.
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 0 ) ; // returns 45
 *
 * @example
 * _reduce( ( x , y ) => x + y , range( 10 ) , 100 ) ; // returns 145
 *
 * @param {Function} accumulator - The accumulator, a 2-ary function.
 * @param {Iterable} iterable - The input iterable.
 * @param {Object} [initializer=undefined] - The initial value of the reduction.
 * @returns {Object} - The reduction of the elements of <code>iterable</code>.
 */
export function reduce ( accumulator , iterable , initializer = undefined ) {

	if ( initializer === undefined ) {
		const iterator = iter( iterable ) ;
		const first = iterator.next() ;

		if ( first.done ) {
			return undefined ;
		}

		return _reduce( accumulator , iterator , first.value ) ;
	}

	return _reduce( accumulator , iterable , initializer ) ;

}
