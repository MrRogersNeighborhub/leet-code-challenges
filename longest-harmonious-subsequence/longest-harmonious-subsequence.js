/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = {};
  let max = 0;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = 1;
    else map[nums[i]]++;
  }
  const mapKeys = Object.keys(map);
  for (let i = 1; i < mapKeys.length; i++) {
    if (Math.abs(mapKeys[i] - mapKeys[i - 1]) === 1) {
      if (map[mapKeys[i]] + map[mapKeys[i - 1]] > max) {
        max = map[mapKeys[i]] + map[mapKeys[i - 1]];
      }
    }
  }
  return max;
};