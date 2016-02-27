
test( "exhaust" , t => {

	import { range , head , exhaust , list } from 'aureooms-es-itertools' ;

	const iterator = range( 0 , 100 , 1 ) ;

	exhaust( head( iterator , 37 ) ) ;

	const output = list( iterator ) ;

	t.same( output , list( range( 37 , 100 , 1 ) ) ) ;

} ) ;
