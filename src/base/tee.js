import { iter , list } from '.' ;
import { map } from '../map' ;

export function tee ( iterable , n ) {

	let iterator = iter( iterable ) ;

	// use real deque here
	let deques = [ ] ;

	while ( n --> 0 ) deques.push( [ ] ) ;

	let gen = function* ( mydeque ) {

		while ( true ) {

			if ( mydeque.length === 0 ) {

				let current = iterator.next() ;

				if ( current.done ) return ;

				for ( let deque of deques ) deque.push( current.value ) ;

			}

			yield mydeque.shift( ) ;

		}

	} ;

	return list( map( gen , deques ) ) ;

}
