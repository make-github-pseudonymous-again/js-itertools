
var one = function ( iterables, out ) {

	var msg;

	msg = "roundrobin " + JSON.stringify( iterables );

	deepEqual( itertools.list( itertools.roundrobin( iterables ) ), out, msg );

};


test( "chain", function () {

	one( [ 'ABC', 'D', 'EF' ] , ['A' ,'D', 'E', 'B' ,'F', 'C' ] ) ;

});
