/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let index = nums[i];
    res.push(nums[index]);
  }
  return res;
};