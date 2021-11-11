class Solution:
    def sortSentence(self, s: str) -> str:
        clone = s.split(' ')
        res = clone.copy()
        
        for i in clone:
          word = i[0 : len(i) - 1]
          position = i[len(i) - 1 : len(i)]
          res[int(position) - 1] = word
        return ' '.join(res)