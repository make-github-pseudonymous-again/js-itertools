
/**
 * Returns the largest element of an iterable according
 * to some comparison function.
 */

var max = function ( compare , iterable ) {

	let iterator = iter( iterable ) ;

	let first = next( iterator ) ;

	if ( first.done ) return undefined ;

	let largest = first.value ;

	for ( let candidate of iterator ) {

		if ( compare( candidate , largest ) > 0 ) {

			largest = candidate ;

		}

	}

	return largest ;

} ;

exports.max = max ;
