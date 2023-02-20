/*
    https://leetcode.com/problems/longest-repeating-character-replacement/

    You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
    Return the length of the longest substring containing the same letter you can get after performing the above operations.

    Example 1:

    Input: s = "ABAB", k = 2
    Output: 4
    Explanation: Replace the two 'A's with two 'B's or vice versa.
    Example 2:

    Input: s = "AABABBA", k = 1
    Output: 4
    Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
    The substring "BBBB" has the longest repeating letters, which is 4.


    Constraints:

    1 <= s.length <= 105
    s consists of only uppercase English letters.
    0 <= k <= s.length
 */

var characterReplacement = function(s, k) {
  let left = 0, maxLength = 0, hash = {};

  // create sliding window
  for (var right = 0; right < s.length; right++) {
    // add/increment right pointer to hash
    hash[s[right]] ? hash[s[right]]++ : hash[s[right]] = 1;

    // while window is invalid
    while (right - left + 1 - Math.max(...Object.values(hash)) > k) {
      // deincrement hash
      hash[s[left]]--;
      // shift left pointer
      left++;
    }
    // update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};