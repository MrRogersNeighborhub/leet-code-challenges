/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let main = head, clone = head;
  while (clone) {
    if (clone.next && clone.val === clone.next.val) clone.next = clone.next.next;
    else clone = clone.next;
  }
  return main;
};