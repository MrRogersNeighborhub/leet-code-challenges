/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const mid = Math.floor(nums.length / 2);
  if (target === nums[mid]) return mid;
  if (nums.length === 1) {
    if (target > nums[0]) return 1;
    else return 0;
  }
  if (nums[mid] < target) return mid + searchInsert(nums.slice(mid) , target);
  else return searchInsert(nums.slice(0, mid) , target);
};