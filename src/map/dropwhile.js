import { iter } from '..' ;

/**
 * Drop elements of the input iterable while the current element satisfies the
 * input predicate.
 *
 * @param {Function} predicate - The input predicate.
 * @param {Iterable} iterable - The input iterable.
 * @returns {Iterator}
 */
export function* dropwhile ( predicate , iterable ) {

	let iterator = iter( iterable ) ;

	for ( let item of iterator ) {

		if ( predicate( item ) ) continue ;

		// equivalent to return chain( [ [ item ] , iterator ] ) ;

		yield item ;

		yield* iterator ;

		return ;

	}

}
