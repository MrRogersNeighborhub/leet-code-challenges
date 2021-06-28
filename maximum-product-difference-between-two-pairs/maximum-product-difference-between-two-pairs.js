/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  const sorted = nums.sort((a, b) => b - a);
  return (sorted[0] * sorted[1]) - (sorted[sorted.length - 2] * sorted[sorted.length - 1]);
};