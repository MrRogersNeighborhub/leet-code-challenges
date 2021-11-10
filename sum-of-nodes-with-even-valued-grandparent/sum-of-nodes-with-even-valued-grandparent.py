# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        self.total = 0
        
        def dfs(node):
          if node.val % 2 == 0:
            if node.left:
              if node.left.left: self.total += node.left.left.val
              if node.left.right: self.total += node.left.right.val
            if node.right:
              if node.right.left: self.total += node.right.left.val
              if node.right.right: self.total += node.right.right.val
          if node.left: dfs(node.left)
          if node.right: dfs(node.right)
        dfs(root)
        return self.total
            