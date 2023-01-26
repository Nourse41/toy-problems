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

//  1 --> 2 --> 3 --> null
//  null <-- 1 <-- 2 <-- 3

var reverseList = function(head) {
  // declare previous & current pointers
  let previous = null, current = head, temp = null;

  // traverse list
  while (current !== null) {
    // set temp to current.next value
    temp = current.next;

    // set current nodes next value to previous pointer
    current.next = previous;

    // set the current pointer to previous
    previous = current

    // pointer current to current.next
    current = temp;
  }
  return previous;
}