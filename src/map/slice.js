import iter from '../base/iter.js';

/**
 * Same as
 * <code>map( [ i , x ] => x , filter( [ i , x ] => (new Set( range( start ,
 * stop , step ) ) ).has( i ) , enumerate( iterable ) ) );</code>.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} start - Where to start the slice.
 * @param {Number} stop - Where to stop the slice.
 * @param {Number} step - The step of the slice.
 * @returns {IterableIterator}
 */
export default function* slice(iterable, start, stop, step) {
	const iterator = iter(iterable);

	while (start > 0) {
		if (iterator.next().done) {
			return;
		}

		--start;
		--stop;
	}

	while (stop > 0) {
		const current = iterator.next();

		if (current.done) {
			return;
		}

		yield current.value;

		--stop;

		let n = step;

		while (n > 1) {
			if (iterator.next().done) {
				return;
			}

			--n;
		}
	}
}
