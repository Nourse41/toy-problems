// https://leetcode.com/problems/palindrome-linked-list/solutions/1137027/js-python-java-c-easy-floyd-s-reversal-solution-w-explanation/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

let flattenLinkedList = (listNode) => {
  let results = [listNode.value];
  return (listNode.next === null) ? results : results.concat(flattenLinkedList(listNode.next))
}

var isPalindrome = function(head) {
  if (head === null) {
      return true;
  }

let flatList = flattenLinkedList(head);

let first = 0, last = flatList.length - 1;

while (first < last) {
  if (flatList[first] !== flatList[last]) {
      return false;
  }
  first++
  last--
}

return true;
};