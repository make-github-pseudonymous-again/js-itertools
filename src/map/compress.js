import { _zip2 } from '..' ;

/**
 * Filters the first input iterable according to truthy and flasy values from a
 * second input iterable. The ith element of the first input iterable is output
 * if and only if the ith element of the second input iterable is truthy.
 *
 * @param {Iterable} iterable - The first input iterable to filter.
 * @param {Iterable} selector - The second input iterable containing the truthy and falsy
 * values.
 * @returns {Iterator}
 */
export function* compress ( iterable , selector ) {

	for ( let [ take , item ] of _zip2( selector , iterable ) ) {

		if ( take ) yield item ;

	}

}
