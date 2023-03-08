/**
 * @param {number[]} nums
 * @return {number}
 */


var pivotIndex = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    var left = nums.slice(0, i).reduce((a, cV) => a + cV, 0);
    var right = nums.slice(i + 1).reduce((a, cV) => a + cV, 0);
    if (left === right) {
      return i;
    }
  }
  return -1
};