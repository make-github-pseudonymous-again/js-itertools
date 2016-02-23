
export function* starmap ( callable , iterable ) {

	for ( let item of iterable ) yield callable.apply( null , item ) ;
	//for ( let args of iterable ) yield callable( ...args ) ;

}
