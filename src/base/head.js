import { iter } from '.' ;

export function* head ( iterable , n ) {

	let iterator = iter( iterable ) ;

	while ( n --> 0 ) {

		let current = iterator.next() ;

		if ( current.done ) return ;

		yield current.value ;

	}

}
