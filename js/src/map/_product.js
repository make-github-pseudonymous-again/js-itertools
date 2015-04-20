
/**
 * @param {lists} pools reverse ordered
 */

let _product = function* ( pools , i , n ) {

	if ( i === n ) { yield [ ] ; return ; }

	let iterable = pools[i] ;

	for ( let buffer of _product( pools , i + 1 , n ) ) {

		for ( let item of iterable ) {

			buffer.push( item ) ;

			yield buffer ;

			buffer.pop( item ) ;

		}

	}

} ;

exports._product = _product ;

