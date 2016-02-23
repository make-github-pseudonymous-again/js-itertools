import { iter , next } from '.' ;

export function* head ( iterable , n ) {

	let iterator = iter( iterable ) ;

	while ( n --> 0 ) {

		let current = next( iterator ) ;

		if ( current.done ) return ;

		yield current.value ;

	}

}
