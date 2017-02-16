import { iter } from './iter' ;
import { list } from './list' ;
import { map } from '../map/map' ;

import deque from '@aureooms/js-collections-deque' ;

/**
 * Returns <code>n</code> copies of the input iterable. Note that if the input
 * iterable is an iterator, then it must be discarded by the caller after
 * calling tee.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of copies to make.
 * @returns {Iterator[]}
 */
export function tee ( iterable , n ) {

	let iterator = iter( iterable ) ;

	let copies = [ ] ;

	while ( n --> 0 ) copies.push( deque( ) ) ;

	let gen = function* ( mycopy ) {

		while ( true ) {

			if ( mycopy.length === 0 ) {

				let current = iterator.next() ;

				if ( current.done ) return ;

				for ( let copy of copies ) copy.append( current.value ) ;

			}

			yield mycopy.popleft( ) ;

		}

	} ;

	return list( map( gen , copies ) ) ;

}
