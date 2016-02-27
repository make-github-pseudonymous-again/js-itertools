export function next ( iterator ) {

	const x = iterator.next( ) ;

	if ( x.done ) throw new StopIteration();

	return x.value ;

}
