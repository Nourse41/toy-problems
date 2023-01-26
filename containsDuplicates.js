/**
 * @param {number[]} nums
 * @return {boolean}

 Input: takes in an array of postive or negative integers
 Output: returns a boolean represent whether there were duplicate nums in the input array

 */
 var containsDuplicate = function(nums) {
  let set = new Set();

  nums.slice().forEach((number) => {
      set.add(number)
  });

  return set.size === nums.length ? false : true;
};