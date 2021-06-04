/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);
  let diff;
  for (let i = 0; i < arr.length; i++) {
     if (!diff) {
       diff = Math.abs(arr[i] - arr[i + 1]);
     }
     if (arr[i + 1] && Math.abs(arr[i] - arr[i + 1]) !== diff) {
       return false;
     }
  }
  return true;
};