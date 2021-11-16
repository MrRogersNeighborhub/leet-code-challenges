class Solution:
    def minOperations(self, n: int) -> int:
        arr = [1]
        for i in range(1, n):
          arr.append(arr[i - 1] + 2)
          
        mid = (arr[0] + arr[-1]) / 2
        res = 0
        half = math.floor(len(arr) / 2)
        for i in range(0, half):
          res += mid - arr[i]
          
        return int(res)
        