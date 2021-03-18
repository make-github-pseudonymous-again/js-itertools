import deque from '@aureooms/js-collections-deque';

import drop from '../base/drop.js';
import next from '../base/next.js';
import StopIteration from '../base/StopIteration.js';

/**
 * Returns the <code>n</code>th value of the input iterable (<code>n</code>
 * is a 0-based index). If
 * <code>n</code> is negative, returns the <code>n</code>th value from the
 * end.
 * If no such value exists, throws a {@link StopIteration}.
 *
 * @example
 * // returns 3
 * nth( range( 5 ) , 3 ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The index of the value to output.
 * @returns {Object} The <code>n</code>th value of the input iterable.
 */
export default function nth(iterable, n) {
	if (n < 0) {
		const deq = deque(iterable, -n);
		if (deq.len() < -n) throw new StopIteration();
		return deq.get(0);
	}

	return next(drop(iterable, n));
}
