var jump = function(nums) {
  // start at index 0
  // create a currentMax = 0, and total = 0 variable where total is equal to the biggest reach of the previous Index
  // create a count variable to count jumps
  let currentMax = 0;
  let total = 0;
  let count = 0;
  // iterate through the array i = 0; i < nums.length -1; i++
  for (let i = 0; i < nums.length - 1; i++) {
    // compare currentMax to i + nums[i] so currentIndex + maxJump from that index
    if (currentMax < i + nums[i]) {
      currentMax = i + nums[i];
    }
    // if index is equal to total
    if (i === total) {
      // count++ meaning we had to jump.
      count++;
      // total = currentMax so our total is equal to the max jump at this index.
      total = currentMax;
    }
  }
  return count;
};
