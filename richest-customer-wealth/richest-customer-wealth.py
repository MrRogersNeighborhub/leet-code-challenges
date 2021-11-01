class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        wealth = 0
        for i in range(len(accounts)):
          curAcc = accounts[i]
          curWealth = 0
          for j in range(len(curAcc)):
            curWealth += curAcc[j]
          if (curWealth > wealth):
            wealth = curWealth
        return wealth