class Solution:
    def numberOfSteps(self, num: int) -> int:
        clone = num
        res = 0
        while (clone > 0):
          if clone % 2 == 0:
            res += 1
            clone = clone / 2
          else:
            res += 1
            clone -= 1
        return res