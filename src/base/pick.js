export function* pick ( object , iterable ) {

	for ( let key of iterable ) yield object[key] ;

}
