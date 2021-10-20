/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let res = 0;
  for (let i = 0; i < operations.length; i++) {
    let value = operations[i].split('X').join('');
    if (value === '++') res++;
    else res--;
  }
  return res;
};