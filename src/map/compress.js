
import { _zip2 } from '..' ;

export function* compress ( iterable , selector ) {

	for ( let [ take , item ] of _zip2( selector , iterable ) ) {

		if ( take ) yield item ;

	}

}
