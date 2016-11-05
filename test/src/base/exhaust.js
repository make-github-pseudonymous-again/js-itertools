import test from 'ava' ;

import { range , head , exhaust , list } from '../../../src' ;

test( "exhaust" , t => {


	const iterator = range( 0 , 100 , 1 ) ;

	exhaust( head( iterator , 37 ) ) ;

	const output = list( iterator ) ;

	t.deepEqual( output , list( range( 37 , 100 , 1 ) ) ) ;

} ) ;
