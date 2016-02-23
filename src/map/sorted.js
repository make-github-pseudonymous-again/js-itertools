
import { list } from './list' ;

export function sorted ( compare , iterable ) {

	return list( iterable ).sort( compare ) ;

}
