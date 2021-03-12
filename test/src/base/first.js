import test from 'ava';

import {range, first, StopIteration} from '../../../src/index.js';

test('first', (t) => {
	t.throws(
		() => first(range(0)),
		{instanceOf: StopIteration},
		'first on empty iterator throws StopIteration'
	);

	const it = range(57, 14, -3);

	t.is(first(it), 57);
	t.is(first(it), 54);
	t.is(first(it), 51);
});
