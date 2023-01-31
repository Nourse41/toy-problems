/**
 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

 Notice that the solution set must not contain duplicate triplets.



 Example 1:

 Input: nums = [-1,0,1,2,-1,-4]
 Output: [[-1,-1,2],[-1,0,1]]
 Explanation:
 nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 The distinct triplets are [-1,0,1] and [-1,-1,2].
 Notice that the order of the output and the order of the triplets does not matter.
 Example 2:

 Input: nums = [0,1,1]
 Output: []
 Explanation: The only possible triplet does not sum up to 0.
 Example 3:

 Input: nums = [0,0,0]
 Output: [[0,0,0]]
 Explanation: The only possible triplet sums up to 0.


 Constraints:

 3 <= nums.length <= 3000
 -105 <= nums[i] <= 105


 * @param {number[]} nums
 * @return {number[][]}
 */

/*
  I: takes in an arr of numbers (includes dups)
  O: returns distinct triplets combinations that sum to 0
*/

var input = [-1,0,1,2,-1,-4];

var threeSum = function(nums, target = 0) {
  // sort input array from smallest to largest
  nums = nums.sort((a, b) => a - b);

  // create a result array
  let results = [];

  // iterate over input array
  for (var i = 0; i < nums.length; i++) {
    // check index for duplicate numbers
    if (i > 0 && nums[i] === nums[i-1]) {
      continue;
    };

    // create pointers
    let left = i+1, right = nums.length - 1;

    // loop over input array while left smaller than right indexes
    while (left < right) {
      // create sum value of left, right & loops current index
      let sum = nums[left] + nums[i] + nums[right];

      // if sum totals 0
      if (sum === target) {
        // create array from numbers and push to result array
        results.push([nums[left], nums[i], nums[right]]);

        // check pointers for duplicate numbers
        while (nums[left] === nums[left+1]) {left++};
        while (nums[right] === nums[right-1]) {right--};

        // shift/increment pointers
        left++;
        right--;

      // if sum is greater than zero, increment left pointer or
      } else if (sum < 0) {
        left++;
      // if sum is less than zero, de-increment right pointer
      } else {
        right--;
      }
    }
  }
  return results;
};

console.log(threeSum([0,0,0,0]));