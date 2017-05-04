import test from 'ava' ;

import {
	closure ,
	enumerate ,
	list ,
	takewhile
} from '../../../src' ;

// https://oeis.org/A006577
const Collatz = x => ( x % 2 === 1 ) ? ( 3 * x + 1 ) : ( x / 2 | 0 ) ;

const A006577 = [
	0,1,7,2,5,8,16,3,19,6,14,9,9,17,17,4,12,20,20,7,
	7,15,15,10,23,10,111,18,18,18,106,5,26,13,13,21,
	21,21,34,8,109,8,29,16,16,16,104,11,24,24,24,11,
	11,112,112,19,32,19,32,19,19,107,107,6,27,27,27,
	14,14,14,102,22
] ;

function macro ( t , n , a ) {

	const sequence = list( takewhile( x => x !== 1 , closure( Collatz , n ) ) ) ;

	t.is( sequence.length , a ) ;

}

macro.title = ( _ , n , a ) => `closure [A006577] > a(${n}) = ${a}` ;

for ( const [ n , a ] of enumerate( A006577 , 1 ) ) test( macro , n , a ) ;
