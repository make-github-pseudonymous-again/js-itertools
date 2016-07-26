import { iter } from './iter' ;
import { list } from './list' ;
import { map } from '../map/map' ;

/**
 * Returns <code>n</code> copies of the input iterable.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of copies to make.
 * @returns {Iterator[]}
 */
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
