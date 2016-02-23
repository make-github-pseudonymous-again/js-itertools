
/**
 * Recipe credited to George Sakkis
 *
 * @example roundrobin('ABC', 'D', 'EF') // A D E B F C
 *
 */

export function* roundrobin ( iterables ) {

	let pending = len( iterables ) ;

	let iterators = cycle( map( iter , iterables ) ) ;

	while ( pending ) {

		while ( true ) {

			let iterator = next( iterators ).value ;

			let it = next( iterator ) ;

			if ( it.done ) break ;

			yield it.value ;

		}

		--pending ;

		iterators = cycle( slice( iterators , 0 , pending , 1 ) ) ;

	}

}
