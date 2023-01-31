/**
 * @param {number[]} nums
 * @return {number}
 */


// [100,4,200,1,3,2] --> [1,2,3,4,100,200]
//                        ^ ^ ^ ^
var longestConsecutive = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  // sort input array
  nums = nums.sort((a,b) => a - b);


  // create storage for streaks and individual stream
  let longestStreak = 1, currentStreak = 1;

  // detect streaks
  for (var i = 1; i < nums.length; i++) {

    // if previous number + 1 is equal to current number
    if (nums[i-1]+1 === nums[i]) {
      currentStreak++;
      longestStreak = (longestStreak < currentStreak) ? currentStreak : longestStreak;
    } else if (nums[i-1] === nums[i]) {
      continue;
    } else {
      currentStreak = 1;
    }

  }

  // return largest streak
  return longestStreak;
};