import { _range } from './_range' ;

export function range ( start , stop , step ) {

	if ( stop === undefined ) return _range( 0 , start , 1 ) ;

	if ( step === undefined ) return _range( start , stop , 1 ) ;

	return _range( start , stop , step ) ;

}
