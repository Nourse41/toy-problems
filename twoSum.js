/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

  /*
  Inputs: takes in an array of numbers and a sum target number
  Outputs: returns an array of the combination of indexes that sum the target value
  Conditions:
  Edge Cases:
            - array will be larger or equal to a length of two
            - each number could be a very large negative or postive number
            - the target value could be a very large negative or postive number
  */

var twoSum = (nums, target) => {
  // key === number | value === index
  let hashMap = {};

  for (var i = 0; i < nums.length; i++) {
      let remainder = target - nums[i];
      // check if remainder exisits in hashMap
      if (hashMap[remainder] !== undefined) {
          return [hashMap[remainder], i];
      } else {
          hashMap[nums[i]] = i;
      }
  }
};