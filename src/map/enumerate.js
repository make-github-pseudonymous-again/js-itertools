
import { _zip2 , _count } from '..' ;

export function enumerate ( iterable, start = 0 ) {

	return _zip2( _count( start , 1 ) , iterable ) ;

}
