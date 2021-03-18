import next from './next.js';
import _tail from './_tail.js';

/**
 * Returns the last value of the input iterable. If the iterable is
 * exhausted, throws a {@link StopIteration}.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Object} The last value of the input iterable.
 */
export default function last(iterable) {
	return next(_tail(iterable, 1));
}
