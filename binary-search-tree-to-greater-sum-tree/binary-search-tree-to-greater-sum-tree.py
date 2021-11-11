# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:
        def getSum (node, sum):
          if not node: return sum
          node.val += getSum(node.right, sum)
          return getSum(node.left, node.val)
        
        getSum(root, 0)
        return root