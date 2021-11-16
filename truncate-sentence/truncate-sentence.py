class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        arr = s.split()
        arr = arr[0 : k]
        return ' '.join(arr)