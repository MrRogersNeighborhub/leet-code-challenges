class Solution:
    def balancedStringSplit(self, s: str) -> int:
        batch = 0
        matches = 0
        
        for i in range(len(s)):
          if s[i] == 'R':
            batch += 1
          elif s[i] == 'L':
            batch -= 1
          
          if batch == 0:
            matches += 1
            
        return matches