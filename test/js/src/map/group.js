
var one, operator;

operator = require( "aureooms-js-operator" );

one = function ( key, iterable, expected ) {


	deepEqual(
		itertools.group( key, iterable, [] ),
		expected,
		JSON.stringify( [iterable, key] )
	);

};



test( "group", function () {

	one( operator.identity, "", [] );

	one(
		operator.identity,
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

	one(
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

	one(
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

