import test from 'ava' ;

import { list , roundrobin } from '../../../src' ;

test( "roundrobin", t => {

	const x = function ( iterables, expected ) {
		t.deepEqual( list( roundrobin( iterables ) ), expected );
	};

	x( [ 'ABC', 'D', 'EF' ] , ['A' ,'D', 'E', 'B' ,'F', 'C' ] ) ;

});
