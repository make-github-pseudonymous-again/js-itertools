
var chain = function* ( iterables ) {

	for ( let iterable of iterables ) yield* iterable ;

} ;

exports.chain = chain;
