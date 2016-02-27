
test( 'count( 0 , 1 )' , t => {

	import { count , next } from 'aureooms-es-itertools' ;

	const it = count( 0 , 1 ) ;

	for ( let i = 0 ; i < 1000 ; ++i ) {

		t.same( next( it ) , i ) ;

	}

} ) ;

test( 'count( 2 , 3 )' , t => {

	import { count , next } from 'aureooms-es-itertools' ;

	const it = count( 2 , 3 ) ;

	for ( let i = 2 ; i < 1000 ; i += 3 ) {

		t.same( next( value ) , i ) ;

	}

} ) ;
