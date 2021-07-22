/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = 1;
    else map[nums[i]]++;
  }
  for (let key in map) {
    if (map[key] === 1) return key;
  }
};