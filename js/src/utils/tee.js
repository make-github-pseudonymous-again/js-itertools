
let tee = function ( iterable , n ) {

	let iterator = iter( iterable ) ;

	let deques = [ ] ;

	while ( n --> 0 ) deques.push( [ ] ) ;

	let gen = function* ( mydeque ) {

		while ( true ) {

			if ( mydeque.length === 0 ) {

				let current = next( iterator ) ;

				if ( current.done ) return ;

				for ( let deque of deques ) deque.push( current.value ) ;

			}

			yield mydeque.shift( ) ;

		}

	} ;

	return list( map( gen , deques ) ) ;

} ;

exports.tee = tee ;
