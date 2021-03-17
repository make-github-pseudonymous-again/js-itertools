import test from 'ava';

import {range, last, StopIteration} from '../../../src/index.js';

test('last', (t) => {
	t.throws(
		() => last(range(0)),
		{instanceOf: StopIteration},
		'last on empty range throws StopIteration',
	);

	t.is(last(range(57, 14, -3)), 15);
	t.is(last(range(57, 15, -3)), 18);
	t.is(last(range(57, 16, -3)), 18);
	t.is(last(range(57, 17, -3)), 18);
	t.is(last(range(57, 18, -3)), 21);

	const it = range(100);

	t.is(last(it), 99);

	t.throws(
		() => last(it),
		{instanceOf: StopIteration},
		'last on empty iterator throws StopIteration',
	);
});
