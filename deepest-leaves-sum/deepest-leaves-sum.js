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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let sum = 0;
  let deepestLevel = 0;

  const traverse = (node, level) => {
    if (!node) return;

    if (level === deepestLevel) sum += node.val;    
    else if (level > deepestLevel) {
      deepestLevel = level;    
      sum = node.val;
    }
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
  traverse(root, 0);
  return sum;
};