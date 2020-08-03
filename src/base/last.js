import {next} from './next';
import {tail} from './tail';

/**
 * Returns the last value of the input iterable. If the iterable is
 * exhausted, throws a {@link StopIteration}.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {Object} The last value of the input iterable.
 */
export function last(iterable) {
	return next(tail(iterable, 1));
}
