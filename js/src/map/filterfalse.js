
var filterfalse = function ( predicate, iterable, out ) {

	var i, len, item;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {

		item = iterable[i];

		if ( ! predicate( item ) ) {
			out.push( item )
		}

	}

	return out;

};

exports.filterfalse = filterfalse;
