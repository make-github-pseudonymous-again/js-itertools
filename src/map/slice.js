
import { iter } from '..' ;

export function* slice ( iterable , start , stop , step ) {

	let iterator = iter( iterable ) ;

	while ( start > 0 ) {

		if ( iterator.next().done ) return ;

		--start ;
		--stop ;

	}

	while ( stop > 0 ) {

		let current = iterator.next() ;

		if ( current.done ) return ;

		yield current.value ;

		--stop ;

		let n = step ;

		while ( n > 1 ) {

			if ( iterator.next().done ) return ;

			--n ;

		}

	}

}
