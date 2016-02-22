

let sum = function ( iterable ) {

	let result = 0 ;

	for ( let item of iterable ) result += item ;

	return result ;

} ;

exports.sum = sum ;
