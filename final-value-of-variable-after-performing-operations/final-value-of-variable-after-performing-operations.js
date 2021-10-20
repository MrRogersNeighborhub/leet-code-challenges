/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
	return operations.reduce((res, operation) => {
		return res + (operation.includes('++') ? 1 : -1);
	}, 0);
};