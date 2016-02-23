
export function* _zip2 ( A , B ) {

	let iterators = [ iter( A ) , iter( B ) ] ;

	while ( true ) {

		a = next( A ) ;
		if ( a.done ) return ;

		b = next( B ) ;
		if ( b.done ) return ;

		yield [ a.value , b.value ] ;

	}

}
