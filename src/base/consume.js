export function consume ( iterator , n ) {

	while ( n --> 0 && !iterator.next().done ) ;

}
