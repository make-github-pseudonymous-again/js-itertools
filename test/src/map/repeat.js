import test from 'ava' ;

import { list , head , repeat } from '../../../src' ;

test( "repeat", t => {

	const x = function ( item, times, expected ) {
		t.deepEqual( list( head( repeat( item ) , times ) ) , expected );
	};

	for ( const item of [0, 1, -1, [], "A", "ABC", ["A"], [0, 1, -1], ["A", "B", "C"]] ) {
		x( item, 0, [] );
		x( item, 1, [item] );
		x( item, 2, [item,item] );
		x( item, 3, [item,item,item] );
	}

});

