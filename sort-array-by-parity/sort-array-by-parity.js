/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      result.push(nums[i]);
    }
  }
  return result;
};