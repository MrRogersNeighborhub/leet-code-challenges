class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums_sorted = sorted(nums)
        res_array = []
        for i in range(0, len(nums_sorted), 2):
          res_array.append(nums_sorted[i] + nums_sorted[-i - 1])
        return sorted(res_array)[-1]