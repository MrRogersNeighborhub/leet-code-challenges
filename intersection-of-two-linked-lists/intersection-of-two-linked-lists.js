/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let a = headA, b = headB;
  while (a || b) {
    if (!b) break;
    while (a) {
      if (a === b) {
        return a;
      } else {
        a = a.next;
      }
    }
    b = b.next;
    a = headA;
  }
    
  return null;
};