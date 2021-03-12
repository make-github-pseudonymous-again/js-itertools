import test from 'ava';

import {cycle, next} from '../../../src/index.js';

test('cycle (empty)', (t) => {
	// The empty use case is very important
	// in case of an empty input, cycle must
	// stop immediately (no infinite loop)

	const it = cycle([]);

	t.is(it.next().done, true, 'Cycle on empty list should be empty.');
});

test('cycle', (t) => {
	const a = [1, 7, 3];

	const it = cycle(a);

	for (let i = 0; i < 1000; ++i) {
		for (const [j, element] of a.entries()) {
			t.deepEqual(next(it), element, i + '.' + j);
		}
	}
});
