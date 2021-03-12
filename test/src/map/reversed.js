import test from 'ava';

import {list, reversed} from '../../../src/index.js';

test('reversed', (t) => {
	const x = function (A, B) {
		t.deepEqual(list(reversed(A)), B);
		t.deepEqual(list(reversed(B)), A);
	};

	x([], []);
	x([1], [1]);
	x([1, 2, 3], [3, 2, 1]);
	x([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]);
	x([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1]);
});
