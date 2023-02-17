/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(string) {
  let left = 0, maxLength = 0;

  let substring = new Set(string[left]);

  if (string.length === 1) {
    return 1;
  }

  for (var i = 1; i < string.length; i++) {
    while (substring.has(string[i])) {
      substring.delete(string[left]);
      left++;
    }
    substring.add(string[i]);
    maxLength = Math.max(maxLength, substring.size)
  }
return maxLength;
};
