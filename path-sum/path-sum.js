/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const helper = (node, targetSum, currentSum) => {
    if (!node) return false;
    currentSum += node.val;
    
    if (node.left === null && node.right === null) {
      return currentSum === targetSum;
    }
    
    return helper(node.left, targetSum, currentSum) || helper(node.right, targetSum, currentSum);
  }
  return helper(root, targetSum, 0);
};