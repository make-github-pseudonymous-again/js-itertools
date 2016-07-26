import { _count } from './_count' ;

/**
 * Yields increasing or decreasing sequences of numbers. The starting value
 * and the step between separating output values can be chosen. Both parameters are
 * optional. The default for the starting value is <code>0</code>. The default
 * for the step between separating output values is <code>1</code>.
 *
 * @example
 * // equivalent to list( range( 7 ) )
 * list( head( count( ) , 7 ) ) ;
 *
 * @example
 * // returns [0,-1,-2,-3,-4]
 * list( head( count( 0 , -1 ) , 5 ) ) ;
 *
 * @param {Number} [start=0] - The starting value.
 * @param {Number} [step=1] - The step between the values.
 * @returns {Iterator}
 */
export function count ( start = 0 , step = 1 ) {

	return _count( start , step ) ;

}
