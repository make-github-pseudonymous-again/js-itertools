
import { list , map , iter , _next } from '..' ;

export function* _zip ( iterables ) {

	let iterators = list( map( iter , iterables ) ) ;

	if ( iterators.length === 0 ) return ;

	while ( true ) {

		let buffer = [ ] ;

		for ( let result of map( _next , iterators ) ) {

			if ( result.done ) return ;

			buffer.push( result.value ) ;

		}

		yield buffer ;

	}

}
