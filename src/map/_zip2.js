
import { iter } from '..' ;

export function* _zip2 ( A , B ) {

	A = iter( A ) ;
	B = iter( B ) ;

	while ( true ) {

		const a = A.next() ;
		if ( a.done ) return ;

		const b = B.next() ;
		if ( b.done ) return ;

		yield [ a.value , b.value ] ;

	}

}
