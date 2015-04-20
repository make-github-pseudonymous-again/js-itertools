

/**
 * Applies the accumulator function iteratively on the
 * last return value of the accumulator and the next
 * value in the iterable. The initial value is the initializer
 * parameter.
 */

let reduce = function ( accumulator , iterable , initializer ) {

	for ( let item of iterable ) {
		initializer = accumulator( initializer , item ) ;
	}

	return initializer ;

} ;

exports.reduce = reduce ;
