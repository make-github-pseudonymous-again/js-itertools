import { _range } from './_range' ;

/**
 * Yields values in a range, separated by a fixed constant called step. If this
 * step is negative, the range has to be given in reverse order, that is,
 * largest value first, smallest value second. Both the starting value and the
 * step value are optional. By default the starting value is <code>0</code>.
 * The default for the step value is <code>1</code>.
 *
 * @param {Number} [start=0] - The starting value.
 * @param {Number} stop - The stopping value.
 * @param {Number} [step=1] - The step value.
 * @returns {Iterator}
 */
export function range ( start , stop , step ) {

	if ( stop === undefined ) return _range( 0 , start , 1 ) ;

	if ( step === undefined ) return _range( start , stop , 1 ) ;

	return _range( start , stop , step ) ;

}
