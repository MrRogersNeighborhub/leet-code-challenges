class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
      sortedNums = sorted(nums)
      return (sortedNums[len(nums) - 1] * sortedNums[len(nums) - 2]) - (sortedNums[0] * sortedNums[1])