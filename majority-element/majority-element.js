/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {};
  let count = 0, max;
  for (let i = 0; i < nums.length; i ++) {
    if (!map[nums[i]]) map[nums[i]] = 1;
    else map[nums[i]]++
    if (map[nums[i]] > count) {
      count = map[nums[i]];
      max = nums[i];
    }
  }
  return max;
};