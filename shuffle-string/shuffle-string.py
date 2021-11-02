class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        map = {}
        res = ''
        for i in range(len(indices)):
          map[indices[i]] = s[i]
        for j in range(len(indices)):
          res += map[j]
        return res