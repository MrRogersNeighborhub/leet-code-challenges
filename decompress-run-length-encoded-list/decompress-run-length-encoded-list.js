/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    let temp = 1;
    while (temp <= nums[i]) {
      result.push(nums[i + 1]);
      temp++;
    }
  }
  return result;
};