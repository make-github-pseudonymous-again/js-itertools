
var pick = function( array, indices, out ) {

	var i, k, len;

	len = indices.length;

	for ( i = 0 ; i < len ; ++i ) {
		k = indices[i];
		out.push( array[k] );
	}

	return out;
};

exports.pick = pick;
