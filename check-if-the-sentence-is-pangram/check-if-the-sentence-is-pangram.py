class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return all(letter in sentence for letter in 'abcdefghijklmnopqrstuvwxyz')