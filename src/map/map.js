
export function* map ( callable , iterable ) {

	for ( let item of iterable ) yield callable( item ) ;

}
