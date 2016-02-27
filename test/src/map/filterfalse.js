
test("filterfalse", t => {

	import { list , filterfalse } from 'aureooms-es-itertools' ;
	import { le } from 'aureooms-js-predicate' ;

	const x = ( predicate, iterable, out ) => {
		t.same( list( filterfalse( predicate, iterable ) ), out );
	};

	x( le(0), [], [] );
	x( le(0), [0], [] );
	x( le(0), [6], [6] );

	x( le(0), [-6], [] );
	x( le(0), [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6] );
	x( le(0), [0, 0, 1, 2, 0, 3, 0, 4, -7, 5, 6], [1, 2, 3, 4, 5, 6] );
});
