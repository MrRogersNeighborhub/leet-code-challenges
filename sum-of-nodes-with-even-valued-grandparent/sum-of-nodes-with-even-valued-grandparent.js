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
var sumEvenGrandparent = function(root) {
    if (!root)
        return 0;
    let sum = 0;
    const left = root.left,
          right = root.right;
    if (root.val % 2 === 0){
        sum += left?.left?.val||0;
        sum += left?.right?.val||0;
        sum += right?.left?.val||0;
        sum += right?.right?.val||0;
    }
    sum += left && sumEvenGrandparent(left);
    sum += right && sumEvenGrandparent(right);
    return sum;
};