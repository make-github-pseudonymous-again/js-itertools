
let nrepeat = function* ( item , times ) {

	while ( times --> 0 ) yield item ;

} ;

exports.nrepeat = nrepeat ;
