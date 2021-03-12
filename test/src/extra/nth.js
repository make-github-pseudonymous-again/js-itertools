import test from 'ava';

import {range, nth, StopIteration} from '../../../src/index.js';

function macro(t, iterable, n, expected) {
	t.is(expected, nth(iterable, n));
}

macro.title = (title, iterable, n, expected) =>
	`nth(${title || JSON.stringify(iterable)}, ${n}) === ${expected}`;

function throws(t, iterable, n) {
	t.throws(() => nth(iterable, n), {instanceOf: StopIteration});
}

throws.title = (title, iterable, n) =>
	`nth(${title || JSON.stringify(iterable)}, ${n}) -> StopIteration`;

test(macro, [1, 2, 3], 0, 1);
test(macro, [1, 2, 3], 1, 2);
test(macro, [1, 2, 3], 2, 3);

test(macro, [1, 2, 3], -1, 3);
test(macro, [1, 2, 3], -2, 2);
test(macro, [1, 2, 3], -3, 1);

test(throws, [1, 2, 3], 3);
test(throws, [1, 2, 3], -4);

test('range(57, 14, -3)', macro, range(57, 14, -3), -1, 15);
test('range(57, 15, -3)', macro, range(57, 15, -3), -1, 18);
test('range(57, 16, -3)', macro, range(57, 16, -3), -1, 18);
test('range(57, 17, -3)', macro, range(57, 17, -3), -1, 18);
test('range(57, 18, -3)', macro, range(57, 18, -3), -1, 21);

test('range(5)', macro, range(5), 3, 3);
test('range(100)', macro, range(100), -1, 99);

test('range(0)', throws, range(0), -1);

test('chained calls to nth(...)', (t) => {
	const it = range(100);

	t.is(nth(it, 1), 1);
	t.is(nth(it, 1), 3);
	t.is(nth(it, 3), 7);
	t.is(nth(it, -3), 97); // Consumes it.

	t.throws(() => nth(it, 0), {instanceOf: StopIteration});
});
