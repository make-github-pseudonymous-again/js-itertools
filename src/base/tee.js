import iter from './iter.js';
import list from './list.js';
import map from '../map/map.js';

import {deque} from '@aureooms/js-collections-deque';

/**
 * Returns <code>n</code> copies of the input iterable. Note that if the input
 * iterable is an iterator, then it must be discarded by the caller after
 * calling tee.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of copies to make.
 * @returns {Iterator[]}
 */
export default function tee(iterable, n) {
	const iterator = iter(iterable);

	const copies = [];

	while (n-- > 0) {
		copies.push(deque());
	}

	const gen = function* (mycopy) {
		while (true) {
			if (mycopy.length === 0) {
				const current = iterator.next();

				if (current.done) {
					return;
				}

				for (const copy of copies) {
					copy.append(current.value);
				}
			}

			yield mycopy.popleft();
		}
	};

	return list(map(gen, copies));
}
