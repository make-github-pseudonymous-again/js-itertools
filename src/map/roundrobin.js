import { iter , len , cycle , map , slice } from '..' ;

/**
 * Yields the first item of the first input iterable, then the first item of
 * the second input iterable, etc., until the last input iterable. Then start
 * again with the second item of the first input iterable, etc. If one of the
 * input iterable is exhausted, it is removed from the list of input iterables
 * and the algorithm continues until all input iterables have been exhausted.
 *
 * @example
 * // returns ['A','D','E','B','F','C]
 * list( roundrobin(['ABC', 'D', 'EF']) )
 *
 * @param {Iterable[]} iterables - The input iterables.
 * @returns {Iterator}
 *
 */
export function* roundrobin ( iterables ) {

	let pending = len( iterables ) ;

	let iterators = cycle( map( iter , iterables ) ) ;

	while ( pending ) {

		while ( true ) {

			let iterator = iterators.next().value ;

			let it = iterator.next() ;

			if ( it.done ) break ;

			yield it.value ;

		}

		--pending ;

		iterators = cycle( slice( iterators , 0 , pending , 1 ) ) ;

	}

}
