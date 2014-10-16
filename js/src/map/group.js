
var group = function ( key, iterable, out ) {

	var i, len, curr, next, tuple, item, items;

	len = iterable.length;

	if ( len === 0 ) {
		return out;
	}

	i = 0;
	item = iterable[i];
	next = key( item );

	do {
		curr = next;
		items = [item];
		tuple = [curr, items];

		++i;

		while ( i < len ) {

			item = iterable[i];
			next = key( item );

			if ( next !== curr ) {
				break;
			}

			items.push( item );
			++i;
		}

		out.push( tuple );

	} while ( i < len );


	return out;

};

exports.group = group;
exports.groupby = group;
