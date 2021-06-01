/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  let clone = n.toString().split(''), max = -1;
  for (let i = 0; i < clone.length; i++) {
    if (Number(clone[i]) > max) {
      max = Number(clone[i]);
    }
  }
  return max;
};