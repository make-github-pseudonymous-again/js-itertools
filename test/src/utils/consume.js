import { test } from 'ava' ;


	import { range , consume , list } from '../../..' ;
test( "consume" , t => {

	const iterator = range( 100 ) ;

	consume( iterator , 37 ) ;

	const output = list( iterator ) ;

	t.same( output , list( range( 37 , 100 ) ) ) ;

} ) ;
