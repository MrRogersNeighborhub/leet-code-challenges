class Solution:
    def maxDepth(self, s: str) -> int:
        maxDepth = 0
        depth = 0
        for i in s:
          if i == '(':
            depth += 1
          elif i == ')':
            depth -= 1
          if depth > maxDepth:
            maxDepth = depth
        return maxDepth
            