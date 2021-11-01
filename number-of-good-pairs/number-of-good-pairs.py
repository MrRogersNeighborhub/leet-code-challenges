class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        key = {}
        res = 0
        for i in nums:
          if i in key:
            res += key[i]
            key[i] += 1
          else:
            key[i] = 1
        return res