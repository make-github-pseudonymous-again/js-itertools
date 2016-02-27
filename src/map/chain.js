export function* chain ( iterables ) {

	for ( let iterable of iterables ) yield* iterable ;

}
