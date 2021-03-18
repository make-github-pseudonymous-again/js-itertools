/**
 * Computes the closure of a unary operator, starting from a single element.
 *
 * @experimental Should handle d-ary operators in the future. Not sure the name
 * is well chosen. An actual closure function would keep track of encountered
 * elements to stop when all elements have been found.
 *
 * @example
 * closure( x => x + 1 , 0 ) ; // 0 1 2 3 ...
 *
 * @example
 * closure( x => x * 2 , 1 ) ; // 1 2 4 8 ...
 *
 * @param {Function} operator The operator.
 * @param {Object} start The starting element.
 * @returns {Iterator} Iterator over the closure.
 */
export default function* closure(operator, start) {
	yield start;

	let element = start;

	while (true) {
		element = operator(element);

		yield element;
	}
}
