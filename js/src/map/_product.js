
/**
 * @param {lists} pools reverse ordered
 */

let _product = function* ( pools , i , n ) {

	if ( i === n ) return [ [ ] ] ;

	let iterable = pools[i] ;

	for ( let buffer in _product( pools , i + 1 , n ) ) {

		for ( let item in iterable ) {

			buffer.push( item ) ;

			yield buffer ;

			buffer.pop( item ) ;

		}

	}

} ;

exports._product = _product ;

