import { iter } from './iter' ;

export function* by ( iterable , n ) {

	const iterator = iter( iterable ) ;

	while ( true ) {

		const tuple = [ ] ;

		for ( const i of range( n ) ) {

			const current = iterator.next( ) ;

			if ( current.done ) {

				if ( i === 0 ) return ;

				for ( const j of range( n - i ) ) tuple.push( undefined ) ;

				yield tuple ;

				return ;

			}

			tuple.push( current.value ) ;

		}

		yield tuple ;

	}

}
