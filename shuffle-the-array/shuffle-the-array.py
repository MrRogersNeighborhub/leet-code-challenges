class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        res = []
        half = round(len(nums) / 2)
        for i in range(half):
          res.append(nums[i])
          res.append(nums[half + i])
        return res