test( "roundrobin", t => {

	import { list , roundrobin } from 'aureooms-es-itertools' ;

	const x = function ( iterables, expected ) {
		t.same( list( roundrobin( iterables ) ), expected );
	};

	x( [ 'ABC', 'D', 'EF' ] , ['A' ,'D', 'E', 'B' ,'F', 'C' ] ) ;

});
