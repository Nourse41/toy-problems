/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

 * @param {string} s
 * @return {boolean}
 */

 /*
 Input: takes in a string of (), {}, or [] brackets
 Output: Returns true if all brackets are closed
 Constrants:
    - 1 <= s.length <= 104
    - s consists of parentheses only '()[]{}'.
 Edge Cases:
  - empty string
  - next char isnt closing parens???
 */

var isValid = function(s) {
  // create stack
  let stack = [];
  // create hashMap of brackets
  let hash = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  // iterate over string
  for (var i = 0; i < s.length; i++) {
    // if current char is an closing bracket
    if (hash[s[i]] !== undefined) {
      // if stack isnt empty and last item added matches opening bracket
      if (stack.length && stack.slice(-1)[0] === hash[s[i]]) {
        // remove opening bracket
        stack.pop();
      } else {
        // if no matching
        return false;
      }
    // if bracket is an opening...
    } else {
      // add bracket to stack
      stack.push(s[i])
    }
  }
  // if stack is empty, return true
  return stack.length ? false : true;
};

console.log(isValid(" ()()"))