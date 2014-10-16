

var sum = function ( iterable ) {

	var i, len, total;

	total = 0;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {
		total += iterable[i];
	}

	return total;

};

exports.sum = sum;
