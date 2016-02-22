
let product = function* ( iterables , r ) {

	// product(['ABCD', 'xy'], 1) --> Ax Ay Bx By Cx Cy Dx Dy
	// product([range(0, 2, 1)], 3) --> 000 001 010 011 100 101 110 111

	let pools = list( ncycle( reversed( map( list , iterables ) ) , r ) ) ;

	yield* map( list , _product( pools , 0 , pools.length ) ) ;

} ;

exports.product = product ;
