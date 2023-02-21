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
Accepted
3.1M
Submissions
7.6M



Input: takes in a string of () {} or [] chars
Output: returns true/false if the parentheses are valid
*/

const fs = require('fs');
let input = process.argv[2]

const isValid = (s) => {
  // create stack
  let stack = [];

  // create hash
  let hash = {
    ")" : "(",
    "}" : "{",
    "]" : "["
  }

  // iterate over input string
  for (var i = 0; i < s.length; i++) {
    // if current char is a closing bracket
    if (hash[s[i]] && stack.length) {
      // check if top of stack is matching opening bracket
      if (stack.slice(-1)[0] === hash[s[i]]) {
        // pop last char
        stack.pop();
        // else
      } else {
        // return false
        return false;
      }
    } else {
      // push last char to stack
      stack.push(s[i])
    }
  }
  // return true if stack is empty or return false
  return stack.length ? false : true;
}

console.log(isValid(input))