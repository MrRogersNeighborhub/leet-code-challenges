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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const order = [];
  if (!root) return order;
  
  const helper = (node) => {
    if (!node) return;
    
    if (node.left) {
      order.push(node.left.val);
      helper(node.left);
    }
    if (node.right) {
      order.push(node.right.val);
      helper(node.right);
    }
  }
  order.push(root.val);
  helper(root);
  return order;
};