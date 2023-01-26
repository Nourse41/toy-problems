/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  Input: Takes in an array of numbers
  Output: Return an array of 'anwswers' with each element representing the sum of all numbers except self
  Constraints:
    -
  Edge Cases:
    -
*/

var productExceptSelf = function(nums) {
  // create anwser arr
  var answer = [];

  // iterate outer loop
  for (var i = 0; i < nums.length; i++) {
    // create a sum --> set to first value
    var sum = 0;
    // create first run flag
    var firstRun = true;

    // iterate over inner loop
    for (var j = 0; j < nums.length; j++) {
      // if inner loop variable matches outer, skip iteration
      if (j === i) {
        continue;
      } else {
        if (firstRun) {
          firstRun = false;
          sum = nums[j];
        } else {
          sum = sum * nums[j];
        }
      }
    }

    // push sum to answser arr
    answer.push(sum);
    // reset firstRun flag
    firstRun = true;
  }

  // return answer arr
  return answer;
};