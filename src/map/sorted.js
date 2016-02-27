
import { list } from '../base/list' ;

export function sorted ( compare , iterable ) {

	return list( iterable ).sort( compare ) ;

}
