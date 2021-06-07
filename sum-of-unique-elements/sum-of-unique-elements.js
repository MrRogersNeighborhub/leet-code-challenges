/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  const map = {};
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }
  for (let key in map) {
    if (map[key] === 1) {
      sum += Number(key);
    }
  }
  return sum;
};