import test from 'ava' ;

import { list , map , group } from '../../..' ;
import { identity } from 'aureooms-js-operator' ;

test( "group", t => {

	const x = ( key, iterable, expected ) => {

		t.deepEqual( list( map( ( [ k , g ] ) => [ k , list( g ) ] , group( key , iterable ) ) ), expected );

	};

	x( identity, "", [] );

	x(
		identity,
		"AAAAAABBBBCCCCAABBCC",
		[
			["A", ["A","A","A","A","A","A"] ],
			["B", ["B","B","B","B"] ],
			["C", ["C","C","C","C"] ],
			["A", ["A","A"] ],
			["B", ["B","B"] ],
			["C", ["C","C"] ]
		]
	);

	x(
		function ( item ) {
			return item.charCodeAt(0) - 65;
		},
		"AAAAAABBBBCCCCAABBCC",
		[
			[0, ["A","A","A","A","A","A"] ],
			[1, ["B","B","B","B"] ],
			[2, ["C","C","C","C"] ],
			[0, ["A","A"] ],
			[1, ["B","B"] ],
			[2, ["C","C"] ]
		]
	);

	x(
		function ( item ) {
			return Math.floor( ( item.charCodeAt(0) - 65 ) / 2 );
		},
		"AAAAAABBBBCCCCAABBCC",
		[
			[0, ["A","A","A","A","A","A","B","B","B","B"] ],
			[1, ["C","C","C","C"] ],
			[0, ["A","A","B","B"] ],
			[1, ["C","C"] ]
		]
	);

});

//test( 'group for infinite sequence of 0' , t => {

//} );
