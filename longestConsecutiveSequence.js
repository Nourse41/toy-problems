/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {

  // sort input numbers
  var sortedNums = nums.sort((a, b) => {
    return a - b;
  });

  // create obj to store streaks --> array?
  var streaks = [];

  // streakFlag
  var streakFlag = true;

  // current streak
  var currStreak = [];

  // iterate over input nums
  for (var i = 0; i < sortedNums.length; i++) {
      // detect start of  streak
      if (sortedNums[i - 1] === (sortedNums[i] - 1)) {
          if (streakFlag) {
              currStreak.push(sortedNums[i - 1])
              streakFlag = false;
          }
      }

      // detect end of streak
      if (sortedNums[i + 1] !== (sortedNums[i] + 1)) {
        // push streak to storage
        if (currStreak.length) {
            streaks.push(currStreak)
        }
        // reset currStreak and streakFlag
        currStreak = [];
        streakFlag = true;
      }
  }

var sortedStreaks = streaks.sort((a, b) => {
    return a.length - b.length;
});

return sortedStreaks[sortedStreaks.length - 1];
};

console.log(longestConsecutive([100,4,200,1,3,2,101,102,7,8]));