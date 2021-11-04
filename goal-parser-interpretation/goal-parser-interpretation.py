class Solution:
    def interpret(self, command: str) -> str:
        res = ''
        for i in range(len(command)):
          if command[i] == '(' and command[i + 1] == 'a':
            res += 'al'
          elif command[i] == '(':
            res += 'o' 
          elif command[i] == 'G':
            res += 'G'
        return res