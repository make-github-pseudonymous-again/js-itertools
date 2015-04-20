
let group = function* ( key , iterable ) {

	let iterator = iter( iterable ) ;

	let first = next( iterator ) ;

	if ( first.done ) return ;

	let item = first.value ;
	let nextkey = key( item ) ;

	grouping : while ( true ) {

		let currkey = nextkey ;
		let items = [ item ] ;

		for ( item of iterator ) {

			nextkey = key( item ) ;

			if ( nextkey !== currkey ) {

				yield [ curr , items ] ;
				continue grouping ;

			}

			items.push( item ) ;

		}

		return ;

	}

} ;

exports.group = group ;
exports.groupby = group ;
