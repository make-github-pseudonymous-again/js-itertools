
export function enumerate ( iterable, start ) {

	return _zip( [ _count( start , 1 ) , iterable ] ) ;

}
