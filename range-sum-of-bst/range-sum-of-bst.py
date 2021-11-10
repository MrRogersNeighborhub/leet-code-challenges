# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        self.total = 0
        
        def dfs(node):
          if node.val <= high and node.val >= low:
            self.total += node.val
          if node.left: dfs(node.left)
          if node.right: dfs(node.right)
        dfs(root)
        return self.total