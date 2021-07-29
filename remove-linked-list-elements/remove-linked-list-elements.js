/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let clone = head;
  while (head) {
    if (head.val === val) head = head.next;
    else break;
  }
  while (clone) {
    if (clone.next && clone.next.val === val) clone.next = clone.next.next;
    else clone = clone.next; 
  }
  return head;
};