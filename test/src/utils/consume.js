
test( "consume" , t => {

	import { range , consume , list } from 'aureooms-es-itertools' ;

	const iterator = range( 100 ) ;

	consume( iterator , 37 ) ;

	const output = list( iterator ) ;

	t.same( output , list( range( 37 , 100 ) ) ) ;

} ) ;
