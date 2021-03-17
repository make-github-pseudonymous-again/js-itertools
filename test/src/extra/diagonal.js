import test from 'ava';

import {lexicographical, increasing} from '@aureooms/js-compare';

import {
	list,
	diagonal,
	range,
	count,
	take,
	product,
	sorted,
} from '../../../src/index.js';

test('diagonal docstring example', (t) => {
	const result = list(diagonal(range(2), range(2)));
	const expected = [
		[0, 0],
		[0, 1],
		[1, 0],
		[1, 1],
	];

	t.deepEqual(expected, result);
});

test('diagonal finite square', (t) => {
	const result = list(diagonal(range(3), range(3)));
	const expected = [
		[0, 0],
		[0, 1],
		[1, 0],
		[0, 2],
		[1, 1],
		[2, 0],
		[1, 2],
		[2, 1],
		[2, 2],
	];

	t.deepEqual(expected, result);
});

test('diagonal finite rectangle (vertical)', (t) => {
	const result = list(diagonal(range(4), range(3)));
	const expected = [
		[0, 0],
		[0, 1],
		[1, 0],
		[0, 2],
		[1, 1],
		[2, 0],
		[1, 2],
		[2, 1],
		[3, 0],
		[2, 2],
		[3, 1],
		[3, 2],
	];

	t.deepEqual(expected, result);
});

test('diagonal finite rectangle (horizontal)', (t) => {
	const result = list(diagonal(range(3), range(4)));
	const expected = [
		[0, 0],
		[0, 1],
		[1, 0],
		[0, 2],
		[1, 1],
		[2, 0],
		[0, 3],
		[1, 2],
		[2, 1],
		[1, 3],
		[2, 2],
		[2, 3],
	];

	t.deepEqual(expected, result);
});

test('diagonal large but finite', (t) => {
	const N = 10;
	const M = 10000;
	const result = list(take(diagonal(range(M), range(M)), N));
	const expected = [
		[0, 0],
		[0, 1],
		[1, 0],
		[0, 2],
		[1, 1],
		[2, 0],
		[0, 3],
		[1, 2],
		[2, 1],
		[3, 0],
	];

	t.deepEqual(expected, result);
});

test('diagonal infinite', (t) => {
	const N = 10;
	const result = list(take(diagonal(count(), count()), N));
	const expected = [
		[0, 0],
		[0, 1],
		[1, 0],
		[0, 2],
		[1, 1],
		[2, 0],
		[0, 3],
		[1, 2],
		[2, 1],
		[3, 0],
	];

	t.deepEqual(expected, result);
});

test('diagonal empty x empty', (t) => {
	const result = list(diagonal(range(0), range(0)));
	const expected = [];
	t.deepEqual(expected, result);
});

test('diagonal empty x finite', (t) => {
	const result = list(diagonal(range(0), range(100)));
	const expected = [];
	t.deepEqual(expected, result);
});

test('diagonal finite x empty', (t) => {
	const result = list(diagonal(range(100), range(0)));
	const expected = [];
	t.deepEqual(expected, result);
});

test('diagonal empty x infinite', (t) => {
	const result = list(diagonal(range(0), count()));
	const expected = [];
	t.deepEqual(expected, result);
});

test('diagonal infinite x empty', (t) => {
	const result = list(diagonal(count(), range(0)));
	const expected = [];
	t.deepEqual(expected, result);
});

test('diagonal finite x infinite', (t) => {
	const N = 13;
	const result = list(take(diagonal(range(3), count()), N));
	const expected = [
		[0, 0],
		[0, 1],
		[1, 0],
		[0, 2],
		[1, 1],
		[2, 0],
		[0, 3],
		[1, 2],
		[2, 1],
		[0, 4],
		[1, 3],
		[2, 2],
		[0, 5],
	];

	t.deepEqual(expected, result);
});

test('diagonal infinite x finite', (t) => {
	const N = 13;
	const result = list(take(diagonal(count(), range(3)), N));
	const expected = [
		[0, 0],
		[0, 1],
		[1, 0],
		[0, 2],
		[1, 1],
		[2, 0],
		[1, 2],
		[2, 1],
		[3, 0],
		[2, 2],
		[3, 1],
		[4, 0],
		[3, 2],
	];

	t.deepEqual(expected, result);
});

const compare = lexicographical(increasing);
const set = (x) => sorted(compare, x);

test('diagonal compared to product (vertical)', (t) => {
	const M = 100;
	const N = 25;

	const expected = list(product([range(M), range(N)]));
	const result = set(diagonal(range(M), range(N)));

	t.deepEqual(expected, result);
});

test('diagonal compared to product (horizontal)', (t) => {
	const M = 25;
	const N = 100;

	const expected = list(product([range(M), range(N)]));
	const result = set(diagonal(range(M), range(N)));

	t.deepEqual(expected, result);
});
